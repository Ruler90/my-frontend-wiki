# npm

## Inicjalizacja projektu

-   Do projektu dodajemy plik `package.json` za pomocą komendy `npm init`. Musimy wtedy dodatkowo zatwierdzić lub edytować różne opcje.
-   Jeśli chcemy automatycznie zatwierdzić wszystkie domyślne wybory, używamy komendy `npm init -y`.

## Options

-   Paczki z npm instalujemy za pomocą komendy `npm install package-name` lub krócej `npm i package-name`.
-   Za pomocą jednej komendy możemy zainstalować wiele paczek naraz, np. `npm i package-1 package-2 package-3`.
-   Możemy także dodać odpowiednie opcje, aby paczka została zainstalowana np. globalnie albo jako dev dependency etc. Przykład:  
    `npm i package-name --save-dev` lub krócej `npm i package-name --D`.
-   Poniżej przydatne opcje wraz ze skrótami:
    | shortcut | option |
    | :---: | --- |
    | `-g` | `--global` |
    | `-P` | `--save-prod` |
    | `-D` | `--save-dev` |
    | `-O` | `--save-optional` / `--save-peer` |
    | `-E` | `--save-exact` |
    | `-B` | `--save-bundle` |
    | | `--no-save` |
    | | `--dry-run` |
-   Paczki instalowane globalnie trafiają na Windowsie domyślnie do:  
    `C:\Users\nazwaUsera\AppData\Roaming\npm\node_modules`
-   Jeśli chcemy zainstalować najnowszą wersję wybranej paczki, to zazwyczaj wystarczy:  
    `npm i package-name`  
    np. `npm i -g typescript`
-   Jeśli chcemy zainstalować konkretną wersję wybranej paczki, to robimy to za pomocą:  
    `npm i package-name@version`  
    np. `npm i -g typescript@4.5.5`  
    Dostępne wersje konkretnej paczki możemy sprawdzić wyszukując na stronie npma wybraną paczkę i przechodząc do zakładki versions.
-   Źródła:
    -   https://docs.npmjs.com/cli/v8/commands/npm-install

## npx

-   Komenda `npx` służy to uruchomienia jakieś paczki bez instalowania jej.
-   W ten sposób używa się często w tutorialach `npx create-react-app app-name` - nie samej instalujemy paczki `create-react-app` tylko używamy jej, żeby stworzyć nowy projekt Reactowy i zainstalować wszystkie potrzebne mu dependencje.
-   Inny przykład to użycie paczki `json-server`, żeby zmockować endpoint na bazie lokalnego pliku json:  
    `npx json-server --watch sciezka-do-pliku/nazwa-pliku.json --port 8000`
-   Źródła:
    -   https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/
