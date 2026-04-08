// hooks/useContactTranslations.js
import { useTranslation } from 'next-i18next';

const useContactTranslations = () => {
  const { t } = useTranslation('contact');

  // Contact cards data
  const getContactCards = () => {
    return [
      {
        id: 1,
        title: t('contactCards.location'),
        content: "Tunisia",
        icon: "FiMapPin",
        color: "from-indigo-500 to-purple-500",
        href: null
      },
      {
        id: 2,
        title: t('contactCards.email'),
        content: "oussama.missaoui.it@gmail.com",
        icon: "FiMail",
        color: "from-green-500 to-emerald-500",
        href: "mailto:oussama.missaoui.it@gmail.com"
      },
      {
        id: 3,
        title: t('contactCards.phone'),
        content: "+216 23 257 784",
        icon: "FiPhone",
        color: "from-purple-500 to-pink-500",
        href: "tel:+21623257784"
      },
      {
        id: 4,
        title: t('contactCards.availability'),
        content: "Mon-Fri: 9am-6pm (GMT+1)",
        icon: "FiClock",
        color: "from-orange-500 to-amber-500",
        href: null
      }
    ];
  };

  // Social platforms data
  const getSocialPlatforms = () => {
    return [
      {
        name: t('socialPlatforms.linkedin'),
        icon: "FiLinkedin",
        color: "from-blue-600 to-blue-700",
        url: "https://linkedin.com/in/oussama-missaoui-a48589246"
      },
      {
        name: t('socialPlatforms.github'),
        icon: "FiGithub",
        color: "from-gray-800 to-gray-900",
        url: "https://github.com/OussamaMi01"
      },
      {
        name: t('socialPlatforms.whatsapp'),
        icon: "FaWhatsapp",
        color: "from-green-500 to-green-600",
        url: "https://wa.me/21623257784"
      },
      {
        name: t('socialPlatforms.telegram'),
        icon: "FaTelegram",
        color: "from-sky-500 to-blue-500",
        url: "https://t.me/Oussema_missaoui"
      }
    ];
  };

  // Form services list
  const getServicesList = () => {
    return [
      t('form.services.webDevelopment'),
      t('form.services.mobileDevelopment'),
      t('form.services.aiSolutions'),
      t('form.services.uiuxDesign'),
      t('form.services.digitalMarketing'),
      t('form.services.consulting'),
      t('form.services.other')
    ];
  };

  // Get translation function for direct use
  const translate = (key, defaultValue = '') => {
    return t(key, defaultValue);
  };

  return {
    // Translation functions
    t,
    translate,
    
    // Data getters
    getContactCards,
    getSocialPlatforms,
    getServicesList,
    
    // Direct translation keys
    pageTitle: t('page.title'),
    pageSubtitle: t('page.subtitle'),
    badge: t('badge'),
    sectionTitle: t('section.title'),
    sectionTitleHighlight: t('section.titleHighlight'),
    sectionDescription: t('section.description'),
    quickResponseTitle: t('quickResponse.title'),
    quickResponseDescription: t('quickResponse.description'),
    socialTitle: t('social.title'),
    socialSubtitle: t('social.subtitle'),
    trustTitle: t('trust.title'),
    trustDescription: t('trust.description'),
    formBadge: t('form.badge'),
    formTitle: t('form.title'),
    formTitleHighlight: t('form.titleHighlight'),
    formSubtitle: t('form.subtitle'),
    formNameLabel: t('form.fields.name'),
    formEmailLabel: t('form.fields.email'),
    formPhoneLabel: t('form.fields.phone'),
    formServiceLabel: t('form.fields.service'),
    formMessageLabel: t('form.fields.message'),
    formNamePlaceholder: t('form.placeholders.name'),
    formEmailPlaceholder: t('form.placeholders.email'),
    formPhonePlaceholder: t('form.placeholders.phone'),
    formServicePlaceholder: t('form.placeholders.service'),
    formMessagePlaceholder: t('form.placeholders.message'),
    formSubmitButton: t('form.buttons.submit'),
    formSendingButton: t('form.buttons.sending'),
    successAlert: t('form.alerts.success'),
    errorAlert: t('form.alerts.error'),
    networkErrorAlert: t('form.alerts.networkError')
  };
};

export default useContactTranslations;