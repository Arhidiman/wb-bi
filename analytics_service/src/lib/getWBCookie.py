from playwright.sync_api import sync_playwright
from playwright.async_api import async_playwright

async def getCookie():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,  # можно False для дебага
            args=[
                "--disable-blink-features=AutomationControlled"
            ]
        )

        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
        )

        print('@context')
        print(context)

        page = await context.new_page()



        # важно: идём на главную
        await page.goto("https://www.wildberries.ru", timeout=60000)

        # даём времени антиботу
        await page.wait_for_timeout(5000)

        cookies = await context.cookies()

        print(cookies)
        print('@cookies')

        await browser.close()

        # превращаем в dict
        return {c['name']: c['value'] for c in cookies}

cookies = getCookie()
print(cookies)
