import { v4 as uuidv4 } from 'uuid';

export const testimonialsData = [
    {
        id: uuidv4(),
        name: 'AL Idhafa Company',
        title: 'Tech Company',
        quote: 'Oussama brings a rare combination of technical innovation and creative vision to the project project. His ability to solve complex problems while maintaining coherance makes him a valuable collaborator.',
        image: '/images/company-logos/al-idhafa.png',
        category: ['engineer']
    },
    {
        id: uuidv4(),
        name: 'We Are Kasserine',
        title: 'Community Organization',
        quote: 'Working with Oussama was a fantastic experience. His attention to details and ability to deliver stunning content significantly elevated our marketing strategy.',
        image: '/images/company-logos/we_are_kasserine.png',
        category: ['creator']
    },
    {
        id: uuidv4(),
        name: 'Bariq Rifki',
        title: 'Content Creator',
        quote: 'Oussama\'s creative skills in video editing are top-notch. He transformed my ideas into visually captivating videos that captivated my audience.',
        image: '/images/testimonials/client1.jpg',
        category: ['engineer']
    },
    {
        id: uuidv4(),
        name: 'Amine Chebbi',
        title: 'Content Creator | CEO of Chebbi Trading',
        quote: 'The collaboration with Oussama was truly inspiring. His creativity helped me to explain complex topics in a clear and engaging way.',
        image: '/images/testimonials/client2.jpg',
        category: ['creator']
    },
];