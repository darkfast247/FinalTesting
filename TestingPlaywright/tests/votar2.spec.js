import { test, expect } from '@playwright/test';

test('Votar por un modelo de auto - Redirección al iniciar sesión', async ({ page }) => {
    // Ir directamente a la página de votación sin iniciar sesión
    await page.goto('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vqg');
    
    // Verificar que se redirija a la página de inicio de sesión
    await page.waitForURL('https://buggy.justtestit.org/login');
    expect(page.url()).toBe('https://buggy.justtestit.org/login');
});
