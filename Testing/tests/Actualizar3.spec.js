const { test, expect } = require('@playwright/test');

test('Actualizar Perfil de Usuario - Validación de campos obligatorios', async ({ page }) => {
    // Navegar a la página de perfil de usuario
    await page.goto('https://buggy.justtestit.org/profile');

    // Dejar los campos obligatorios vacíos
    await page.fill('#firstName', '');
    await page.fill('#lastName', '');

    // Enviar el formulario
    await page.click('button[type="submit"]');

    // Validar el mensaje de error para campos vacíos
    await page.waitForSelector('.alert.alert-danger');
    const errorMessage = await page.textContent('.alert.alert-danger');
    expect(errorMessage).toContain('Primer nombre y apellido son requeridos');
});