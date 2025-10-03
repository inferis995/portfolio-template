# Portfolio Template - Curriculum Professionale

Un template portfolio/curriculum moderno, responsive e completamente personalizzabile con tema cyber futuristico.

## ✨ Nuove Funzionalità

### Piano A - Essenziale ✅
- ✅ **Dark/Light Mode**: Toggle automatico con salvataggio preferenze
- ✅ **SEO Ottimizzato**: Meta tags completi per social sharing (Open Graph, Twitter Cards)
- ✅ **Accessibilità**: ARIA labels, screen reader support, navigazione da tastiera
- ✅ **File Config.js**: Personalizzazione centralizzata senza toccare HTML
- ✅ **Performance**: Transizioni smooth e animazioni ottimizzate

### Piano B - Professionale ✅
- ✅ **Scroll Progress Bar**: Barra di progresso in alto con gradiente cyber
- ✅ **Particelle Animate**: Effetto particelle Canvas nella hero section (80 particelle con connessioni)
- ✅ **Form EmailJS**: Integrazione EmailJS ready con fallback demo mode
- ✅ **Font Awesome Optimization**: Guida completa per ottimizzazione caricamento

### Piano C - Premium (PWA) ✅
- ✅ **Progressive Web App**: Installabile come app su desktop e mobile
- ✅ **Service Worker**: Caching intelligente e supporto offline
- ✅ **Install Prompt**: Pulsante floating "Installa App" automatico
- ✅ **Manifest.json**: Configurazione PWA completa con icone multiple
- ✅ **Guida Icone**: Documento dettagliato per creazione icone PWA

## 🎯 Caratteristiche

- **Design Cyber Futuristico**: Palette colori cyan (#00d4ff), viola (#7b2ff7), magenta (#ff00ff)
- **Completamente Responsive**: Si adatta perfettamente a tutti i dispositivi (desktop, tablet, mobile)
- **Animazioni Fluide**: Effetti di scroll, transizioni e animazioni smooth
- **Sezioni Complete**:
  - Hero section con presentazione e effetti luminosi
  - Chi sono (About)
  - Competenze con barre di progresso animate
  - Esperienza lavorativa con timeline
  - Formazione ed educazione
  - Portfolio progetti con overlay e glow effects
  - Form di contatto con validation
  - Footer

## 📁 Struttura del Progetto

```
template portfolio/
│
├── index.html              # Struttura HTML principale con meta tags SEO
├── styles.css              # Stili CSS con dark mode support
├── script.js               # JavaScript per interattività e theme toggle
├── config.js               # Configurazione centralizzata
├── manifest.json           # ⭐ PWA manifest configuration
├── service-worker.js       # ⭐ Service worker per offline support
├── ICONE-PWA-GUIDA.md     # ⭐ Guida creazione icone PWA
├── assets/                 # Risorse statiche
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg        # Immagine per social sharing
│   └── icon-*.png          # Icone PWA (da creare, vedi guida)
└── README.md               # Questo file
```

## 🚀 Come Utilizzare

### ⚡ Metodo Rapido (Consigliato)

1. **Personalizza config.js**:
   ```javascript
   // Apri config.js e modifica le tue informazioni
   const portfolioConfig = {
       personal: {
           name: "Il Tuo Nome",
           role: "Web Developer | Designer",
           email: "tuaemail@example.com",
           // ... altre info
       },
       social: {
           linkedin: "https://linkedin.com/in/tuoprofilo",
           github: "https://github.com/tuousername",
           // ...
       },
       // ...
   };
   ```

2. **Personalizza Meta Tags SEO**:
   - Apri `index.html`
   - Cerca `<!-- SEO Meta Tags -->` (linea ~7)
   - Modifica title, description, keywords
   - Aggiorna URL e og:image

3. **Personalizza i Colori** (opzionale):
   - Apri `styles.css`
   - Modifica le variabili CSS in `:root` (linea ~21):
     ```css
     --primary-color: #00d4ff;    /* Cyan elettrico */
     --secondary-color: #7b2ff7;   /* Viola intenso */
     --accent-color: #ff00ff;      /* Magenta */
     ```

4. **Configura EmailJS (Form Contatto)**:
   - Registrati gratis su [EmailJS](https://www.emailjs.com/)
   - Crea un servizio email e un template
   - Apri `script.js` e cerca `EMAILJS_CONFIG` (linea ~239)
   - Inserisci i tuoi ID e imposta `enabled: true`

   ```javascript
   const EMAILJS_CONFIG = {
       enabled: true,              // Abilita EmailJS
       serviceID: 'service_abc123',
       templateID: 'template_xyz456',
       publicKey: 'user_ABC123XYZ'
   };
   ```

## 🎨 Personalizzazione Avanzata

### Modificare le Competenze
Nel file `index.html`, cerca la sezione `<!-- Skills Section -->` e modifica:
- Nome della competenza
- Percentuale (sia nel testo che in `style="width: XX%"`)

### Aggiungere/Rimuovere Sezioni
Ogni sezione è indipendente e può essere facilmente rimossa o duplicata.

### Cambiare i Social Link
Cerca la sezione `social-links` in `index.html` e aggiorna gli href con i tuoi profili social.

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Licenza

Questo template è libero e open-source. Puoi usarlo per progetti personali e commerciali.

## 💡 Suggerimenti

1. **Ottimizza le Immagini**: Usa immagini ottimizzate per il web (comprimi con TinyPNG o simili)
2. **SEO**: Aggiungi meta tags nel `<head>` per migliorare la visibilità sui motori di ricerca
3. **Favicon**: Aggiungi una favicon personalizzata
4. **Analytics**: Integra Google Analytics per tracciare le visite
5. **Hosting**: Puoi hostare gratuitamente su:
   - GitHub Pages
   - Netlify
   - Vercel
   - Cloudflare Pages

## 🛠️ Tecnologie Utilizzate

- HTML5
- CSS3 (con CSS Variables e Flexbox/Grid)
- JavaScript Vanilla (ES6+)
- Font Awesome (per le icone)

---

**Buona fortuna con il tuo portfolio! 🚀**

## 🌓 Dark/Light Mode

Il template include un toggle automatico per modalità scura/chiara:
- Click sull'icona luna/sole nella navbar
- La preferenza viene salvata in localStorage
- Supporta tutte le sezioni con transizioni smooth

## ♿ Accessibilità

- **ARIA Labels**: Tutti gli elementi interattivi hanno etichette appropriate
- **Screen Reader Support**: Label nascoste per form inputs
- **Navigazione Tastiera**: Tab navigation completa
- **Contrasto Colori**: Rispetta WCAG 2.1 AA standards

## 📊 SEO Ready

- Meta tags completi (title, description, keywords)
- Open Graph per Facebook/LinkedIn sharing
- Twitter Cards support
- Favicon multi-size
- Robots meta tag configurabile

## 🎨 Funzionalità Piano B

### Scroll Progress Bar
Barra di progresso cyan in alto che si riempie durante lo scroll della pagina.

### Particelle Animate
Effetto Canvas con 80 particelle cyan che si muovono e si connettono nella hero section. Ottimizzato per performance.

### Form Contatto EmailJS
- **Demo Mode**: Funziona subito senza configurazione (mostra alert)
- **EmailJS Mode**: Configura i tuoi dati per invii email reali
- **Feedback Visivo**: Messaggi di successo/errore colorati
- **Loading State**: Spinner durante invio
- **Validazione**: Email e campi obbligatori

### Font Awesome Optimization
3 opzioni documentate nell'HTML:
1. **All.min.css** (900KB) - Completo ma lento
2. **Solid + Brands** (400KB) - Consigliato, -55% peso
3. **Kit Personalizzato** - Solo icone usate, massima performance

## 📱 Funzionalità PWA (Piano C)

### Progressive Web App
Il portfolio è **installabile come app nativa** su:
- ✅ Desktop (Chrome, Edge, Safari)
- ✅ Android (Chrome, Samsung Internet)
- ✅ iOS (Safari - con limitazioni)

### Service Worker & Offline
- **Cache intelligente**: Prima visita carica tutto, poi funziona offline
- **Aggiornamenti automatici**: Controlla nuove versioni ogni minuto
- **Strategie cache**:
  - Network first per contenuti dinamici
  - Cache first per assets statici
  - Fallback offline per errori di rete

### Install Button
Pulsante floating "Installa App" appare automaticamente quando:
- Il sito è servito via HTTPS
- L'utente non ha già installato l'app
- Il browser supporta PWA install

**Personalizzazione:**
- `manifest.json` (linea 2-3): Modifica nome e descrizione
- `service-worker.js` (linea 4): Cambia versione cache per forzare update
- Nascondi pulsante: rimuovi da `index.html` linea ~63

### Icone PWA
**IMPORTANTE**: Il PWA funziona senza icone, ma per installarlo serve almeno:
- `icon-192x192.png`
- `icon-512x512.png`

Vedi guida completa in [ICONE-PWA-GUIDA.md](ICONE-PWA-GUIDA.md)

**Quick setup:**
1. Vai su https://www.pwabuilder.com/imageGenerator
2. Carica logo 512x512px
3. Scarica icone generate
4. Copia in `assets/`

---

**Template completo: Piano A + B + C ✅**

🎉 Portfolio moderno, responsive, installabile, con dark mode, particelle animate, form EmailJS e supporto offline!

