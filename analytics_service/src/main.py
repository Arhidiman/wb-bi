from httpx import AsyncClient, Response
from fastapi import FastAPI

from lib.getWBCookie import getCookie

app = FastAPI()

cookies = {
    '_wbauid': '10126145471761224647',
    'x_wbaas_token': '1.1000.1110d72f34144f4eafb56debe66e48de.MTV8MTg4LjIxNC4zMi41MXxNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTQ2LjAuMC4wIFNhZmFyaS81MzcuMzZ8MTc3NjAxMTgyN3xyZXVzYWJsZXwyfGV5Sm9ZWE5vSWpvaUluMD18MHwzfDE3NzU0MDcwMjd8MQ==.MEQCIEBvSZYxyvwPphTDx6+3qlg2H5BLI8kJY5iPxZicPnd5AiB3ukOkTiGcefl0T0r009m77y7WBTqoR8Wq6JaskqxHFw=='
}

baseSearchApiUrl = 'https://www.wildberries.ru/__internal/u-search/exactmatch/ru/common/v18/search' 
apiUrl = 'https://www.wildberries.ru/__internal/u-search/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786&hide_vflags=4294967296&inheritFilters=false&lang=ru&query=%D0%BD%D0%BE%D1%81%D0%BE%D0%BA&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false'


@app.get('/')
async def getProducts():
    async with AsyncClient() as client:
        cookies = await getCookie()
        res: Response = await client.get(apiUrl, cookies=cookies)
        return res.json()