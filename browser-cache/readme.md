# Cache w przeglądarce, Hard refresh i Cloudflare

## Info
- Jeśli mamy swoją stronę, to przeglądarki mogą cache'ować nie tylko obrazki, ale też pliki .js czy pliki ze stylami strony. Dlatego mogą zdarzać się sytuacje, że zmieniamy obrazki, poprawiamy jakieś style czy update'ujemy kod JS, a nasza strona dalej pokazuje (przynajmniej przez jakiś czas) starą wersję.
- Cache'owanie opiera się m.in. na nazwie pliku, więc dla upewnienia się, że nasze zmiany będą dla każdego szybko widoczne, możemy stosować albo **versioning** (np. `assets/js/app-v2.min.js`) albo **fingerprinting** (`assets/js/app-d41d8cd98f00b204e9800998ecf8427e.min.js`). Jeśli zmienia się nazwa pliku, to wymusza to na przeglądarce pobranie go od nowa, nawet jeśli w pamięci podręcznej mamy poprzedni plik.

## Rodzaje cache w przeglądarce
- `Memory Cache` - to dane w pamięci RAM - szybszy dostęp, ale dane dostępne tylko do zamknięcia przeglądarki.
- `Disk Cache` - dane zapisywane na dysku.

## Sprawdzenie, czy otrzymujemy aktualne pliki czy z cache 
- Otwieramy devToolsy i przechodzimy do zakładki Network.
- Wybieramy typ pliku, np. img i odświeżamy stronę.
- W kolumnie Size (Chrome) lub Transferred (Firefox) pojawi się albo rozmiar danego pliku albo informacja "memory cache" (Chrome) albo "cached" (Firefox).
- Jeśli przeglądarka cały czas pobiera dane i nie zapisuje nic w cache, to sprawdzić (też w zakładce Network), czy nie mamy zaznaczonej opcji "Disable cache".
- Cache możemy usunąć wybierając czyszczenie historii przeglądarki i zaznaczając, żeby usunęło pamięć podręczną i obrazki lub możemy na danej stronie wykonać tzw. hard refresh.

## Hard refresh
- **Chrome** (4 możliwości):
    - CTRL + SHIFT + R
	- CTRL + kliknięcie buttona Odśwież
	- CTRL + F5
	- otworzenie devToolsów, kliknięcie PPM na button Odśwież i wybranie odpowiedniej opcji
- **Firefox** (2 opcje):
    - CTRL + SHIFT + R
    - CTRL + F5

## Cloudflare Caching
- Jeśli korzystamy z Cloudflare, to możemy mieć jeszcze dodatkowo cache'owanie Cloudflare.
- Cache'owane może być wszystko - obrazki, inne assety, cała strona. Ma to przyspieszyć ładowanie strony, bo serwery, z których będzie dostarczany content mogą być bliżej usera niż serwery, na których rzeczywiście jest strona.
- Cache po stronie Cloudflare może być trzymany przez określony czas i/lub do momentu, aż przestaną pojawiać się requesty od userów o dany content.
- Gdy user wysyła request, to może otrzymać albo HIT albo MISS. HIT jest wtedy, gdy Cloudflare posiada już dany content i może go przesłać, a MISS, gdy go jeszcze nie ma. Przy MISS user otrrzymuje content z oryginalnego serwera, ale jednocześnie Cloudflare pobiera sobie kopię danych i trzyma ją, żeby kolejny request mógł zakończyć się HITem.
 
## Źródła
- https://bedekodzic.pl/cache/
- https://medium.com/@codebyamir/a-web-developers-guide-to-browser-caching-cc41f3b73e7c
- https://bacreative.com.au/how-to-hard-refresh-browser-and-clear-cache-using-windows-or-linux/
- https://www.cloudflare.com/learning/cdn/what-is-caching/