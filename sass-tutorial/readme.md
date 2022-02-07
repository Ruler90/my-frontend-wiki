# SASS Tutorial

## Info
- Edytor: [Visual Studio Code](https://code.visualstudio.com/)
- Rozszerzenia:
    - [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
    - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
    - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## _partials
- Są to pliki .sass lub .scss, kórych nazwy zaczynają się od podkreślnika. Nie są one kompilowane do CSSa dopóki nie zostaną importowane/użyte w zwykłym pliku .scss.
- Na przykładzie tego repozytorium - mamy partiale `_variables.scss`, `_mixins.scss`, `_placeholder-classes.scss`, które są importowane do partiala `_sass-helpers.scss`. Ten partial jest z kolei importowany w kolejnym: `_general.scss`. Dopiero w nim używamy części lub wszystkich rzeczy z zaimportowanych wcześniej plików, a sam partial `_general.scss` importujemy w "zwykłym" pliku `main.scss`, który jest kompilowany do CSSa.
- Partiale pomagają podzielić kod na mniejsze części i jednocześnie dać ostatecznie jeden wynikowy plik CSS zamiast wielu pojedynczych, które musielibyśmy podłączać do naszej strony.

## @use
- Obecnie `@use` powininen być głównym sposobem na import modułów między sobą (wg dokumentacji modułami nazywamy pliki importowane właśnie za pomocą `@use`). Wcześniej używane `@import` [nie jest już zalecane](https://stefaniefluin.medium.com/the-new-sass-module-system-out-with-import-in-with-use-e1bd8ba032d0).
- Główna różnica jest taka, że `@use` tworzy tzw. namespace'y, co oznacza, że poszczególne importy nie są już wykorzystywane globalnie - jeśli chcemy użyć np. zmiennych trzymanych w jednym pliku, to musimy je importować w KAŻDYM pliku, który ma z nich korzystać. Takie rozwiązanie wg twórców ma zapobiegać kolizji nazw.
- Import za pomocą `@use` jest możliwy na 3 główne sposoby:
    - `@use './sass-helpers' as *` -> wtedy używamy samych nazw np. zmiennych: `$color-primary` etc.
    - `@use './sass-helpers' as something;` -> wtedy używamy nazwy podanego namespace'a wraz z nazwami np. zmiennych: `something.$color-primary` etc.
    - `@use './sass-helpers'` -> wtedy używamy nazwy importowanego pliku wraz z nazwami np. zmiennych: `sass-helpers.$color-primary` etc.

## @forward
- `@forward` rule działa podobnie jak `@use`, ale sprawia, że jeśli gdzieś importujemy plik/partial, w którym importowano jakiś plik za pomocą `@forward`, to będziemy mogli korzystać ze wszystkich właściwości tego "forwardowanego" pliku bez konieczności jego osobnego importu za pomocą kolejnego `@use`.
- Warto pamiętać, że importowanie plików za pomocą `forward` nie umożliwia użycia ich bezpośrednio w tym pliku, który używa tego zapisu - umożliwia on tylko "przekazanie ich dalej" (zgodnie z nazwą: "forward"). Jeśli chcemy ich tam użyć, to musimy je dodatkowo zaimportować za pomocą `@use`, przy czym dobrze, żeby forwardowanie było pierwsze, a dopiero po nim `@use`.
- Na przykładzie tego repozytorium:
    - mamy `_sass-helpers.scss`;
    - używamy w nim `@forward './variables'`, `@forward './mixins'` oraz `@forward './placeholder-classes'` (importujemy do niego te 3 pliki);
    - następnie w `_general.scss` używamy `@use './sass-helpers' as *`;
    - w ten sposób w pliku `_general.scss` możemy korzystać ze zmiennych, mixinów i placeholder classes bez konieczności importowania ich wszystkich osobno.

## %placeholder-classes
- Placeholder classes mogą zawierać zbiór właściwości CSS, których możemy użyć w dowolnym elemencie bez konieczności ręcznego wypisywania ich za każdym razem lub szukania w kodzie elementu z tymi właściwościami, kopiowania ich i wklejania do kolejnego elementu. Od zwykłej klasy różni się tym, że na początku nie ma kropki tylko posiada symbol procenta oraz nie jest kompilowana do zwykłego CSSa dopóki nie zostanie gdzieś użyta (wtedy właściwości z niej są przypisywane bezpośrednio do klasy/elementu, w którym jej użyliśmy).
- Budowa placeholder class:
    ```scss
    %flex-container {
        // some properties
    }
    ```
- Użycie placeholder class:
    ```scss
    .container {
        @extend %flex-container;
        // other properties
    }
    ```
- Dodatkową zaletą jest to, że nie duplikujemy kodu w wyjściowym CSSie. Jeśli użyjemy `@extend` w kilku elementach, to nie dostaniemy w CSSie kilku różnych klas z tymi samymi właściwościami, tylko listę elementów po przecinku i jeden zestaw styli. Wszystkie dodatkowe style będą oddzielnie w kodzie.
    ```css
    .container, .sass-box {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
    }

    .container {
        /* other properties */
    }

    .sass-box {
        /* other properties */
    }
    ```
- Istnieje jednocześnie ryzyko, że rozszerzając w ten sposób klasy trafimy na moment, że zmienimy coś w naszej placeholder class na tyle, że rozwalimy sobie różne elementy.

## @extend
- `@extend` poza użyciem placeholder class może służyć także do dołączenia stylów dowolnego innego elementu do tego, gdzie użyliśmy `@extend`. Przykładowo poniższy zapis sprawi, że jeśli użyjemy gdzieś klasy `.color-box`, to będzie ona miała także `width`, `height` i `border`, które zadeklarowaliśmy w klasie `.box`:
    ```scss
    .box {
        width: 200px;
        height: 200px;
        border: 1px solid #000;
    }

    .color-box {
        @extend .some-class;
        background-color: blue;
    }
    ```
- Zaletą użycia `@extend` jest to, że po kompilacji nie mamy zduplikowanego kodu, bo (idąc dalej powyższym przykładem) nie dostaniemy czegoś takiego:
    ```css
    .box {
        width: 200px;
        height: 200px;
        border: 1px solid #000;
    }

    .color-box {
        width: 200px;
        height: 200px;
        border: 1px solid #000;
        background-color: blue;
    }
    ```
    tylko:
    ```css
    .box, .color-box {
        width: 200px;
        height: 200px;
        border: 1px solid #000;
    }

    .color-box {
        background-color: blue;
    }
    ```
- `@extend` mogłoby być pomocne w modyfikacji założeń BEMa - [link](https://sass-lang.com/documentation/at-rules/extend). Przy tworzeniu klas-modyfikatorów można dodać `@extend .nadrzedna-klasa` - wtedy w CSSie powinniśmy otrzymać po przecinku dwie klasy - podstawową i modyfikator z tymi samymi stylami oraz oddzielnie modyfikator ze stylami, które są inne niż w klasie podstawowej (jak w wyjściowym CSSie pokazanym wyżej). Teoretycznie mogłoby to poprawić czytelność HTMLa, gdzie zamiast np. `class="other-box other-box--red"` moglibyśmy dać `class="other-box--red` i w tym mielibyśmy wszystkie potrzebne style. Jeśli chcielibyśmy przywrócić zwykłą wersję, to wystarczyłoby usunąć fragment klasy służący za modyfikator: `--red`.
    ```scss
    .other-box {
        width: 200px;
        height: 200px;
        border: 1px solid #000;

        &--red {
            @extend .other-box;
            background-color: red;
        }
    }
    ```
- Istnieje jednocześnie ryzyko, że rozszerzając w ten sposób klasy trafimy na moment, że zmienimy coś w głównej klasie na tyle, że rozwalimy sobie różne elementy.

## @mixin
- Mixiny, podobnie jak placeholder classes, mogą zawierać zbiór właściwości CSS, których możemy użyć w dowolnym elemencie bez konieczności ręcznego wypisywania ich za każdym razem lub szukania w kodzie elementu z tymi właściwościami, kopiowania ich i wklejania do kolejnego elementu.
- Różnica (poza zapisem) w użyciu jest taka, że mixiny mogą mieć dodatkowe parametry, które znacznie rozszerzają ich funkcjonalność.
- **Mixin bez dodatkowych parametrów:**
    ```scss
    @mixin header-1 {
        // some properties
    }
    ```
    Użycie w jakimś elemencie: `@include header-1`.
- **Mixin z dodatkowym parametrem:**
    ```scss
    @mixin header-2($color) {
        // some properties
        color: $color;
    }
    ```
    Użycie w jakimś elemencie: `@include header-2(rgb(158, 92, 212))` - jeśli nie podamy żadnego koloru jako argumentu, to kompilator zwróci błąd.
- **Mixin z dodatkowym parametrem i wartością domyślną:**
    ```scss
    @mixin header-3($color: rgb(224, 52, 52)) {
        // some properties
        color: $color;
    }
    ```
    Użycie w jakimś elemencie: `@include header-3` lub `@include header-3(rgb(158, 92, 212))` - jeśli nie podamy żadnego koloru jako argumentu, zostanie użyta domyślna wartość, a jeśli podamy argument, to zostanie użyty kolor z argumentu.

## @if @else
- Podobnie jak w JSie - możemy podać jakiś warunek i w zależności od niego będzie generowany określony kod.
- Przykład:
    ```scss
    $minimum-padding: 16px;
    @mixin rounded-box($padding: $minimum-padding, $radius: 0) {
        // if padding would be lesser than minimum-padding, use minimum-padding
        @if $padding < $minimum-padding {
            padding: $minimum-padding;
        } @else {
            // else if padding would be greater than minimum-padding, use the user-specified padding
            padding: $padding;
        }

        @if $radius !=0 {
            // if radius = 0, don't use border-radius
            border-radius: $radius;
        }
    }

    .sass-box {
        // padding: 25px, border-radius: 10%
        @include rounded-box(25px, 10%);
        // padding: 16px (minimum-padding), no border-radius property in the output CSS
        @include rounded-box(10px, 0);
    }
    ```
- Można też użyć w środku wielu `@else if` statements w razie potrzeby. Składnia:
    ```scss
    @if $sth > $sth-else {
        // do something
    } @else if $sth < $sth-else {
        // do something else
    } @else if $sth != 0 {
        // do the other thing
    } @else {
        // do something different than other things
    }
    ```
- W realnych projektach nie spotkałem się jeszcze z użyciem tego w praktyce, więc ciężko mi określić, gdzie to może się jeszcze przydać poza np. tworzeniem swojego design systemu czy użyciem tego w funkcjach generujących ogromne ilości utility classes.
- Dodatkowe info o operatorach, których można użyć w porównaniach - [tutaj](https://sass-lang.com/documentation/operators).
- Dokładniejszy opis ifów oraz dodatkowych at-rules służących za pętle - [tutaj](https://sass-lang.com/documentation/at-rules/control). 

## @debug
- `@debug` działa podobnie jak console.log w JSie, przy czym jest pokazywany w konsoli kompilatora SASS, a nie w konsoli przeglądarki.
- Niestety wydaje się nie działać z dodatkiem do VS Code - Live SASS Compiler v5.1.1, który tylko zwraca info o przekompilowaniu kodu lub errorach. Działało na pewno przy kompilowaniu SASSa za pomocą Gulpa.
- Może się przydać np. wtedy, gdy używamy jakichś zmiennych i chcemy szybko zobaczyć, co one zwrócą lub przeprowadzamy jakieś obliczenia, które mają dać określoną wartość konkretnej właściwości CSS i chcemy sprawdzić jej wynik:
    ```scss
    $base-padding: 16px;
    .some-class {
        padding: calc($base-padding * 10 - 50px);
    }
    @debug calc($base-padding * 10 - 50px);
    @debug 'hello world';
    ```
