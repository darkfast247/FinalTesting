import { test, expect } from '@playwright/test';

test('Votar por un modelo de auto - Voto exitoso', async ({ page }) => {
    // Ir a la página de inicio de sesión
    await page.goto('https://buggy.justtestit.org/login');
    
    // Iniciar sesión con credenciales válidas
    await page.fill('#login', 'UsuarioTest');
    await page.fill('#password', 'Password1!');
    await page.click('button[type="submit"]');
    
    // Ir a la página de votación para el modelo de auto
    await page.goto('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vqg');
    
    // Rellenar el campo de comentario
    await page.fill('#comment', '¡Este modelo es impresionante!');
    
    // Hacer clic en el botón "Vote"
    await page.click('button[type="submit"]');
    
    // Verificar que el mensaje de éxito aparezca
    await page.waitForSelector('.alert.alert-success');
    const successMessage = await page.textContent('.alert.alert-success');
    expect(successMessage).toContain('Thank you for your vote!');
});
