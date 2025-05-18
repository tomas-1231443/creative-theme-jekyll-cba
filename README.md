# CBA Cloud Website – Jekyll Project

This is a multilingual static website built using **Jekyll**, customized with a modern UI theme and localized into English (`en`) and Portuguese (`pt`). It includes dynamic menu translation, markdown-driven content, and a fully styled login page.

---

## 🚀 Project Initialization

### 1. Install Ruby, Jekyll and Bundler

Make sure you have Ruby installed (e.g., using `chruby` and `ruby-install`). Then:

```bash
gem install bundler jekyll
```

### 2. Clone the Repository

```bash
git clone https://github.com/your-user/creative-theme-jekyll-cba.git
cd creative-theme-jekyll-cba
```

### 3. Install Dependencies

```bash
bundle install
```

If using Ruby 3.4.1 and you run into Liquid errors (`tainted?`), downgrade Ruby to 3.2.2 for compatibility with `jekyll 3.9.2`.

---

## 🌐 Local Development

```bash
bundle exec jekyll serve
```

Visit:
```
http://127.0.0.1:4000/
```

---

## 🌍 Multilingual Setup

### Language Structure

- `index.md`: English homepage
- `index.pt.md`: Portuguese homepage
- `_data/translations.yml`: holds translated text keys
- `_data/menus.yml`: uses `id` values, dynamically resolved in layout

### Language Switcher Logic

```liquid
{{ site.data.translations[lang][item.id] }}
```

### Switch URLs

Conditionally render:

```liquid
{% if lang == 'en' %}
  /pt{{ item.url | remove_first: '/' }}
{% else %}
  {{ item.url }}
{% endif %}
```

---

## 🎨 Customizations Made

- **Navbar**: dynamic, translated menu with active language switcher
- **Login Page**: replaced ZMDI icon with logo image
- **Custom CSS**: increased navbar button size
- **Dynamic favicon removal**
- **Background and button color theme analysis based on design image**

---

## 📤 Exporting Site (HTML/CSS/JS)

After developing, Jekyll generates the static site in:

```
_site/
```

To export:
```bash
bundle exec jekyll build
```

This creates HTML, CSS, JS and assets inside `_site/`.

---

## 🔄 Converting Jekyll Output to ASP.NET

1. **Build the site**:
   ```bash
   bundle exec jekyll build
   ```

2. **Copy everything in `_site/`** to your ASP.NET `wwwroot/` folder.

3. **Use partial views or Razor Pages** to include `head`, `nav`, `footer`, etc.

4. Replace paths as needed:
   - `href="assets/...` → `href="~/assets/...`
   - `<a href="...">` → `<a asp-page="..." />` (if using Razor Pages)

5. Optional: move `scripts.min.js`, `styles.css` into `wwwroot/js` and `wwwroot/css`.

---

© 2025 CBA Cloud Website
