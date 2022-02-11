# npm install options

## Options
- Paczki z npm instalujemy za pomocą komendy `npm install package-name` lub krócej `npm i package-name`.
- Za pomocą jednej komendy możemy zainstalować wiele paczek naraz, np. `npm i package-1 package-2 package-3`.
- Możemy także dodać odpowiednie opcje, aby paczka została zainstalowana np. globalnie albo jako dev dependency etc. Przykład:  
 `npm i package-name --save-dev` lub krócej `npm i package-name --D`.
- Poniżej przydatne opcje wraz ze skrótami:
    | shortcut | option |
    | :---: | --- |
    | `-g` | `--global` |
    | `-P` | `--save-prod` |
    | `-D` | `--save-dev` |
    | `-O` | `--save-optional` /| `--save-peer` |
    | `-E` | `--save-exact` |
    | `-B` | `--save-bundle` |
    |  | `--no-save` |
    |  | `--dry-run` |
- Źródła:
    - https://docs.npmjs.com/cli/v8/commands/npm-install