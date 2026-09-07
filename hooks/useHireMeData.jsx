// hooks/useHireMeData.jsx
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

const useHireMeData = () => {
  const { t } = useTranslation('hireme');

  const hireMeData = useMemo(() => ({
    title: t('modal.title'),
    subtitle: (step, total, title) => {
      return t('modal.subtitle', { 
        step: step, 
        total: total, 
        title: title 
      });
    },
    steps: {
      basicInfo: t('steps.basicInfo'),
      projectDetails: t('steps.projectDetails'),
      reviewSend: t('steps.reviewSend'),
    },
    labels: {
      name: t('labels.name'),
      email: t('labels.email'),
      projectCategory: t('labels.projectCategory'),
      projectDescription: t('labels.projectDescription'),
      review: t('labels.review'),
      nameLabel: t('labels.nameLabel'),
      emailLabel: t('labels.emailLabel'),
      projectTypeLabel: t('labels.projectTypeLabel'),
      personalInfo: t('labels.personalInfo'),
      projectDetails: t('labels.projectDetails'),
      instantCommunication: t('labels.instantCommunication'),
    },
    buttons: {
      back: t('buttons.back'),
      continue: t('buttons.continue'),
      send: t('buttons.send'),
      sending: t('buttons.sending'),
    },
    errors: {
      nameRequired: t('errors.nameRequired'),
      emailRequired: t('errors.emailRequired'),
      validEmail: t('errors.validEmail'),
      subjectRequired: t('errors.subjectRequired'),
      messageRequired: t('errors.messageRequired'),
      messageMinLength: t('errors.messageMinLength'),
      fillRequired: t('errors.fillRequired'),
      sendFailed: t('errors.sendFailed'),
      networkError: t('errors.networkError'),
    },
    success: {
      message: t('success.message'),
    },
    projectOptions: [
      { value: 'webApp', label: t('projectOptions.webApp') },
      { value: 'mobileApp', label: t('projectOptions.mobileApp') },
      { value: 'uiUx', label: t('projectOptions.uiUx') },
      { value: 'branding', label: t('projectOptions.branding') },
      { value: 'digitalMarketing', label: t('projectOptions.digitalMarketing') },
      { value: 'ecommerce', label: t('projectOptions.ecommerce') },
      { value: 'api', label: t('projectOptions.api') },
      { value: 'consultation', label: t('projectOptions.consultation') },
      { value: 'other', label: t('projectOptions.other') },
    ],
    social: {
      whatsapp: t('social.whatsapp'),
      telegram: t('social.telegram'),
      gmail: t('social.gmail'),
      linkedin: t('social.linkedin'),
    },
  }), [t]);

  return hireMeData;
};

export default useHireMeData;