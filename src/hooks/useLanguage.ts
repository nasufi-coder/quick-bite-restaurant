import { useLanguageContext } from '../contexts/LanguageContext';

export type Language = 'en' | 'sq';

interface Translations {
  [key: string]: {
    en: string;
    sq: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { en: 'Home', sq: 'Faqja e pare' },
  menu: { en: 'Menu', sq: 'Menu' },
  about: { en: 'About', sq: 'Rreth Nesh' },
  
  // Home page
  welcome: { en: 'Welcome to Quick Bite', sq: 'Mirësevini në Quick Bite' },
  heroSubtitle: { 
    en: 'Authentic Albanian fast food with modern taste', 
    sq: 'Ushqim i shpejtë shqiptar autentik me shije moderne' 
  },
  orderNow: { en: 'Order Now', sq: 'Porosit Tani' },
  
  // Menu page
  menuTitle: { en: 'Our Menu', sq: 'Menuja Jonë' },
  categories: {
    en: 'All Categories',
    sq: 'Të Gjitha Kategoritë'
  },
  
  // Menu categories
  fastfood: { en: 'Fast Food', sq: 'Ushqim i Shpejtë' },
  kitchen: { en: 'Kitchen', sq: 'Guzhina' },
  pizza: { en: 'Pizza', sq: 'Pica' },
  hotdrinks: { en: 'Hot Drinks', sq: 'Pije të Ngrohta' },
  colddrinks: { en: 'Cold Drinks', sq: 'Pije Freskuese' },
  alcohol: { en: 'Alcoholic Drinks', sq: 'Pije Alkoolike' },
  
  // About page
  aboutTitle: { en: 'About Quick Bite', sq: 'Rreth Quick Bite' },
  aboutDescription: {
    en: 'Quick Bite brings you the best of Albanian fast food cuisine with a modern twist. We pride ourselves on using fresh, local ingredients to create delicious meals that satisfy your cravings.',
    sq: 'Quick Bite ju sjell më të mirën e kuzhinës shqiptare të ushqimit të shpejtë me një prekje moderne. Ne krenohemi duke përdorur përbërës të freskët dhe lokalë për të krijuar vakte të shijshme që kënaqin dëshirat tuaja.'
  },
  
  // Home page features
  fastDelivery: { en: 'Fast Delivery', sq: 'Dorëzim i Shpejtë' },
  fastDeliveryDesc: { en: 'Quick delivery in 20 minutes', sq: 'Dorëzim i shpejtë në 20 minuta' },
  freshIngredients: { en: 'Fresh Ingredients', sq: 'Përbërës të Freskët' },
  freshIngredientsDesc: { en: 'Always fresh, locally sourced', sq: 'Gjithmonë të freskët, me origjinë lokale' },
  expertChefs: { en: 'Expert Chefs', sq: 'Shefit Ekspertë' },
  expertChefsDesc: { en: 'Prepared by experienced chefs', sq: 'Përgatitur nga shefit me përvojë' },
  
  // About page features
  qualityFirst: { en: 'Quality First', sq: 'Cilësia së Pari' },
  qualityFirstDesc: { 
    en: 'We never compromise on quality. Every dish is prepared with care and attention to detail.',
    sq: 'Ne nuk bëjmë asnjë kompromis me cilësinë. Çdo pjatë përgatitet me kujdes dhe vëmendje ndaj detajeve.'
  },
  fastService: { en: 'Fast Service', sq: 'Shërbim i Shpejtë' },
  fastServiceDesc: { 
    en: 'Quick service without compromising taste. Your satisfaction is our priority.',
    sq: 'Shërbim i shpejtë pa komprometuar shijen. Kënaqësia juaj është prioriteti ynë.'
  },
  freshIngredientsAbout: { en: 'Fresh Ingredients', sq: 'Përbërës të Freskët' },
  freshIngredientsAboutDesc: { 
    en: 'We source our ingredients locally and ensure they meet our high standards.',
    sq: 'Ne i marrim përbërësit tanë lokalisht dhe sigurojmë që ata të përmbushin standardet tona të larta.'
  },
  familyBusiness: { en: 'Family Business', sq: 'Biznes Familjar' },
  familyBusinessDesc: { 
    en: 'Founded as a family business, we treat every customer like family.',
    sq: 'I themeluar si një biznes familjar, ne i trajtojmë të gjithë klientët si familje.'
  },
  
  // Contact information
  visitUs: { en: 'Visit Us', sq: 'Na Vizitoni' },
  address: { en: 'Rruga Pavaresia Durrës, Durrës County', sq: 'Rruga Pavaresia Durrës, Durrës County' },
  phone: { en: '+355 67 420 1582', sq: '+355 67 420 1582' },
  hours: { en: 'Mon-Sun: 10:00 AM - 11:00 PM', sq: 'Hën-Die: 10:00 - 23:00' },

  // Common
  ingredients: { en: 'Ingredients', sq: 'Përbërësit' },
  price: { en: 'Price', sq: 'Çmimi' },
  description: { en: 'Description', sq: 'Përshkrimi' }
};

export const useLanguage = () => {
  const { language, switchLanguage } = useLanguageContext();

  const t = (key: string): string => {
    const keys = key.split('.');
    let translation: any = translations;
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    return translation?.[language] || key;
  };

  return { language, switchLanguage, t };
};