const { test, expect } = require('@playwright/test');

test('Editar nombre de usuario', async ({ page }) => {
  // Navegar a la página de edición de perfil
  await page.goto('https://buggy.justtestit.org/profile');

  await page.fill('#firstName', 'NombreActualizado');
    await page.fill('#lastName', 'ApellidoActualizado');
    await page.fill('#address', 'Calle Falsa 123');
    await page.fill('#phone', '1234567890');
    await page.fill('#hobby', 'Lectura');

    // Validar la contraseña
    await page.fill('#password', 'Pass@123'); // Contraseña válida
    await page.fill('#confirmPassword', 'Pass@123');

    // Enviar el formulario
    await page.click('button[type="submit"]');

    // Validar que el perfil se actualizó correctamente
    await page.waitForSelector('.alert.alert-success');
    const successMessage = await page.textContent('.alert.alert-success');
    expect(successMessage).toContain('Perfil actualizado correctamente');
});