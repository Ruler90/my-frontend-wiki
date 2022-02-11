# Kolorowanie ikon za pomocą CSS filter

## Quick start
- Pobrać katalog i odpalić `index.html` w folderze `src`.

## Info
- Gdy używamy ikon .svg i nie chcemy robić sobie bałaganu w kodzie wrzucając pełny kod każdej ikony, to wrzucamy je najczęściej jako `<img src="nasza-ikona.svg" alt="">`.
- W przypadku małych projektów, gdzie nic się specjalnie nie zmienia, nie jest to problem. Gdy jednak jest to większy projekt czy dodajemy różne motywy, to może być konieczna zmiana koloru ikon.
- Aby nie było konieczności dodawania kolejnych ikon w innych kolorach i potem ich podmiany za pomocą np. JSa, możemy **wykorzystać czarne ikony, którym nadamy kolor za pomocą CSSowego `filter`**.
- Na Codepenie jest [ciekawe narzędzie](https://codepen.io/sosuke/pen/Pjoqqp), w którym podajemy kolor, który nas interesuje i są generowane odpowiednie wartości filtra, aby kolor czarny zmienić dokładnie w ten, który chcemy. Czasem może być konieczne użycie narzędzia kilka razy aż otrzymamy informację, że kolor jest albo bliski albo bezstratny.
- Tym sposobem możemy mieć czarne ikony w postaci plików i dowolnie zmieniać im kolor samym CSSem.

