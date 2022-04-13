# Ograniczanie eventów w JSie za pomocą throttle lub debounce

## Info
- Jednym z bardziej obciążających eventów jest "resize" oraz "scroll", który odpala się w tak dużych ilościach, że lekkie przescrollowanie strony daje np. 100-200 wywołań fn przypisanej do eventListenera.
- Możemy to trochę ograniczyć używając fn throttle lub debounce z biblioteki Lodash.
- Szczegółowe porównanie wraz z przykładami i Codepenami można znaleźć [tutaj](https://css-tricks.com/the-difference-between-throttling-and-debouncing/).
- Kod z odpowiedniego załącznika (lub [wygenerowane przez siebie pliki](#lodash)) dorzucamy do projektu i linkujemy do niego w tagu `<script>`, który będzie umieszczony nad `<scriptem>`, w którym będziemy używać jednej z opisanych funkcji.
- W `addEventListener` po wskazaniu eventu używamy fn `_.throttle()` lub `_.debounce()`, które budową przypominają `setTimeout`, czyli wrzucamy do środka nasze funkcje, a na końcu podajemy czas, co ile ma być odpalany event.

## Throttle
- Debounce działa w taki sposób, że event jest odpalany tylko co jakiś czas, np. co 300ms jak w poniższym przykładzie. Da nam to wtedy np. kilkanaście wywołań vs 100-200, które byłyby bez throttlingu.
    ```javascript
    window.addEventListener('scroll', _.throttle(() => {
        // tutaj nasza funkcja, którą przypisujemy do eventu
        console.log('scrolling');
    }, 300));
    ```

## Debounce
- Debounce działa w taki sposób, że event jest odpalany tylko raz po określonym czasie od ostatniego użycia tego eventu. Czyli np. scrollujemy i dopiero gdy przestaniemy scrollować, to po 300ms odpalą się fn przypisane do eventu.
    ```javascript
    window.addEventListener('scroll', _.debounce(() => {
        // tutaj nasza funkcja, którą przypisujemy do eventu
        console.log('scrolling');
    }, 300));
    ```

## Usuwanie eventListenera
- Jeśli chcemy usunąć evenListener, przy którym dodaliśmy funkcję z throttle lub debounce, to całość wystarczy przypisać do zmiennej.
    ```javascript
    const throttledFn = _.throttle(() => {
        // tutaj nasza funkcja, którą przypisujemy do eventu
        console.log('scrolling');
    }, 300);
    window.removeEventListener('scroll', throttledFn)
    ```

## Lodash
Jeśli chcemy sami wygenerować plik z odpowiednią funkcją ([Lodash Custom Builds](https://lodash.com/custom-builds)), to możemy wykonać poniższe kroki:
1. Instalujemy globalnie `lodash-cli` za pomocą `npm i -g lodash-cli`.
1. Instalowane w ten sposób paczki trafiają do `C:\Users\nasza-nazwa-usera\AppData\Roaming\npm`.
1. Generowanie zminifikowanego kodu dla throttle: `lodash include="throttle" -p`
1. Generowanie zminifikowanego kodu dla debounce: `lodash include="debounce" -p`
1. Jeśli pominiemy opcję `-p`, to otrzymamy kod bez minifikacji.