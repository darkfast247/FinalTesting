const { test, expect } = require('@playwright/test');

test.describe('Registro de Usuario - Criterio 1', () => {
  test('Debe mostrar error si los campos obligatorios están vacíos', async ({ page }) => {
    // Navegar a la URL del formulario
    await page.goto('https://buggy.justtestit.org/register');

    // Verificar que los campos están visibles
    await page.fill('#username', '');
    await page.fill('#firstName', 'NombreTest');
    await page.fill('#lastName', 'ApellidoTest');
    await page.fill('#password', 'Password1!');
    await page.fill('#confirmPassword', 'Contraseña!1');
    
   
    await page.click('button[type="submit"]'); // Botón "Register"
  
  });
});
