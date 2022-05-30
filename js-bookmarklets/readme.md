# Bookmarklets

## Quick Start
- Skopiuj kod z pliku `bookmarklet.js`.
- W przeglądarce dodaj nową zakładkę i zamiast URLa wklej kod.
- Wejdź na główną stronę [OKO.press](https://oko.press/) lub jakiś artykuł na niej i kliknij na dodaną zakładkę.

## Info
- Bookmarklet to zakładka w przeglądarce, która nie zawiera URLa jakiejś witryny, ale kod JS, który możemy wykonać na stronie, na której aktualnie się znajdujemy.
- Tworzymy je bardzo prosto (na przykładzie okoPress):
    - piszemy po prostu kod JS - plik `okoPressDarkTheme.js`;
    - minifikujemy go (wystarczy, żeby był w jednej linii) - plik `okoPressDarkTheme.min.js`;
    - dodajemy na początku `javascript:` - plik `okoPressBookmarklet.js`;
    - zapisujemy kod jako jako zakładkę w przeglądarce.
- Napisany kod musi mieć albo zdefiniowaną i wywołaną funkcję albo być funkcją IIFE.
- Kod możemy zminifikować albo jakimś narzędziem online albo korzystając z dodatku [Minify do VS Code](https://marketplace.visualstudio.com/items?itemName=HookyQR.minify). W tym drugim przypadku do pliku `settings.json` w edytorze dodałem dwie opcje, żeby minifikacja nie zmieniała nazw zmiennych oraz template literals na zwykłe stringi:
    ```json
    "minify.js": {
        "mangle": false,
        "compress": {
            "evaluate": false,
        },
    }
    ```
- Bookmarklety mogą przydać się w wielu sytuacjach - od tak prostych jak zmiana motywu na stronie, z której często korzystamy, po wykonywanie bardziej skomplikowanych operacji jak web scraping i zapisywanie pobranych danych do pliku .csv, żeby można było je potem analizować np. w Excelu. 