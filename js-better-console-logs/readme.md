# Lepsze console.logi

## Quick start
- Pierwsza opcja: devTools -> Console -> wklejenie kodu z pliku .js.
- Druga opcja: podpięcie pliku .js do pliku HTML, odpalenie go, potem devTools -> Console.

## Info
- Kilka tricków, dzięki którym możemy lepiej wykorzystać `console.logi`.
- Plik .js zawiera komentarze przy każdej funkcji. 
- Poniżej skrót:
    ```javascript
    console.log();
    console.log({});

    console.table()

    console.info();
    console.warn();
    console.error();

    console.assert(
        something > 5,
        'show this message if the condition is false'
    );

    console.trace();

    console.count();

    console.time('doom-counter');
    console.timeLog('doom-counter');
    console.timeEnd('doom-counter');
    ```
- Skróty, których można użyć bezpośrednio w konsoli (nie zadziałają po użyciu w pliku .js):
    - `$` = `querySelector('some-element')`;
    - `$$` = `querySelectorAll('some-element')`;
    - Przykład do wklejenia w konsoli (na stronie muszą być jakieś `<divy>`):
    ```javascript
    const elements = $$('div');
    console.log(elements);
    ```
- Console Live Expressions (Chromium Browsers)
    - Chrome -> devTools -> Console -> Create live expression (ikona oka)
    - Przykład: elements = $$('.some-class').length
    - Stworzy nam to zmienną, która będzie śledzić, ile mamy elementów o określonej klasie. Jeśli w kodzie strony dodamy/usuniemy te konkretne elementy, to na bieżąco wartość się zaktualizuje. Działa to podobnie do `console.loga`, który by sprawdzał to samo, ale nie zaśmieca nam kodu, bo jest tylko w przeglądarce.