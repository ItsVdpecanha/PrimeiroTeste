// tests/cadastro.spec.js
const { test, expect } = require('@playwright/test');

// Um grupo de testes para o nosso 'fluxo de cadastro'
test.describe('Fluxo de Interação com a Documentação do Playwright', () => {

    const PAGE_URL = 'https://playwright.dev/';
    
    // --- Teste 1: Acesso e Verificação da Página Inicial (READ) ---
    test('deve acessar a página inicial e verificar o título', async ({ page }) => {
        // Acessa a URL
        await page.goto(PAGE_URL);
        
        // Espera o título da página ser o esperado
        await expect(page).toHaveTitle(/Playwright/);

        // Verifica se o texto principal 'Fast and reliable' está visível
        const principalText = page.getByRole('heading', { name: 'Fast and reliable' });
        await expect(principalText).toBeVisible();
    });

    // --- Teste 2: Navegar para a Documentação (CREATE/READ) ---
    test('deve navegar para a documentação usando o botão "GET STARTED"', async ({ page }) => {
        await page.goto(PAGE_URL);

        // Clica no link/botão que contém o texto 'GET STARTED'
        await page.getByRole('link', { name: 'GET STARTED' }).click();

        // Verifica se a URL contém 'intro'
        await expect(page).toHaveURL(/.*intro/); 

        // Verifica se o título da seção na página de documentação está visível
        const docTitle = page.getByRole('heading', { name: 'Installation' });
        await expect(docTitle).toBeVisible();
    });

    // --- Teste 3: Interagir com a Busca (UPDATE/SEARCH) ---
    test('deve pesquisar por "javaScript" e verificar resultados', async ({ page }) => {
        await page.goto(PAGE_URL);

        // Localiza e clica no botão de busca (label='Search')
        await page.getByLabel('Search').click(); 
        
        // Preenche o campo de pesquisa (UPDATE)
        await page.getByPlaceholder('Search docs').fill('javaScript');
        
        // Pressiona Enter para realizar a busca
        await page.keyboard.press('Enter');

        // Verifica se o primeiro resultado contém o texto 'JavaScript' (READ)
        const firstResult = page.getByRole('link', { name: 'JavaScript' }).first();
        await expect(firstResult).toBeVisible();

        // Volta para a página anterior 
        await page.goBack();
        await expect(page).toHaveURL(PAGE_URL);
    });
});
