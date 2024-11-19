import { test, expect } from '@playwright/test';

test('Votar por un modelo de auto - Intentar votar dos veces', async ({ page }) => {
    // Iniciar sesión
    await page.goto('https://buggy.justtestit.org/login');
    await page.fill('#login', 'UsuarioTest');
    await page.fill('#password', 'Password1!');
    await page.click('button[type="submit"]');
    
    // Ir a la página de votación y emitir un voto
    await page.goto('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vqg');
    await page.fill('#comment', '¡Este modelo es impresionante!');
    await page.click('button[type="submit"]');
    
    // Intentar votar de nuevo
    await page.fill('#comment', 'Quiero votar otra vez.');
    await page.click('button[type="submit"]');
    
    // Verificar que no se permita un segundo voto
    const errorMessage = await page.textContent('.alert.alert-danger');
    expect(errorMessage).toContain('You can only vote once per session');
});
