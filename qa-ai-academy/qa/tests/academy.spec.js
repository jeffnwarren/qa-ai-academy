const { test, expect } = require('@playwright/test');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const appUrl = pathToFileURL(
  path.join(__dirname, '..', '..', 'qa_ai_academy.html')
).href;

const STORAGE_KEY = 'qa_ai_academy_v1';

const MISSIONS = [
  { id: 'm1', title: '"First Contact"', questions: 4, skills: ['Model Literacy', 'Critical Evaluation'] },
  { id: 'm2', title: '"The Briefing Room"', questions: 4, skills: ['Prompt Design', 'Human Judgment'] },
  { id: 'm3', title: '"Pattern Recognition"', questions: 4, skills: ['Critical Evaluation', 'Model Literacy'] },
  { id: 'm4', title: '"Fabricated Evidence"', questions: 5, skills: ['Critical Evaluation', 'Human Judgment', 'Workflow Integration'] },
  { id: 'm5', title: '"Embedded Field Kit"', questions: 4, skills: ['Model Literacy', 'Workflow Integration'] },
  { id: 'm6', title: '"Inline Edit Duel"', questions: 4, skills: ['Prompt Design', 'Human Judgment', 'Workflow Integration'] },
  { id: 'm7', title: '"Standing Orders"', questions: 4, skills: ['Prompt Design', 'Model Literacy'] },
  { id: 'm8', title: '"Node Break/Fix"', questions: 4, skills: ['Human Judgment', 'Model Literacy'] },
  { id: 'm9', title: '"Browser Recon"', questions: 5, skills: ['Workflow Integration', 'Human Judgment'] },
  { id: 'm10', title: '"Python Evidence Scanner"', questions: 4, skills: ['Model Literacy', 'Critical Evaluation'] },
  { id: 'm11', title: '"Two-Agent Review"', questions: 5, skills: ['Critical Evaluation', 'Prompt Design', 'Workflow Integration'] },
  { id: 'm12', title: '"Memory Protocol"', questions: 4, skills: ['Model Literacy', 'Human Judgment', 'Workflow Integration'] },
  { id: 'm13', title: '"Tradecraft Journal"', questions: 5, skills: ['Workflow Integration', 'Human Judgment', 'Model Literacy'] },
];

const REQUIRED_SECTIONS = [
  'Objective',
  'Concept',
  'Hands-on exercise',
  'Failure mode',
  'Debrief',
  'Completion criteria',
];

async function openMissions(page) {
  await page.getByRole('tab', { name: 'Missions' }).click();
}

async function seedAllMissionsAvailable(page) {
  await page.goto(appUrl);
  await page.evaluate(({ storageKey, missionIds }) => {
    const missions = Object.fromEntries(missionIds.map(id => [id, 'current']));
    localStorage.setItem(storageKey, JSON.stringify({ contentVersion: 11, missions }));
  }, { storageKey: STORAGE_KEY, missionIds: MISSIONS.map(mission => mission.id) });
  await page.reload();
}

test.beforeEach(async ({ page }) => {
  await page.goto(appUrl);
  await page.evaluate(storageKey => localStorage.removeItem(storageKey), STORAGE_KEY);
  await page.reload();
});

test('first run presents a safe, playable 13-mission campaign', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /Practical AI Testing/ })).toBeVisible();
  await expect(page.getByText('Progress points:')).toContainText('0');
  await expect(page.locator('#current-die')).toHaveText('d4');
  await expect(page.getByText(/use only synthetic, public, or explicitly approved non-sensitive data/i)).toBeVisible();

  await openMissions(page);
  const roster = page.locator('.mission-item');
  await expect(roster).toHaveCount(13);
  await expect(page.locator('#item-m1')).toBeEnabled();

  for (const mission of MISSIONS.slice(1)) {
    await expect(page.locator(`#item-${mission.id}`)).toBeDisabled();
  }
});

test('every mission preserves its curriculum structure and skill mapping', async ({ page }) => {
  await seedAllMissionsAvailable(page);
  await openMissions(page);

  for (const mission of MISSIONS) {
    await page.locator(`#item-${mission.id}`).click();
    await expect(page.locator('.mission-title')).toHaveText(mission.title);
    await expect(page.locator('.section-label')).toHaveCount(REQUIRED_SECTIONS.length);

    const sectionLabels = await page.locator('.section-label').allTextContents();
    for (const section of REQUIRED_SECTIONS) {
      expect(
        sectionLabels.some(label => label.toLowerCase().includes(section.toLowerCase())),
        `${mission.id} should contain ${section}`
      ).toBeTruthy();
    }

    await expect(page.locator('.attr-tags span')).toHaveText(mission.skills);
    await expect(page.locator('[data-debrief-id]')).toHaveCount(mission.questions);
    await expect(page.locator('.objective-list').first().locator('li')).not.toHaveCount(0);
    await expect(page.locator('.objective-list').last().locator('li')).not.toHaveCount(0);
    await expect(page.locator(`#${mission.id}-complete-btn`)).toBeDisabled();
    await page.getByRole('button', { name: /Back to missions/i }).click();
  }
});

test('a learner can complete all missions in order and retain progress', async ({ page }) => {
  await openMissions(page);

  for (let index = 0; index < MISSIONS.length; index += 1) {
    const mission = MISSIONS[index];
    const missionButton = page.locator(`#item-${mission.id}`);
    await expect(missionButton).toBeEnabled();
    await missionButton.click();

    const answers = page.locator('[data-debrief-id]');
    await expect(answers).toHaveCount(mission.questions);

    for (let question = 0; question < Math.min(4, mission.questions); question += 1) {
      await answers.nth(question).fill(`Evidence-based reflection for ${mission.id} question ${question + 1}.`);
    }

    if (mission.questions > 4) {
      await expect(page.locator(`#${mission.id}-complete-btn`)).toBeDisabled();
      for (let question = 4; question < mission.questions; question += 1) {
        await answers.nth(question).fill(`Evidence-based reflection for ${mission.id} question ${question + 1}.`);
      }
    }

    const completeButton = page.locator(`#${mission.id}-complete-btn`);
    await expect(completeButton).toBeEnabled();
    await completeButton.click();
    await expect(page.locator(`#${mission.id}-gate-note`)).toContainText('Learning progress has been updated');

    const expectedPoints = String((index + 1) * 5);
    await expect(page.locator('#pts-display')).toHaveText(expectedPoints);

    // Calling the completion action again must not award points twice.
    await page.evaluate(id => window.completeMission(id), mission.id);
    await expect(page.locator('#pts-display')).toHaveText(expectedPoints);

    await page.getByRole('button', { name: /Back to missions/i }).click();
    await expect(page.locator(`#status-${mission.id}`)).toHaveClass(/complete/);

    if (index + 1 < MISSIONS.length) {
      await expect(page.locator(`#item-${MISSIONS[index + 1].id}`)).toBeEnabled();
    }
  }

  await expect(page.locator('#current-die')).toHaveText('d12');
  await page.reload();
  await openMissions(page);
  await expect(page.locator('.mission-status.complete')).toHaveCount(MISSIONS.length);
  await expect(page.locator('#pts-display')).toHaveText('65');
});

test('profile, notes, and campaign style survive reload', async ({ page }) => {
  await page.getByLabel('Display name / call sign').fill('Alex');
  await page.getByLabel('Current role').fill('QA Engineer');
  await page.getByRole('tab', { name: 'Field Notes' }).click();
  await page.locator('#field-notes').fill('Verify claims against current evidence.');

  await page.getByRole('button', { name: 'Options' }).click();
  await page.getByRole('button', { name: 'Manual' }).click();
  await page.reload();

  await expect(page.getByLabel('Display name / call sign')).toHaveValue('Alex');
  await expect(page.getByLabel('Current role')).toHaveValue('QA Engineer');
  await page.getByRole('tab', { name: 'Field Notes' }).click();
  await expect(page.locator('#field-notes')).toHaveValue('Verify claims against current evidence.');

  await openMissions(page);
  await page.locator('#item-m1').click();
  await expect(page.locator('.narrative-brief')).toHaveCount(0);
});

test('embedded lab harnesses report their intentional starting evidence', async ({ page }) => {
  await page.getByRole('tab', { name: 'Field Kit' }).click();

  await page.getByRole('button', { name: 'Run Node-equivalent tests' }).click();
  await expect(page.locator('#node-output')).toContainText('2/3');
  await expect(page.locator('#node-output')).toContainText('FAIL');

  await page.getByRole('button', { name: 'Run evidence checks' }).click();
  await expect(page.locator('#browser-output')).toContainText('1/3');
  await expect(page.locator('#browser-output')).toContainText('FAIL');

  await page.getByRole('button', { name: 'Run Python-equivalent tests' }).click();
  await expect(page.locator('#python-output')).toContainText('2/5');
  await expect(page.locator('#python-output')).toContainText('FAIL');
});
