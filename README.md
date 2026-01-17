# GitHub Pages Personal Website

A minimal, professional website designed for community organizers and advocates. Built with vanilla HTML, CSS, and JavaScript for easy customization and hosting on GitHub Pages.

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a new GitHub repository**
   - Name it `yourusername.github.io` (replace with your GitHub username)
   - Or name it anything else for a project site

2. **Upload these files**
   - Upload all files from this folder to your repository
   - Keep the folder structure intact

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select `main` branch
   - Click Save

4. **Your site is live!**
   - Visit `https://yourusername.github.io`
   - Changes may take 1-2 minutes to appear

### Option 2: Local Development

1. Open the folder in VS Code or your preferred editor
2. Use a local server (e.g., Live Server extension for VS Code)
3. Open `index.html` in your browser

---

## 📁 File Structure

```
├── index.html          # About/Home page
├── pillars.html        # Values page
├── cv.html             # CV/Resume page
├── speaking.html       # Speaking engagements
├── projects.html       # Projects page
├── publications.html   # Publications page
├── press.html          # Press/Media page
├── toolkit.html        # LPA Toolkit download page
├── css/
│   └── style.css       # All styles
├── js/
│   ├── config.js       # ⭐ YOUR CONTENT GOES HERE
│   └── main.js         # Site functionality
├── images/             # Your images (create this folder)
│   └── profile.jpg     # Your profile photo
├── files/              # Downloadable files (create this folder)
│   ├── cv.pdf          # Your CV
│   └── lpa-toolkit.zip # Your toolkit
└── README.md           # This file
```

---

## ⚙️ Customization

### Step 1: Edit Your Content

**All your content lives in `js/config.js`** — this is the only file you need to edit for most changes.

Open `js/config.js` and update:

```javascript
const CONFIG = {
  // Your name and title
  name: "Your Name",
  title: "Community Organizer & Advocate",
  
  // Your contact info
  contact: {
    email: "hello@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    // ... add or remove contact methods
  },
  
  // Your bio, values, CV, projects, etc.
  // ... everything is in this file
};
```

### Step 2: Add Your Files

1. **Create folders** (if they don't exist):
   - `images/` - for your profile photo
   - `files/` - for downloadable files

2. **Add your profile photo**:
   - Save as `images/profile.jpg`
   - Recommended size: 400x400 pixels or larger

3. **Add your CV**:
   - Save as `files/cv.pdf`

4. **Add your LPA Toolkit**:
   - Save as `files/lpa-toolkit.zip`

### Step 3: Customize Navigation

In `js/config.js`, you can enable/disable pages:

```javascript
navigation: [
  { name: "About", href: "index.html", enabled: true },
  { name: "Values", href: "pillars.html", enabled: true },
  { name: "CV", href: "cv.html", enabled: false },  // Hidden!
  // ...
],
```

---

## 🎨 Styling

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
  --color-primary: #2D5A4A;      /* Main green */
  --color-accent: #C4704B;        /* Terracotta accent */
  --color-bg: #FDFBF7;            /* Background */
  /* ... */
}
```

### Change Fonts

The site uses Google Fonts (Source Serif 4 and Source Sans 3). To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the `<link>` tags in each HTML file
4. Update the font variables in CSS:

```css
:root {
  --font-heading: 'Your Heading Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

---

## ➕ Adding New Pages

1. **Copy an existing page** (e.g., `projects.html`)

2. **Rename it** (e.g., `blog.html`)

3. **Update the `data-page` attribute**:
   ```html
   <body data-page="blog">
   ```

4. **Add to navigation** in `js/config.js`:
   ```javascript
   navigation: [
     // ... existing pages
     { name: "Blog", href: "blog.html", enabled: true },
   ],
   ```

5. **Add content rendering** in `js/main.js` (optional for dynamic content)

---

## 📱 Responsive Design

The site is fully responsive:
- **Desktop**: Full navigation, side-by-side layouts
- **Tablet**: Adapted grid layouts
- **Mobile**: Hamburger menu, stacked layouts

---

## 🔧 Troubleshooting

### Changes not appearing?
- GitHub Pages can take 1-2 minutes to update
- Clear your browser cache (Ctrl/Cmd + Shift + R)
- Check the repository's Actions tab for build status

### JavaScript not loading?
- Check browser console for errors (F12)
- Ensure `config.js` loads before `main.js`
- Verify file paths are correct

### Images not showing?
- Check file paths (case-sensitive on GitHub)
- Ensure images are in the `images/` folder
- Verify file extensions match exactly

---

## 📄 License

Feel free to use this template for your personal website. Attribution appreciated but not required.

---

## 🤝 Need Help?

If you run into issues:
1. Check that all files are uploaded correctly
2. Verify your `config.js` has valid JavaScript syntax
3. Open browser developer tools to check for errors

Happy organizing! 🌱
