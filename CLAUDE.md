# CLAUDE.md

Sito statico di Marco Di Gioia (sviluppatore indipendente), pubblicato con GitHub Pages da `main` sul dominio indicato in `CNAME`. Il progetto Claude collegato serve a gestire il sito, le privacy policy delle app e i tool/schemi che Marco costruisce. Usa claude-projects-starter (https://github.com/MarcoDiGioia/claude-projects-starter): leggilo dall'indirizzo pubblico raw, non clonarlo.

## Struttura

- `index.html`: pagina principale ("Progetto Gazza"), elenco delle app con link alle privacy policy.
- `<app>/privacy/index.html`: privacy policy di ogni app (attuali: `scadi`, `prendimi`, `luna`, `billy`), in 6 lingue (it, en, es, fr, de, pt) con selettore di lingua. Gli URL sono registrati nelle console degli store: non rinominarli né spostarli.
- `app-ads.txt`: dichiarazione AdMob. Non modificare senza richiesta esplicita.
- `CNAME`, `.nojekyll`: configurazione di Pages. Non toccare senza richiesta esplicita.

## Regole (modulo `regole-base`)

1. Cloud prima di tutto: il lavoro vive nei repository remoti; ogni risultato torna sul repository.
2. Nessun segreto in chat o nei file.
3. Workflow CI solo manuali (`workflow_dispatch`).
4. Niente pubblicazione in produzione senza richiesta esplicita. Qui `main` è il sito online: ogni merge lo pubblica.
5. Niente cancellazioni o rinomine di pagine senza ok.
6. Una PR si unisce solo dopo l'ok di Marco su quella PR.
7. Niente push non verificato: il sito è HTML statico, quindi controllare che i link relativi funzionino e che l'HTML sia ben formato; mostrare l'esito concreto.
8. Commit in inglese `[sito] descrizione` (o `[<app>]` se riguarda una sola app). Branch `feature/<app>/<descrizione>`, `bugfix/<app>/<descrizione>`; `main` = sito online.
9. Quando un file standard migliora qui, riportare la modifica nel modulo corrispondente di claude-projects-starter.

## Principi

- Semplicità prima di tutto, impatto minimo, toccare solo il necessario.
- Trovare la causa vera dei problemi, niente toppe.
- Risposte a Marco in italiano.

## Convenzioni del sito

- Nuova app: copiare la struttura di una policy esistente in `<app>/privacy/index.html` (modulo `privacy-policy`), mantenere le 6 lingue e il selettore, aggiungere il link in `index.html` e la voce nel `README.md`. Scegliere un colore d'accento nuovo per il pallino in `index.html`.
- Le policy devono restare coerenti col comportamento reale dell'app (dati raccolti, AdMob): se l'app cambia, segnalare a Marco di rivedere la policy. Non è consulenza legale.
- Pagine autonome: CSS inline, nessuna dipendenza o build.

## Tool e schemi di Marco

Altri repository (tool, schemi) usano gli stessi moduli: chiedere "usa claude-projects-starter" e seguire `moduli/README.md` dello starter (piano → ok di Marco → PR). `.moduli.json` registra i moduli applicati a questo repo.

## Risparmio di token

**Regola salda: il risparmio di token non deve mai ridurre la qualità del lavoro.** Se sono in conflitto vince la qualità. Si elimina solo lo spreco, mai ragionamento, letture necessarie, verifiche, completezza, sicurezza.

Dettagli nella skill `risparmio-token` (`.claude/skills/risparmio-token/SKILL.md`).

1. Prosa senza ripetizioni: risultato prima, niente riassunti del diff né eco della domanda.
2. Cercare prima (Grep/Glob), poi leggere; leggere il file intero se serve per capire. Non rileggere file già letti e non cambiati.
3. Chiamate indipendenti in parallelo.
4. Togliere dall'output dei comandi solo il rumore; un errore va mostrato intero.
5. Ricerche ampie delegabili al subagente `esploratore`; verificare le conclusioni importanti. Nessun subagente per compiti piccoli.
6. Modello e sforzo mai sotto ciò che il compito richiede.
7. `/compact` solo a fine sotto-compito; `/clear` al cambio di argomento.
8. Non cambiare `CLAUDE.md` o server MCP a sessione avviata.
