# Monopoly-Assistant
"Monopoly Assistant" jest wsparciem dla gry strategicznej Monopoly.

## Technologie wykorzystane w projekcie:
- Angular 2
- Typescript
- SCSS
- Bootstrap 4

## Przebieg rozgrywki:
* gra daje możliwość wyboru ilości graczy od 2 do 6
* gracze rozpoczynają rozgrywkę z zasobami w postaci pieniędzy (500$)
* ruch gracza po planszy definiowany jest poprzez sumę oczek wyrzuconych dwiema kośćmi
* gracz stając na danym polu staje przed wyborem zakupu go, jeżeli pole należy do innego gracza, płaci mu podatek o określonej wielkości
* plansza posiada tzw. pola specjalne, które cechują się różnymi funkcjonalnościami:
    - więzienie - gracz udający się do więzienia nie może wykonać ruchu przez dwie rundy rozgrywki
    - elektrownia/wodociągi - gracz wchodząc na to pole, płaci jego właścicielowi dziesięciokrotność sumy wyrzuconych oczek, jeżeli właściciel posiada oba wymienione pola opłata zwiększa się dwukrotnie
    - szansa - gracz stając na tym polu dobiera kartę szansy, które kryją w sobie ciekawe wydarzenia
    - podatek - gracz stając na tym polu oddaje określoną kwotę do urzędu skarbowego (tzn. traci pieniądze)
    - budynek specjalny - plansza zawiera cztery pola tego rodzaju, im więcej takich pól dany gracz posiada, tym więcej podatku oponenci płacą posiadaczowi stając na nim.
    - parking - pole, które nie zawiera żadnych interakcji.
- gra kończy się wraz z upływem określonej ilości rund (im więcej graczy tym dłuższa rozgrywka), po zakończeniu rozgrywki zostaje wyświetlony tzw. leaderboard czyli tabela wyników.
## Funkcjonalności w grze:
* możliwość obrotu planszy o 90° dedykowanym przyciskiem
* implementacja planszy
* rozgrywka prowadzona w formacie hot seat
* możliwość deklaracji ilości graczy oraz kolorów ich pionków przed rozpoczęciem rozgrywki
* automatyczne pobieranie podatku od gracza, który stanie na polu innego gracza
* logika odpowiadająca za ruch graczy po planszy oraz możliwość wykupienia danych pól
* podsumowanie gry po ukończeniu rozgrywki tzw. leaderboard
* okno z logami/wiadomościami z gry oraz rankingiem graczy


## Instalacja gry:
* grę należy sklonować z GitHuba, następnie wykonać komendę `npm install` oraz `ng serve` w cmd.exe , czyli interpreterze poleceń Windows.
