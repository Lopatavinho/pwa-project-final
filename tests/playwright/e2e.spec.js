import { test, expect } from '@playwright/test';

test('Página carrega com botão', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const button = await page.locator('text=Buscar imagem');
  await expect(button).toBeVisible();
});
