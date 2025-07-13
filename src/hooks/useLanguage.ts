import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Get saved language from localStorage or default to 'en'
  const getSavedLanguage = (): string => {
    const saved = localStorage.getItem('i18nextLng');
    return saved || 'en';
  };

  // Save language to localStorage
  const saveLanguage = (lang: string) => {
    localStorage.setItem('i18nextLng', lang);
  };

  // Change language and update direction
  const changeLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      saveLanguage(lang);
      
      // Update document direction based on language
      const direction = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = lang;
      
      // Add/remove RTL-specific classes
      if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Initialize language and direction on mount
  useEffect(() => {
    const savedLang = getSavedLanguage();
    if (savedLang !== currentLanguage) {
      changeLanguage(savedLang);
    } else {
      // Set initial direction
      const direction = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = savedLang;
      
      if (savedLang === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
    }
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return {
    currentLanguage,
    changeLanguage,
    isRTL: currentLanguage === 'ar',
  };
}; 