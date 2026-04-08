// hooks/useTestimonialsData.js
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';

export const useTestimonialsData = () => {
    const { t } = useTranslation('testimonials');
    
    // Get all testimonial keys from the translation file
    const testimonialKeys = [
        'al-idhafa',
        'we-are-kasserine',
        'bariq-rifki',
        'amine-chebbi'
    ];
    
    // Build testimonials array from translations
    const testimonialsData = testimonialKeys.map((key) => {
        const testimonial = t(`items.${key}`, { returnObjects: true });
        
        // Skip if no data
        if (!testimonial || typeof testimonial === 'string') return null;
        
        return {
            id: uuidv4(),
            name: testimonial.name || key,
            title: testimonial.title || '',
            company: testimonial.company || '',
            quote: testimonial.quote || '',
            rating: testimonial.rating || 5,
            image: testimonial.image ,
        };
    }).filter(Boolean);
    
    return testimonialsData;
};

export default useTestimonialsData;