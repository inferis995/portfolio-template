# Portfolio Template - Curriculum Professionale

Un template portfolio/curriculum moderno, responsive e completamente personalizzabile con tema cyber futuristico.

## ✨ Nuove Funzionalità (Piano A)

- ✅ **Dark/Light Mode**: Toggle automatico con salvataggio preferenze
- ✅ **SEO Ottimizzato**: Meta tags completi per social sharing (Open Graph, Twitter Cards)
- ✅ **Accessibilità**: ARIA labels, screen reader support, navigazione da tastiera
- ✅ **File Config.js**: Personalizzazione centralizzata senza toccare HTML
- ✅ **Performance**: Transizioni smooth e animazioni ottimizzate

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
├── index.html          # Struttura HTML principale con meta tags SEO
├── styles.css          # Stili CSS con dark mode support
├── script.js           # JavaScript per interattività e theme toggle
├── config.js           # ⭐ NUOVO: Configurazione centralizzata
├── assets/             # Risorse statiche
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── og-image.jpg    # Immagine per social sharing
└── README.md           # Questo file
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

4. **Configura il Form di Contatto**:
   - Il form attualmente mostra solo un alert
   - Per renderlo funzionale, modifica `script.js` nella sezione "Contact Form Handling"
   - Puoi integrare servizi come:
     - [Formspree](https://formspree.io/)
     - [EmailJS](https://www.emailjs.com/)
     - Il tuo backend personalizzato

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

---

**Template aggiornato con ottimizzazioni Piano A ✅**
