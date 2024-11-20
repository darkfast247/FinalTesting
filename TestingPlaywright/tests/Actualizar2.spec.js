const { test, expect } = require('@playwright/test');

test('Clave con requisitos mínimos', async ({ page }) => {

    await page.goto('https://buggy.justtestit.org/profile');


    await page.fill('#password', 'Pass123');

    await page.click('button[type="submit"]');


    const errorMessage = await page.textContent('.error');
    expect(errorMessage).toContain('La contraseña debe contener al menos 8 caracteres y algun caracter especial');
});