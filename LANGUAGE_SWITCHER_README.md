# Language Switcher Implementation

This project now includes a complete internationalization (i18n) system with support for English, French, and Arabic languages, including RTL (Right-to-Left) layout support for Arabic.

## Features

- 🌍 **Multi-language Support**: English (en), French (fr), Arabic (ar)
- 🔄 **Dynamic Language Switching**: Instant language changes with `i18n.changeLanguage()`
- 💾 **Persistent Storage**: Selected language is saved in localStorage
- 📱 **RTL Support**: Automatic RTL layout for Arabic language
- 🎨 **Responsive Design**: Language switcher works on all screen sizes
- ⚡ **Performance**: Efficient translation loading and caching

## File Structure

```
src/
├── i18n.js                          # i18n configuration
├── hooks/
│   └── useLanguage.ts               # Custom hook for language management
├── components/
│   ├── LanguageSwitcher.tsx         # Language switcher dropdown component
│   ├── Header.tsx                   # Updated header with language switcher
│   └── SamplePage.tsx               # Demo page showing translations
├── locales/
│   ├── en/
│   │   └── translation.json         # English translations
│   ├── fr/
│   │   └── translation.json         # French translations
│   └── ar/
│       └── translation.json         # Arabic translations
└── App.tsx                          # Updated with i18n initialization
```

## Usage

### 1. Using Translations in Components

```tsx
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("common.welcome")}</h1>
      <p>{t("home.description")}</p>
    </div>
  );
};
```

### 2. Using the Language Hook

```tsx
import { useLanguage } from "../hooks/useLanguage";

const MyComponent = () => {
  const { currentLanguage, changeLanguage, isRTL } = useLanguage();

  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <p>Is RTL: {isRTL ? "Yes" : "No"}</p>
      <button onClick={() => changeLanguage("fr")}>Switch to French</button>
    </div>
  );
};
```

### 3. Adding New Translations

1. Add new keys to all translation files in `src/locales/{lang}/translation.json`
2. Use the new keys in your components with `t('your.new.key')`

Example:

```json
// src/locales/en/translation.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}
```

```json
// src/locales/fr/translation.json
{
  "newSection": {
    "title": "Titre de la Nouvelle Section",
    "description": "Description de la nouvelle section"
  }
}
```

```json
// src/locales/ar/translation.json
{
  "newSection": {
    "title": "عنوان القسم الجديد",
    "description": "وصف القسم الجديد"
  }
}
```

## RTL Support

The system automatically handles RTL layout for Arabic:

- **Document Direction**: Automatically sets `dir="rtl"` on the HTML element
- **CSS Classes**: Adds `rtl` class to body for custom styling
- **Layout Adjustments**: CSS rules automatically flip margins, padding, and text alignment
- **Component Compatibility**: Works with existing Tailwind CSS classes

### RTL CSS Rules

The following CSS rules are automatically applied for RTL:

```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .mr-8 {
  margin-right: 0;
  margin-left: 2rem;
}

[dir="rtl"] .ml-2 {
  margin-left: 0;
  margin-right: 0.5rem;
}

/* And many more... */
```

## Demo Pages

- **Home Page**: `/` - Main application with language switcher in header
- **Sample Page**: `/sample` - Demo page showing various translations

## Dependencies

The following packages were added:

```json
{
  "react-i18next": "^14.0.0",
  "i18next": "^23.0.0",
  "i18next-browser-languagedetector": "^7.0.0"
}
```

## Installation

The dependencies are already installed. If you need to reinstall:

```bash
npm install react-i18next i18next i18next-browser-languagedetector
```

## How It Works

1. **Initialization**: i18n is initialized in `src/i18n.js` with language detection
2. **Language Detection**: Automatically detects user's preferred language from browser/localStorage
3. **Language Switching**: When user selects a language, it:
   - Changes the i18n language
   - Updates localStorage
   - Sets document direction (RTL for Arabic)
   - Updates CSS classes
4. **Translation Loading**: Translations are loaded from JSON files
5. **RTL Handling**: CSS automatically adjusts layout for RTL languages

## Customization

### Adding New Languages

1. Create a new folder in `src/locales/{newLang}/`
2. Add `translation.json` with your translations
3. Update `src/i18n.js` to include the new language
4. Add the language to the `languages` array in `LanguageSwitcher.tsx`

### Styling the Language Switcher

The `LanguageSwitcher` component uses Tailwind CSS classes and can be customized by modifying the component's JSX.

### Custom RTL Rules

Add custom RTL CSS rules in `src/index.css`:

```css
[dir="rtl"] .your-custom-class {
  /* Your RTL styles */
}
```

## Browser Support

- Modern browsers with ES6+ support
- Automatic fallback to English if translation is missing
- Graceful degradation for older browsers

## Performance Considerations

- Translations are loaded on-demand
- Language detection is cached in localStorage
- Minimal bundle size impact
- Efficient re-rendering with React hooks

## Troubleshooting

### Common Issues

1. **Translations not loading**: Check that translation files exist and are properly formatted JSON
2. **RTL not working**: Ensure the `useLanguage` hook is properly initialized
3. **Language not persisting**: Check localStorage permissions and browser settings

### Debug Mode

To enable debug mode, set `debug: true` in `src/i18n.js`:

```javascript
i18n.init({
  debug: true,
  // ... other options
});
```

This will log translation loading and language changes to the console.
