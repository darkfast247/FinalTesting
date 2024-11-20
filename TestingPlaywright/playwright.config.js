// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Configuración para las pruebas automatizadas.
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests', // Ruta donde se encuentran las pruebas
  fullyParallel: true, // Ejecuta los tests en paralelo para mayor velocidad
  forbidOnly: !!process.env.CI, // Evita dejar `test.only` en el código en entornos CI
  retries: process.env.CI ? 2 : 0, // Retries automáticos en CI
  workers: process.env.CI ? 1 : undefined, // Limita workers en CI
  reporter: 'html', // Genera un reporte HTML de las pruebas
  use: {
    /* Configuración global para las pruebas */
    baseURL: 'https://buggy-cars.com', // Cambia esto si tu base URL es diferente
    headless: true, // Ejecuta los navegadores en modo headless
    trace: 'on-first-retry', // Activa trazas al fallar pruebas
    screenshot: 'only-on-failure', // Captura screenshots en fallos
    video: 'retain-on-failure', // Guarda videos solo cuando hay fallos
    viewport: { width: 1280, height: 720 }, // Tamaño estándar para viewport
    ignoreHTTPSErrors: true, // Ignora errores de HTTPS en desarrollo
  },

  /* Configura los navegadores en los que deseas ejecutar las pruebas */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Configuración opcional para servidores locales */
  // webServer: {
  //   command: 'npm run start', // Comando para iniciar tu servidor local
  //   url: 'http://127.0.0.1:3000', // URL donde corre tu app
  //   reuseExistingServer: !process.env.CI, // Reutiliza el servidor en local
  // },
});
