# 🎨 Guida Creazione Icone PWA

Per rendere il portfolio installabile come app, devi creare icone in diverse risoluzioni.

## 📋 Icone Richieste

Crea queste icone nella cartella `assets/`:

- `icon-72x72.png` (72x72px)
- `icon-96x96.png` (96x96px)
- `icon-128x128.png` (128x128px)
- `icon-144x144.png` (144x144px)
- `icon-152x152.png` (152x152px)
- `icon-192x192.png` (192x192px) ⭐ Importante
- `icon-384x384.png` (384x384px)
- `icon-512x512.png` (512x512px) ⭐ Importante

## 🛠️ Strumenti Consigliati

### Opzione 1: PWA Asset Generator (Automatico)
1. Vai su: https://www.pwabuilder.com/imageGenerator
2. Carica un'immagine 512x512px (logo/iniziali)
3. Scarica tutte le icone generate
4. Copia nella cartella `assets/`

### Opzione 2: Realfavicongenerator (Completo)
1. Vai su: https://realfavicongenerator.net/
2. Carica un'immagine
3. Seleziona "Generate icons for Web, Android, Microsoft, and iOS"
4. Scarica il pacchetto
5. Estrai le icone nella cartella `assets/`

### Opzione 3: Manuale con Photoshop/GIMP/Figma
1. Crea un canvas 512x512px
2. Design del logo/icona con margini (88px padding consigliato)
3. Esporta in PNG per ogni risoluzione richiesta
4. Salva nella cartella `assets/`

## 🎨 Design Tips

- **Colori**: Usa i colori del template (cyan #00d4ff, viola #7b2ff7)
- **Forma**: Preferibilmente quadrata con margini
- **Contenuto**: Logo, iniziali o simbolo riconoscibile
- **Background**: Può essere trasparente o con gradiente
- **Safe Area**: Lascia 10% di margine dai bordi

## ✅ Esempio Semplice

Se non hai un logo, puoi usare:
- Le tue iniziali con font bold
- Un simbolo (</>, {}, 💻)
- Un gradiente cyber con le iniziali

## 🖼️ Screenshot (Opzionali ma consigliati)

Per il manifest.json sono configurati anche:
- `screenshot-desktop.png` (1280x720px)
- `screenshot-mobile.png` (640x1136px)

Puoi crearli con uno screenshot della pagina o rimuovere la sezione `screenshots` dal manifest.json.

## 📦 Struttura Finale

```
assets/
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png ⭐
├── icon-384x384.png
├── icon-512x512.png ⭐
├── screenshot-desktop.png (opzionale)
└── screenshot-mobile.png (opzionale)
```

## 🧪 Test

Dopo aver aggiunto le icone:
1. Apri il sito in Chrome/Edge
2. Premi F12 → Application → Manifest
3. Verifica che tutte le icone siano caricate
4. Controlla che il pulsante "Installa App" appaia

---

**Senza icone il PWA funzionerà comunque, ma non sarà installabile sui dispositivi.**
