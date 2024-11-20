const { test, expect } = require('@playwright/test');

test.describe('Registro de Usuario - Criterio 3', () => {
  test('Debe evitar registros duplicados', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register'); // Cambia la URL si es necesario
    
    await page.fill('#username', 'usuarioExistente'); // Cambia por un usuario único para evitar errores
    await page.fill('#firstName', 'Nombre');
    await page.fill('#lastName', 'Apellido');
    await page.fill('#password', 'Contraseña!1'); // Usa una contraseña válida según los requisitos
    await page.fill('#confirmPassword', 'Contraseña!1');


    await page.click('button[type="submit"]');
    
  });
});
