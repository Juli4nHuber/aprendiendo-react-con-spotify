import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  const text = await page.getByRole('paragraph');

  const textContent = await text.textContent();

  await expect(textContent?.length).toBeGreaterThan(0);

});
