# Safari bugs

## Brak flexbox gap w Safari < 14.1
- Stan na 08.02.2022.
- Wg [CanIUse](https://caniuse.com/flexbox-gap) Safari w wersji poniżej 14.1 oraz Safari na iOS w wersji poniżej 14.5 nie obsługuje właściwości `gap` w połączeniu z flexboxem.
- Jeśli gdzieś użyjemy gdzieś `gap`, aby oddzielić od siebie elementy i nie damy przy tym marginów, to część userów korzystających z Safari zobaczy elementy bez żadnych odstępów.
- Rozwiązaniem jest skorzystanie z grida.
    ```scss
    // oryginalny kod z flexem:
    .some-item {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    // wersja działająca wszędzie (łącznie z Safari):
    .some-item {
        // domyślnie elementy będą się układać jeden pod drugim (jak przy flex-direction: column)
        display: grid;
        // grid-auto-flow: column sprawia, że elementy układają się obok siebie - podobnie jak we flexie. Jest to przydatne, jeśli nie chcemy ręcznie ustawiać ilości kolumn 
        grid-auto-flow: column;
        align-items: center;
        gap: 16px;
    }
- Bonus info:
    - Żeby w gridzie odwzorować flex-wrap, trzeba ustawić określoną liczbę i wielkość kolumn, np. `grid-template-columns: repeat(6, 1fr)` - 6 elementów zajmujących równą ilość miejsca. Przy mniejszych ekranach trzeba w Media Queries ustawiać mniejsze ilości kolumn, jeśli nie chcemy za bardzo spłaszczać elementów.
    - Można też użyć czegoś takiego: `grid-template-columns: repeat(auto-fit, minmax(212px, 1fr))` - podajemy tu minimalną wielkość kolumny (w tym przypadku 212px) oraz maksymalną. Przykładowo jeśli mamy container 1400px, to grid próbuje zmieścić w nim tyle kolumn 212px, ile da radę. Jeśli mamy już ileś kolumn i zostało tyle miejsca, że nie zmieści się kolejna, to istniejące mogą się trochę rozszerzyć (do 1fr). Potem w miarę zmniejszania ekranu mieści się coraz mniej kolumn, więc kolejne elementy przenoszą się pod spód i tak stopniowo grid sam zmienia ilość elementów w rzędzie z 6 na 5, potem 4, 3, 2 (tutaj można przy małej MQ ustawić już na stałe, że mają być dwie kolumny, jeśli nie chcemy ostatecznie mieć wszystkich elementów jeden pod drugim). 

## Nie-focusowalne linki na iOS - problem z używaniem pseudo-klasy focus-within
- Stan na 14.03.2022.
- Jeśli użyjemy klasy `focus-within` na jakimś wrapperze, to celujemy wtedy w focusowalny element, który znajduje się w środku tego wrappera. Gdy przeglądarka wykryje, że sfocusowaliśmy się na tym wewnętrznym elemencie, to włącza style, które napisaliśmy w połączeniu z tą pseudo-klasą. Jeśli mamy wrapper, który w środku zawiera tagi `<a></a>`, to iOS nie wykrywa ich jako focusowalnych elementów i nie będzie to działać. Na telefonach z Androidem nie ma z tym żadnego problemu. Żeby działało też na iOS, to albo wrapper albo wszystkie linki muszą dostać dodatkowo `tabindex="0"`.
- Rozwiązanie ze [StackOverflow](https://stackoverflow.com/questions/66477748/focus-within-works-on-android-browser-but-not-ios).
- Przykład:
    - Kodujemy element, który na urządzeniach z hoverem pokaże przy hoverze jakiś overlay z linkami, a na urządzeniach bez hovera pokaże ten overlay po tapnięciu (dla takich urządzeń użyjemy pseudo-klasy `focus-within`, która jest [wspierana wszędzie poza IE](https://caniuse.com/?search=focus-within)).
    - Sam główny element jest divem, ale w środku ma umieszczony link, do którego wielkości się dopasuje.
    - To nie jest ważne dla naszego przykładu, ale dla ścisłości: overlay będziemy w powyższy sposób pokazywać tylko wybranym userom, a część zobaczy sam element bez overlaya. Dlatego umieściliśmy główny link od razu w naszym elemencie (poza overlayem), żeby część userów mogła go użyć, jeśli overlay ma im się nie pokazać.
    - `focus-within` dodajemy do głównego elementu i kodujemy wszystko tak, że gdy zadziała ta pseudo-klasa, to właśnie w overlayu będącym child-elementem głównego linka zmieni się `display: none` np. na `display: grid` i overlay zostanie wyświetlony pokazując linki, które zawiera.
    - Jeśli w powyższej konfiguracji nie mamy nigdzie dodanego `tabindex="0"`, to na iOS wszyscy userzy nie będą mieli dostępnego overlaya, tylko element będzie od razu ich gdzieś kierował po tapnięciu.
- [Kawałek kodu](https://codepen.io/mw_codes/pen/QWabgQO) z `tabindex="0"` umieszczonym w różnych miejscach kodu. Warto sprawdzić na Androidzie, gdzie wszystkie wersje działają oraz na iOS, gdzie brak lub dodanie `tabindex="0"` w różnej konfiguracji wywołuje różne efekty.
- Ten sam kod jest umieszczony też w oddzielnym folderze.

## Brak scroll-behavior: smooth w Safari < 15.4
- Stan na 25.08.2022.