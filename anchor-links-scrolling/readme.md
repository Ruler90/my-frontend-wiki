# Scrollowanie do anchor linków (kotwic) na stronie

## Info
- Jeśli mamy stronę, na której jest sticky navigation oraz elementy, do których scrollujemy za pomocą anchorów, to może się zdarzyć, że po przescrollowaniu fragment naszego elementu będzie ucięty/zasłonięty przez nawigację.
- Aby temu zapobiec, możemy dodać kawałek CSSa, który sprawi, że element, do którego scrollujemy zostanie nieco odsunięty od górnej cześci strony/boxa etc.
- Jednocześnie tego stylowania nie trzeba dodawać do konkretnego elementu, tylko można użyć pseudo-klasy `:target`, która łapie elementy, które są "celem" czegoś - w tym przypadku jeśli użyjemy anchor linka, to element do którego scrollujemy jest celem tego linka i tylko dla niego zostaną zastosowane jakieś style.
- Jeśli w wersji mobilnej mamy menu o innej wysokości czy w ogóle tam nie jest ono sticky, to dodajemy tylko Media Query i zmieniamy określone wartości.