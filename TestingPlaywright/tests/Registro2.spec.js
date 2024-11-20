const { test, expect } = require('@playwright/test');

test.describe('Registro de Usuario - Criterio 2', () => {
  test('Debe validar los requisitos de la contraseña', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register'); // Cambia la URL si es necesario
    
    await page.fill('#username', 'usuario123');
    await page.fill('#firstName', 'Nombre');
    await page.fill('#lastName', 'Apellido');
    
    // Contraseña inválida (menos de 6 caracteres)
    await page.fill('#password', 'abc');
    await page.click('button[type="submit"]');
    

    
    // Contraseña sin mayúscula ni carácter especial
    await page.fill('#password', 'abcdef');
    await page.click('button[type="submit"]');
    
  });
});
