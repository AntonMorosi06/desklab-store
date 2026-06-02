# DeskLab Store — MVP e-commerce gratuito

DeskLab Store è una baseline gratuita per validare un piccolo e-commerce di accessori tech, studio, scrivania e produttività.

L'obiettivo non è costruire subito uno shop enorme, ma testare pochi prodotti con ordine controllato: il cliente richiede disponibilità, il venditore verifica fornitore, tempi e prezzo finale, poi invia eventuale link pagamento.

## Stato del progetto

Versione: v0.1 MVP statico  
Hosting previsto: GitHub Pages  
Backend: assente  
Checkout automatico: non incluso nella v0.1  
Pagamento consigliato: link pagamento dopo conferma manuale  
Catalogo iniziale: 5 prodotti

## Struttura

```text
desklab-store/
├── index.html
├── style.css
├── app.js
├── products.json
├── README.md
├── legal/
│   ├── shipping_returns.md
│   ├── privacy_notes.md
│   └── terms_draft.md
├── data/
│   ├── margin_sheet.csv
│   └── supplier_checklist.md
└── assets/
    ├── images/
    └── icons/
```

## Come avviare in locale

Aprire il terminale nella cartella del progetto:

```bash
cd ~/Desktop/desklab-store
python3 -m http.server 8000
```

Poi aprire:

```text
http://localhost:8000
```

Nota: non aprire `index.html` direttamente dal Finder se il catalogo non si carica. Il file `products.json` viene letto via `fetch`, quindi è meglio usare un server locale.

## Come pubblicare su GitHub Pages

1. Crea una repository chiamata `desklab-store`.
2. Carica questi file nella root della repo.
3. Vai su Settings → Pages.
4. Seleziona branch `main`, folder `/root`.
5. Salva e attendi la pubblicazione.

## Cosa modificare subito

Nel file `app.js`, cambia:

```js
contactEmail: "desklab@example.com"
```

con la tua email dedicata allo store.

Nel file `products.json`, per ogni prodotto puoi modificare:

- nome
- prezzo
- categoria
- descrizione
- tempi stimati
- costo fornitore target
- link pagamento, quando sarà pronto
- immagine

## Pagamenti

La v0.1 non include checkout automatico.

Metodo consigliato:

1. Il cliente richiede disponibilità.
2. Verifichi fornitore e tempi.
3. Confermi prezzo finale.
4. Invii link pagamento.
5. Spedisci o ordini dal fornitore seguendo le condizioni comunicate.

## Note legali e fiscali

Le bozze in `legal/` non sono consulenza legale. Servono come base di lavoro da far verificare prima della vendita reale.

Prima di vendere in modo abituale/continuativo, verificare con commercialista o consulente:

- Partita IVA
- inquadramento attività
- SCIA/SUAP se applicabile
- Registro Imprese/ComUnica se applicabile
- privacy
- condizioni di vendita
- recesso
- garanzia legale
- gestione resi e rimborsi

## Roadmap

### v0.1

- sito statico
- catalogo 5 prodotti
- filtri e ricerca
- richiesta disponibilità via email
- pagine legali in bozza
- foglio margini base

### v0.2

- aggiunta prodotti validati
- foto prodotto reali o autorizzate
- dominio personalizzato
- email dedicata
- link pagamento per singolo prodotto

### v0.3

- tracking ordini manuale
- test prime vendite
- raccolta feedback clienti
- revisione prezzi e margini

### v0.4

- eventuale passaggio a piattaforma e-commerce completa
- automazione checkout
- policy legali definitive
- valutazione stock minimo

## Regola madre

Non vendere prodotti non verificati, non usare foto senza permesso, non promettere spedizioni irreali e non attivare pagamento automatico prima di avere fornitori e condizioni chiare.
