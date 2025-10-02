# Portfolio Template - Curriculum Professionale

Un template portfolio/curriculum moderno, responsive e completamente personalizzabile.

## 🎯 Caratteristiche

- **Design Moderno**: Layout pulito e professionale con gradiente viola/indigo
- **Completamente Responsive**: Si adatta perfettamente a tutti i dispositivi (desktop, tablet, mobile)
- **Animazioni Fluide**: Effetti di scroll, transizioni e animazioni smooth
- **Sezioni Complete**:
  - Hero section con presentazione
  - Chi sono (About)
  - Competenze con barre di progresso animate
  - Esperienza lavorativa con timeline
  - Formazione ed educazione
  - Portfolio progetti con overlay
  - Form di contatto funzionale
  - Footer

## 📁 Struttura del Progetto

```
template portfolio/
│
├── index.html          # Struttura HTML principale
├── styles.css          # Tutti gli stili CSS
├── script.js           # JavaScript per interattività
├── images/             # Cartella per le immagini
│   ├── profile.jpg     # Foto profilo (da aggiungere)
│   ├── project1.jpg    # Immagine progetto 1 (da aggiungere)
│   ├── project2.jpg    # Immagine progetto 2 (da aggiungere)
│   └── project3.jpg    # Immagine progetto 3 (da aggiungere)
└── README.md           # Questo file
```

## 🚀 Come Utilizzare

1. **Personalizza i Contenuti**:
   - Apri `index.html`
   - Sostituisci "Il Tuo Nome" con il tuo nome
   - Modifica tutte le informazioni personali
   - Aggiorna competenze, esperienza, formazione e progetti

2. **Aggiungi le Immagini**:
   - Aggiungi la tua foto profilo come `images/profile.jpg` (consigliato: 350x350px)
   - Aggiungi screenshot dei progetti come `images/project1.jpg`, `project2.jpg`, ecc. (consigliato: 800x600px)

3. **Personalizza i Colori** (opzionale):
   - Apri `styles.css`
   - Modifica le variabili CSS in `:root` per cambiare i colori:
     ```css
     --primary-color: #6366f1;    /* Colore principale */
     --secondary-color: #8b5cf6;   /* Colore secondario */
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

---

**Test completato con successo! Questa riga è stata aggiunta tramite Claude Code.**
