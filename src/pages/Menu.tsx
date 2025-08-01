import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

interface MenuItem {
  id: number;
  name: { en: string; sq: string };
  description: { en: string; sq: string };
  ingredients: { en: string[]; sq: string[] };
  price: string;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  // Fast Food
  {
    id: 1,
    name: { en: 'Sufllaqe', sq: 'Sufllaqe' },
    description: { 
      en: 'Traditional Albanian layered pastry with meat and vegetables',
      sq: 'Byreku tradicional shqiptar me shtresa me mish dhe perime'
    },
    ingredients: { 
      en: ['Phyllo dough', 'Ground meat', 'Onions', 'Eggs', 'Oil'],
      sq: ['Brumë filo', 'Mish i grirë', 'Qepë', 'Vezë', 'Vaj']
    },
    price: '€4.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 2,
    name: { en: 'Doner', sq: 'Doner' },
    description: { 
      en: 'Turkish-style rotating meat served in pita bread',
      sq: 'Mish në stil turk i pjekur në rrotull, i shërbyer në bukë pite'
    },
    ingredients: { 
      en: ['Lamb/Chicken meat', 'Pita bread', 'Onions', 'Tomatoes', 'Sauce'],
      sq: ['Mish dashi/pule', 'Bukë pite', 'Qepë', 'Domate', 'Salcë']
    },
    price: '€5.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 3,
    name: { en: 'Shawarma', sq: 'Shawarma' },
    description: { 
      en: 'Middle Eastern wrap with spiced meat and fresh vegetables',
      sq: 'Wrap lindor me mish të erëzuar dhe perime të freskëta'
    },
    ingredients: { 
      en: ['Spiced meat', 'Tortilla wrap', 'Lettuce', 'Tomatoes', 'Garlic sauce'],
      sq: ['Mish i erëzuar', 'Tortilla', 'Marulë', 'Domate', 'Salcë hudhra']
    },
    price: '€5.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 4,
    name: { en: 'Hot Dog', sq: 'Hot-dog' },
    description: { 
      en: 'Classic sausage in a bun with mustard and ketchup',
      sq: 'Sallam klasik në bukë me mustardë dhe ketchup'
    },
    ingredients: { 
      en: ['Sausage', 'Hot dog bun', 'Mustard', 'Ketchup', 'Onions'],
      sq: ['Sallam', 'Bukë hot-dog', 'Mustardë', 'Ketchup', 'Qepë']
    },
    price: '€3.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1612392061787-2cd149de6915?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 5,
    name: { en: 'Sandwich', sq: 'Sandwich' },
    description: { 
      en: 'Fresh sandwich with your choice of fillings',
      sq: 'Sanduiç i freskët me mbushjen që zgjidhni'
    },
    ingredients: { 
      en: ['Bread', 'Ham', 'Cheese', 'Lettuce', 'Tomato', 'Mayo'],
      sq: ['Bukë', 'Proshutë', 'Djathë', 'Marulë', 'Domate', 'Mayonez']
    },
    price: '€4.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 6,
    name: { en: 'Hamburger', sq: 'Hamburger' },
    description: { 
      en: 'Classic beef burger with fresh vegetables',
      sq: 'Hamburger klasik me mish viçi dhe perime të freskëta'
    },
    ingredients: { 
      en: ['Beef patty', 'Bun', 'Lettuce', 'Tomato', 'Onion', 'Sauce'],
      sq: ['Biftek viçi', 'Bukë', 'Marulë', 'Domate', 'Qepë', 'Salcë']
    },
    price: '€6.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 7,
    name: { en: 'Chicken Nuggets with Fries', sq: 'Chicken nuggets me patate' },
    description: { 
      en: 'Crispy chicken nuggets served with golden fries',
      sq: 'Copëza pule të krisur me patate të skuqura'
    },
    ingredients: { 
      en: ['Chicken breast', 'Breadcrumbs', 'Potatoes', 'Oil', 'Seasoning'],
      sq: ['Gjoks pule', 'Thërrime buke', 'Patate', 'Vaj', 'Erëza']
    },
    price: '€7.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1548944172-de6c6b3c2b51?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 8,
    name: { en: 'Shawarma with Chicken Cutlet', sq: 'Shawarma me kotolet pule' },
    description: { 
      en: 'Shawarma wrap with crispy chicken cutlet',
      sq: 'Shawarma me kotolet pule të krisur'
    },
    ingredients: { 
      en: ['Chicken cutlet', 'Tortilla', 'Vegetables', 'Sauce'],
      sq: ['Kotolet pule', 'Tortilla', 'Perime', 'Salcë']
    },
    price: '€6.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 9,
    name: { en: 'Open Hamburger', sq: 'Hamburger i hapur' },
    description: { 
      en: 'Open-faced burger served on a plate',
      sq: 'Hamburger i hapur i shërbyer në pjatë'
    },
    ingredients: { 
      en: ['Beef patty', 'Bread slice', 'Lettuce', 'Tomato', 'Cheese'],
      sq: ['Biftek viçi', 'Fetë bukë', 'Marulë', 'Domate', 'Djathë']
    },
    price: '€7.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 10,
    name: { en: 'Sausage Roll', sq: 'Samune me suxhuk' },
    description: { 
      en: 'Fresh roll with Albanian sausage',
      sq: 'Samun i freskët me suxhuk shqiptar'
    },
    ingredients: { 
      en: ['Fresh roll', 'Albanian sausage', 'Onions', 'Peppers'],
      sq: ['Samun i freskët', 'Suxhuk shqiptar', 'Qepë', 'Spec']
    },
    price: '€4.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 11,
    name: { en: 'Chicken Roll', sq: 'Samune me mish pule' },
    description: { 
      en: 'Fresh roll with grilled chicken',
      sq: 'Samun i freskët me mish pule të pjekur'
    },
    ingredients: { 
      en: ['Fresh roll', 'Grilled chicken', 'Lettuce', 'Tomato'],
      sq: ['Samun i freskët', 'Mish pule i pjekur', 'Marulë', 'Domate']
    },
    price: '€5.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 12,
    name: { en: 'Cheese Roll', sq: 'Samune me djathë' },
    description: { 
      en: 'Fresh roll with melted cheese',
      sq: 'Samun i freskët me djathë të shkrirë'
    },
    ingredients: { 
      en: ['Fresh roll', 'Cheese', 'Butter'],
      sq: ['Samun i freskët', 'Djathë', 'Gjalpë']
    },
    price: '€3.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 13,
    name: { en: 'Ham Roll', sq: 'Samune me proshute' },
    description: { 
      en: 'Fresh roll with premium ham',
      sq: 'Samun i freskët me proshutë premium'
    },
    ingredients: { 
      en: ['Fresh roll', 'Ham', 'Cheese', 'Lettuce'],
      sq: ['Samun i freskët', 'Proshutë', 'Djathë', 'Marulë']
    },
    price: '€4.50',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 14,
    name: { en: 'Toast', sq: 'Tost' },
    description: { 
      en: 'Grilled toast with cheese and ham',
      sq: 'Tost i pjekur me djathë dhe proshutë'
    },
    ingredients: { 
      en: ['Toast bread', 'Cheese', 'Ham', 'Butter'],
      sq: ['Bukë tost', 'Djathë', 'Proshutë', 'Gjalpë']
    },
    price: '€4.00',
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=200&fit=crop&auto=format'
  },

  // Kitchen/Main Dishes
  {
    id: 15,
    name: { en: 'Whole Chicken', sq: 'Një pule me vete' },
    description: { 
      en: 'Whole roasted chicken, perfectly seasoned',
      sq: 'Pule e tërë në zgjarë, e erëzuar në përsosmëri'
    },
    ingredients: { 
      en: ['Whole chicken', 'Herbs', 'Spices', 'Oil'],
      sq: ['Pule e tërë', 'Bimë aromatike', 'Erëza', 'Vaj']
    },
    price: '€15.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1548944172-de6c6b3c2b51?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 16,
    name: { en: 'Table Chicken', sq: 'Një pule tavoline' },
    description: { 
      en: 'Chicken prepared for sharing, served family style',
      sq: 'Pule e përgatitur për ndarje, e shërbyer në stil familjar'
    },
    ingredients: { 
      en: ['Chicken', 'Vegetables', 'Rice', 'Sauce'],
      sq: ['Pule', 'Perime', 'Oriz', 'Salcë']
    },
    price: '€18.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1548944172-de6c6b3c2b51?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 17,
    name: { en: 'Half Chicken with Sides', sq: 'Gjysme pule garniture' },
    description: { 
      en: 'Half chicken served with side dishes',
      sq: 'Gjysme pule e shërbyer me garniture'
    },
    ingredients: { 
      en: ['Half chicken', 'Rice', 'Salad', 'Sauce'],
      sq: ['Gjysme pule', 'Oriz', 'Sallatë', 'Salcë']
    },
    price: '€10.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1548944172-de6c6b3c2b51?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 18,
    name: { en: '10 Meatballs (Qebap)', sq: '10 qofte qebap' },
    description: { 
      en: 'Traditional Albanian grilled meatballs',
      sq: 'Qofte tradicionale shqiptare në zgjarë'
    },
    ingredients: { 
      en: ['Ground meat', 'Onions', 'Spices', 'Breadcrumbs'],
      sq: ['Mish i grirë', 'Qepë', 'Erëza', 'Thërrime buke']
    },
    price: '€8.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 19,
    name: { en: '10 Meatballs with Sides', sq: '10 qofte (qebap) me garniture' },
    description: { 
      en: 'Grilled meatballs served with traditional sides',
      sq: 'Qofte në zgjarë të shërbyera me garniture tradicionale'
    },
    ingredients: { 
      en: ['Ground meat', 'Onions', 'Rice', 'Salad', 'Bread'],
      sq: ['Mish i grirë', 'Qepë', 'Oriz', 'Sallatë', 'Bukë']
    },
    price: '€12.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 20,
    name: { en: '5 Meatballs with Sides', sq: '5 qofte garniture' },
    description: { 
      en: 'Five grilled meatballs with side dishes',
      sq: 'Pesë qofte në zgjarë me garniture'
    },
    ingredients: { 
      en: ['Ground meat', 'Rice', 'Vegetables', 'Bread'],
      sq: ['Mish i grirë', 'Oriz', 'Perime', 'Bukë']
    },
    price: '€7.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 21,
    name: { en: 'Lamb Chop with Sides', sq: 'Berxolle me garniture' },
    description: { 
      en: 'Tender lamb chop grilled to perfection with sides',
      sq: 'Berxollë dashi e brishtë në zgjarë me garniture'
    },
    ingredients: { 
      en: ['Lamb chop', 'Rice', 'Vegetables', 'Sauce'],
      sq: ['Berxollë dashi', 'Oriz', 'Perime', 'Salcë']
    },
    price: '€14.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 22,
    name: { en: 'Chicken Fillet', sq: 'Fileto pule' },
    description: { 
      en: 'Grilled chicken breast fillet',
      sq: 'Fileto gjoksi pule në zgjarë'
    },
    ingredients: { 
      en: ['Chicken breast', 'Herbs', 'Olive oil', 'Lemon'],
      sq: ['Gjoks pule', 'Bimë aromatike', 'Vaj ulliri', 'Limon']
    },
    price: '€9.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1548944172-de6c6b3c2b51?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 23,
    name: { en: 'Grilled Fish', sq: 'Peshk zgare' },
    description: { 
      en: 'Fresh fish grilled with herbs and lemon',
      sq: 'Peshk i freskët në zgjarë me erëza dhe limon'
    },
    ingredients: { 
      en: ['Fresh fish', 'Lemon', 'Herbs', 'Olive oil'],
      sq: ['Peshk i freskët', 'Limon', 'Erëza', 'Vaj ulliri']
    },
    price: '€12.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 24,
    name: { en: 'Omelet', sq: 'Omlet' },
    description: { 
      en: 'Fluffy omelet with your choice of fillings',
      sq: 'Omlet i butë me mbushjen që zgjidhni'
    },
    ingredients: { 
      en: ['Eggs', 'Milk', 'Cheese', 'Herbs', 'Butter'],
      sq: ['Vezë', 'Qumësht', 'Djathë', 'Erëza', 'Gjalpë']
    },
    price: '€5.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 25,
    name: { en: 'Salad', sq: 'Sallatë' },
    description: { 
      en: 'Fresh mixed salad with seasonal vegetables',
      sq: 'Sallatë e përzier me perime sezonale'
    },
    ingredients: { 
      en: ['Lettuce', 'Tomatoes', 'Cucumber', 'Onions', 'Olive oil'],
      sq: ['Marulë', 'Domate', 'Kastravec', 'Qepë', 'Vaj ulliri']
    },
    price: '€4.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 26,
    name: { en: 'French Fries', sq: 'Patate' },
    description: { 
      en: 'Golden crispy french fries',
      sq: 'Patate të skuqura të argjendta'
    },
    ingredients: { 
      en: ['Potatoes', 'Oil', 'Salt'],
      sq: ['Patate', 'Vaj', 'Kripë']
    },
    price: '€3.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 27,
    name: { en: 'Yogurt Sauce', sq: 'Salcë kosi' },
    description: { 
      en: 'Traditional Albanian yogurt sauce',
      sq: 'Salcë tradicionale shqiptare me kos'
    },
    ingredients: { 
      en: ['Yogurt', 'Garlic', 'Salt', 'Herbs'],
      sq: ['Kos', 'Hudër', 'Kripë', 'Erëza']
    },
    price: '€2.00',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop&auto=format'
  },

  // Pizza
  {
    id: 28,
    name: { en: 'Margherita', sq: 'Margherita' },
    description: { 
      en: 'Classic pizza with tomato sauce, mozzarella and basil',
      sq: 'Pica klasike me salcë domatesh, mozzarella dhe bozilok'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil', 'Olive oil'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Mozzarella', 'Bozilok', 'Vaj ulliri']
    },
    price: '€8.00',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 29,
    name: { en: 'Ham Pizza', sq: 'Proshute' },
    description: { 
      en: 'Pizza topped with ham and mozzarella cheese',
      sq: 'Pica me proshutë dhe djathë mozzarella'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Ham', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Proshutë', 'Mozzarella']
    },
    price: '€10.00',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 30,
    name: { en: 'Mushroom Pizza', sq: 'Kerpudha' },
    description: { 
      en: 'Pizza with fresh mushrooms and cheese',
      sq: 'Pica me kërpudha të freskëta dhe djathë'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Mushrooms', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Kërpudha', 'Mozzarella']
    },
    price: '€9.00',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 31,
    name: { en: 'Capricciosa', sq: 'Kapricoza' },
    description: { 
      en: 'Pizza with ham, mushrooms, artichokes and olives',
      sq: 'Pica me proshutë, kërpudha, angullore dhe ullinj'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Ham', 'Mushrooms', 'Artichokes', 'Olives'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Proshutë', 'Kërpudha', 'Angullore', 'Ullinj']
    },
    price: '€12.00',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 32,
    name: { en: 'Four Seasons', sq: '4 Stinët' },
    description: { 
      en: 'Pizza divided into four sections with different toppings',
      sq: 'Pica e ndarë në katër seksione me mbushje të ndryshme'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Ham', 'Mushrooms', 'Peppers', 'Olives'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Proshutë', 'Kërpudha', 'Spec', 'Ullinj']
    },
    price: '€13.00',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 33,
    name: { en: 'Tuna Pizza', sq: 'Ton' },
    description: { 
      en: 'Pizza topped with tuna and onions',
      sq: 'Pica me ton dhe qepë'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Tuna', 'Onions', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Ton', 'Qepë', 'Mozzarella']
    },
    price: '€11.00',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 34,
    name: { en: 'Sausage Pizza', sq: 'Suxhuk' },
    description: { 
      en: 'Pizza with Albanian sausage and cheese',
      sq: 'Pica me suxhuk shqiptar dhe djathë'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Albanian sausage', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Suxhuk shqiptar', 'Mozzarella']
    },
    price: '€10.50',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },

  // Hot Drinks
  {
    id: 35,
    name: { en: 'Coffee', sq: 'Kafe' },
    description: { 
      en: 'Traditional Albanian coffee',
      sq: 'Kafe tradicionale shqiptare'
    },
    ingredients: { 
      en: ['Coffee beans', 'Water', 'Sugar (optional)'],
      sq: ['Kokrra kafeje', 'Ujë', 'Sheqer (opsional)']
    },
    price: '€1.00',
    category: 'hotdrinks',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 36,
    name: { en: 'Macchiato', sq: 'Makiato' },
    description: { 
      en: 'Espresso with a dollop of steamed milk',
      sq: 'Espresso me një pikë qumësht të ngrohtë'
    },
    ingredients: { 
      en: ['Espresso', 'Steamed milk'],
      sq: ['Espresso', 'Qumësht i ngrohtë']
    },
    price: '€1.50',
    category: 'hotdrinks',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 37,
    name: { en: 'Large Macchiato', sq: 'Makiato e madhe' },
    description: { 
      en: 'Large size macchiato with extra milk',
      sq: 'Makiato e madhe me qumësht shtesë'
    },
    ingredients: { 
      en: ['Double espresso', 'Extra steamed milk'],
      sq: ['Espresso i dyfishtë', 'Qumësht shtesë i ngrohtë']
    },
    price: '€2.00',
    category: 'hotdrinks',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 38,
    name: { en: 'Tea', sq: 'Çaj' },
    description: { 
      en: 'Hot herbal or black tea',
      sq: 'Çaj i ngrohtë bimor ose i zi'
    },
    ingredients: { 
      en: ['Tea leaves', 'Hot water', 'Lemon (optional)'],
      sq: ['Gjethe çaji', 'Ujë i ngrohtë', 'Limon (opsional)']
    },
    price: '€1.00',
    category: 'hotdrinks',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&auto=format'
  },

  // Cold Drinks
  {
    id: 39,
    name: { en: 'Coca Cola', sq: 'Coca Cola' },
    description: { 
      en: 'Classic Coca Cola soft drink',
      sq: 'Pije freskuese klasike Coca Cola'
    },
    ingredients: { 
      en: ['Carbonated water', 'Sugar', 'Cola flavoring'],
      sq: ['Ujë me gaz', 'Sheqer', 'Aroma kole']
    },
    price: '€2.00',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5b1c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 40,
    name: { en: 'Fanta', sq: 'Fanta' },
    description: { 
      en: 'Orange flavored carbonated drink',
      sq: 'Pije me gaz me shije portokalli'
    },
    ingredients: { 
      en: ['Carbonated water', 'Orange flavoring', 'Sugar'],
      sq: ['Ujë me gaz', 'Aroma portokalli', 'Sheqer']
    },
    price: '€2.00',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5b1c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 41,
    name: { en: 'Sprite', sq: 'Sprite' },
    description: { 
      en: 'Lemon-lime flavored soft drink',
      sq: 'Pije freskuese me shije limoni-lime'
    },
    ingredients: { 
      en: ['Carbonated water', 'Lemon-lime flavoring', 'Sugar'],
      sq: ['Ujë me gaz', 'Aroma limoni-lime', 'Sheqer']
    },
    price: '€2.00',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5b1c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 42,
    name: { en: 'Ivi', sq: 'Ivi' },
    description: { 
      en: 'Albanian fruit juice drink',
      sq: 'Pije shqiptare me lëng frutash'
    },
    ingredients: { 
      en: ['Fruit juice', 'Water', 'Sugar'],
      sq: ['Lëng frutash', 'Ujë', 'Sheqer']
    },
    price: '€1.50',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 43,
    name: { en: 'Sola', sq: 'Sola' },
    description: { 
      en: 'Albanian carbonated soft drink',
      sq: 'Pije freskuese shqiptare me gaz'
    },
    ingredients: { 
      en: ['Carbonated water', 'Flavoring', 'Sugar'],
      sq: ['Ujë me gaz', 'Aroma', 'Sheqer']
    },
    price: '€1.50',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5b1c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 44,
    name: { en: 'B52', sq: 'B52' },
    description: { 
      en: 'Energy drink with caffeine',
      sq: 'Pije energjike me kafeinë'
    },
    ingredients: { 
      en: ['Caffeine', 'Taurine', 'Vitamins', 'Sugar'],
      sq: ['Kafeinë', 'Taurinë', 'Vitamina', 'Sheqer']
    },
    price: '€2.50',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5b1c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 45,
    name: { en: 'Bravo', sq: 'Bravo' },
    description: { 
      en: 'Fruit flavored juice drink',
      sq: 'Pije me lëng frutash'
    },
    ingredients: { 
      en: ['Fruit juice', 'Water', 'Vitamins'],
      sq: ['Lëng frutash', 'Ujë', 'Vitamina']
    },
    price: '€1.80',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 46,
    name: { en: 'Red Bull', sq: 'Red Bull' },
    description: { 
      en: 'Premium energy drink with wings',
      sq: 'Pije energjike premium që të jep krahë'
    },
    ingredients: { 
      en: ['Caffeine', 'Taurine', 'B-vitamins', 'Sugar'],
      sq: ['Kafeinë', 'Taurinë', 'Vitamina B', 'Sheqer']
    },
    price: '€3.00',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5b1c?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 47,
    name: { en: 'Water', sq: 'Ujë' },
    description: { 
      en: 'Pure bottled water',
      sq: 'Ujë i pastër në shishe'
    },
    ingredients: { 
      en: ['Pure water'],
      sq: ['Ujë i pastër']
    },
    price: '€1.00',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 48,
    name: { en: 'Buttermilk', sq: 'Dhallë' },
    description: { 
      en: 'Traditional Albanian buttermilk drink',
      sq: 'Pije tradicionale shqiptare dhallë'
    },
    ingredients: { 
      en: ['Buttermilk', 'Salt', 'Water'],
      sq: ['Dhallë', 'Kripë', 'Ujë']
    },
    price: '€1.50',
    category: 'colddrinks',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop&auto=format'
  },

  // Alcoholic Drinks
  {
    id: 49,
    name: { en: 'Raki', sq: 'Raki' },
    description: { 
      en: 'Traditional Albanian grape brandy',
      sq: 'Raki tradicional shqiptar nga rrushi'
    },
    ingredients: { 
      en: ['Distilled grapes', 'Water'],
      sq: ['Rrush i distiluar', 'Ujë']
    },
    price: '€3.00',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 50,
    name: { en: 'Korca Small', sq: 'Korca e vogël' },
    description: { 
      en: 'Small bottle of Korca beer',
      sq: 'Shishe e vogël birre Korca'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: '€2.00',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 51,
    name: { en: 'Korca Large', sq: 'Korca e madhe' },
    description: { 
      en: 'Large bottle of Korca beer',
      sq: 'Shishe e madhe birre Korca'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: '€3.00',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 52,
    name: { en: 'Peja Beer', sq: 'Peja' },
    description: { 
      en: 'Premium Albanian Peja beer',
      sq: 'Birre premium shqiptare Peja'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: '€2.50',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 53,
    name: { en: 'Peroni', sq: 'Peroni' },
    description: { 
      en: 'Italian premium lager beer',
      sq: 'Birre premium italiane Peroni'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Corn', 'Hops'],
      sq: ['Ujë', 'Elb i mbitur', 'Misër', 'Lulushtrydhe']
    },
    price: '€3.00',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 54,
    name: { en: 'Tuborg', sq: 'Tuborg' },
    description: { 
      en: 'Danish pilsner beer',
      sq: 'Birre daneze Tuborg'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: '€2.80',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 55,
    name: { en: 'Heineken', sq: 'Heineken' },
    description: { 
      en: 'Dutch premium lager beer',
      sq: 'Birre premium holandeze Heineken'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: '€3.50',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 56,
    name: { en: 'Bavaria 0% Alcohol', sq: 'Bavaria 0% alkol' },
    description: { 
      en: 'Non-alcoholic beer with full taste',
      sq: 'Birre pa alkol me shije të plotë'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Natural flavoring'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Aroma natyrore']
    },
    price: '€2.00',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 57,
    name: { en: '1 Glass of Wine', sq: '1 gotë verë' },
    description: { 
      en: 'Single glass of house wine',
      sq: 'Një gotë verë shtëpie'
    },
    ingredients: { 
      en: ['Red or white wine'],
      sq: ['Verë e kuqe ose e bardhë']
    },
    price: '€2.50',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 58,
    name: { en: '1 Liter of Wine', sq: '1 liter verë' },
    description: { 
      en: 'One liter carafe of house wine',
      sq: 'Një litër verë shtëpie në karafë'
    },
    ingredients: { 
      en: ['Red or white wine'],
      sq: ['Verë e kuqe ose e bardhë']
    },
    price: '€12.00',
    category: 'alcohol',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=200&fit=crop&auto=format'
  }
];

const categories = ['all', 'fastfood', 'kitchen', 'pizza', 'hotdrinks', 'colddrinks', 'alcohol'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language, t } = useLanguage();

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu">
      <motion.div 
        className="menu-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{t('menuTitle')}</h1>
      </motion.div>

      <motion.div 
        className="category-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === 'all' ? t('categories') : t(category)}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="menu-grid"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="menu-item"
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              layout: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="menu-item-image">
              <motion.img
                src={item.image}
                alt={item.name[language]}
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                whileHover={{ scale: 1.1 }}
              />
            </div>
            
            <div className="menu-item-content">
              <h3>{item.name[language]}</h3>
              <p className="description">{item.description[language]}</p>
              
              <div className="ingredients">
                <strong>{t('ingredients')}:</strong>
                <ul>
                  {item.ingredients[language].map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div className="price">{item.price}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;