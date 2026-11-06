# Sponsoren Urk in Wintersferen

Sponsorsectie voor de Webflow-site. Alles wordt gebouwd uit `sponsoren.json`.

- `sponsoren.json`: alle sponsoren per type (vriend, goud, zilver, brons, educatie)
- `sponsoren.js` en `sponsoren.css`: bouwen en stijlen de sectie
- `logos/`: logo's (WebP of SVG), de bestandsnaam staat in `sponsoren.json` bij `l`

## Sponsor toevoegen of logo wijzigen
1. Zet het logo (bij voorkeur WebP, 420 px breed, of SVG) in `logos/`.
2. Voeg in `sponsoren.json` een regel toe, bijvoorbeeld:
   `{"n":"Naam BV","l":"naam-bv.webp","s":"https://website.nl"}`
   `n` = naam, `l` = logobestand, `s` = website (optioneel), `bg` = achtergrondkleur van het blok (optioneel).
3. Commit. Vernieuw daarna de cache (zie hieronder).

## Cache vernieuwen (jsDelivr)
Wijzigingen op `@main` kunnen tot 12 uur duren. Direct vernieuwen: open
`https://purge.jsdelivr.net/gh/henkwillemdeboer/urkinwintersferen@main/sponsoren.json`
(en hetzelfde voor `sponsoren.js`, `sponsoren.css` en eventueel een logo).
