// hooks/useBannerLanguage.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useBannerLanguage = () => {
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  useEffect(() => {
    // Get language from URL or localStorage
    const urlLang = router.locale;
    const savedLang = localStorage.getItem('preferred-language');
    
    if (urlLang) {
      setLanguage(urlLang);
    } else if (savedLang) {
      setLanguage(savedLang);
    }
  }, [router.locale]);

  return { language };
};