# Stylowanie scrollbarów

## Quick start
- Pobrać katalog i odpalić `index.html` w folderze `src` przez Live Server.
- Poniżej mój config do obsługi i kompilowania kodu SASS oraz wprowadzania zmian live.
    - Edytor: [Visual Studio Code](https://code.visualstudio.com/)
    - Rozszerzenia:
        - [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
        - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
        - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Jest kilka wersji stylowania, które można odkomentować/zakomentować w `main.scss`, żeby zobaczyć różne efekty.

## Info
- Dokładniejszy opis właściwości CSS jest w [pliku _scrollbars-with-description.scss](src/scss/_scrollbars-with-description.scss).
- W Firefoxie można użyć tylko zmiany koloru rolki, paska i 3 ustawień szerokości.
- Przeglądarki oparte na Chromium oraz Safari mają znacznie większe możliwości stylowania scrollbarów, np.
    - można stylować wielkości scrollbarów, marginy, border-radius;
    - można użyć gradientów jako kolorów rolki i paska;
    - można dodać border, outline, box-shadow;
    - można dodać efekty na hoverze, np. zmianę koloru rolki;
- Opis różnych możliwości stylowania pokazanych w plikach:
    - wersja z selektorem `html` ([plik _scrollbars-html.scss](src/scss/_scrollbars-html.scss)) - w Chrome, Edge, Safari ostyluje tylko główny scrollbar strony, a w Firefoxie ostyluje wszystkie scrollbary na stronie;
    - wersja bez selektora ([plik _scrollbars-empty.scss](src/scss/_scrollbars-empty.scss)) - w Chrome, Edge, Safari ostyluje wszystkie scrollbary na stronie, a Firefox nie obsługuje stylowania bez selektora;
    - wersja horizontal ([plik _scrollbars-horizontal.scss](src/scss/_scrollbars-horizontal.scss)) - we wszystkich przeglądarkach styluje scrollbar we wskazanym elemencie o klasie `horizontal`;
    - wersja vertical ([plik _scrollbars-vertical.scss](src/scss/_scrollbars-vertical.scss)) - we wszystkich przeglądarkach styluje scrollbar we wskazanym elemencie o klasie `vertical`;
- Trochę info w formie video od Kevina Powella: https://www.youtube.com/watch?v=lvKK2fs6h4I