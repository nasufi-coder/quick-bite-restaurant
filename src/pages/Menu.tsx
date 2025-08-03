import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

interface MenuItem {
  id: number;
  name: { en: string; sq: string };
  description: { en: string; sq: string };
  ingredients: { en: string[]; sq: string[] };
  price: { en: string; sq: string };
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  // Fast Food
  {
    id: 1,
    name: { en: 'Sufllaqe', sq: 'Sufllaqe' },
    description: { 
      en: 'Souvlaki is a traditional Greek food commonly made of chicken, shaped into a kebab on a skewer.',
      sq: 'Suvlaki është një ushqim tradicional grek që zakonisht përgatitet me mish pule, i cili formohet në formë kebab-i në hell.'
    },
    ingredients: { 
      en: ['Pita bread', 'Ground meat', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Xaxiki', 'Spice'],
      sq: ['Pite', 'Mish i grirë', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Xaxiki', 'Erëza']
    },
    price: {
      en: '€3.00',
      sq: '300 Lek'
    },
    category: 'fastfood',
    image: 'https://agroweb.org/wp-content/uploads/2018/09/sufllaqe902.jpg'
  },
  {
    id: 2,
    name: { en: 'Doner', sq: 'Doner' },
    description: { 
      en: 'Turkish-style rotating meat served in pita bread',
      sq: 'Mish në stil turk i pjekur në rrotull, i shërbyer në bukë pite'
    },
    ingredients: { 
      en: ['Lamb/Chicken meat', 'Pita bread', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Xaxiki', 'Spice'],
      sq: ['Mish dashi/pule', 'Bukë pite', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Xaxiki', 'Erëza']
    },
    price: {
      en: '€3.00',
      sq: '300 Lek'
    },
    category: 'fastfood',
    image: 'https://www.hamburg.com/resource/image/1022230/landscape_ratio16x9/1240/697/bdea4a883c31d6174167b987f85e03dd/FC88BD5D6564CA345F579EA6A3B5B25B/doener-pic.jpg'
  },
  {
    id: 3,
    name: { en: 'Shawarma', sq: 'Shawarma' },
    description: { 
      en: 'Middle Eastern wrap with spiced meat and fresh vegetables',
      sq: 'Wrap lindor me mish të erëzuar dhe perime të freskëta'
    },
    ingredients: { 
      en: ['Spiced meat', 'Tortilla wrap', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Xaxiki', 'Spice'],
      sq: ['Mish i erëzuar', 'Tortilla', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Xaxiki', 'Erëza']
    },
    price: {
      en: '€4.50',
      sq: '450 Lek'
    },
    category: 'fastfood',
    image: 'https://www.halalorigins.com/media/origins-of-the-infamous-chicken-shawarma1.jpg'
  },
  {
    id: 4,
    name: { en: 'Hot Dog', sq: 'Hot-dog' },
    description: { 
      en: 'Classic sausage with your choice of fillings',
      sq: 'Sallam klasik me mbushjen që zgjidhni'
    },
    ingredients: { 
      en: ['Sausage', 'Hot dog bun', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Xaxiki', 'Spice'],
      sq: ['Sallam', 'Bukë hot-dog', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Xaxiki', 'Erëza']
    },
    price: {
      en: '€3.00',
      sq: '300 Lek'
    },
    category: 'fastfood',
    image: 'https://www.seriouseats.com/thmb/Ux0hUsEXRt7Mhp8v4A5bIENNMXI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__07__20130716-hot-dog-bun-taste-test-8-2ae9024fd3d04bca9937bb79f5862e9a.jpg'
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
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'fastfood',
    image: 'https://www.corriecooks.com/wp-content/uploads/2023/08/Deli-Sandwiches.jpg'
  },
  {
    id: 6,
    name: { en: 'Hamburger', sq: 'Hamburger' },
    description: { 
      en: 'Classic beef burger with your choice of fillings',
      sq: 'Hamburger klasik me mbushjen që zgjidhni'
    },
    ingredients: { 
      en: ['Beef patty', 'Bun', 'Lettuce', 'Tomato', 'Onion', 'Sauce'],
      sq: ['Biftek viçi', 'Bukë', 'Marulë', 'Domate', 'Qepë', 'Salcë']
    },
    price: {
      en: '€3.00',
      sq: '300 Lek'
    },
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
    price: {
      en: '€3.50',
      sq: '350 Lek'
    },
    category: 'fastfood',
    image: 'https://www.savoryflow.com/wp-content/uploads/2025/05/Chicken-Nuggets-and-Fries.webp'
  },
  {
    id: 8,
    name: { en: 'Shawarma with Chicken Cutlet', sq: 'Shawarma me kotolet pule' },
    description: { 
      en: 'Shawarma wrap with crispy chicken cutlet with your choice of fillings',
      sq: 'Shawarma me kotolet pule të krisur me mbushjen që zgjidhni'
    },
    ingredients: { 
      en: ['Chicken cutlet', 'Tortilla', 'Vegetables', 'Sauce'],
      sq: ['Kotolet pule', 'Tortilla', 'Perime', 'Salcë']
    },
    price: {
      en: '€5.00',
      sq: '500 Lek'
    },
    category: 'fastfood',
    image: 'https://pekis.net/sites/default/files/styles/325x325/public/2025-04/Shawarma.webp?itok=VFvT5lPE'
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
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'fastfood',
    image: 'https://lirp.cdn-website.com/fff642e4/dms3rep/multi/opt/Greensboro-Burgers-1-640w.webp'
  },
  {
    id: 10,
    name: { en: 'Open Sufllaqe', sq: 'Sufllaqe i hapur' },
    description: { 
      en: 'Open-faced Sufllaqe served on a plate',
      sq: 'Sufllaqe i hapur i shërbyer në pjatë'
    },
    ingredients: { 
      en: ['Beef patty', 'Bread slice', 'Lettuce', 'Tomato', 'Cheese'],
      sq: ['Biftek viçi', 'Fetë bukë', 'Marulë', 'Domate', 'Djathë']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'fastfood',
    image: 'https://agroweb.org/wp-content/uploads/2018/09/sufllaqe902.jpg'
  },
  {
    id: 11,
    name: { en: 'Open Doner', sq: 'Doner i hapur' },
    description: { 
      en: 'Open-faced Doner served on a plate',
      sq: 'Doner i hapur i shërbyer në pjatë'
    },
    ingredients: { 
      en: ['Beef patty', 'Bread slice', 'Lettuce', 'Tomato', 'Cheese'],
      sq: ['Biftek viçi', 'Fetë bukë', 'Marulë', 'Domate', 'Djathë']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'fastfood',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZpNWt4Z7PzKlQ2XpNrcL_vCHyyZ9UbG0QCZ24_WcPJCGK3mPwKjdQxFSV-VzP7zWKFvvtDmsFG9WyZwFdxSELPFTD18qWCYRg9FFAROVxOJCu2aP3DpX5kVhyuctNpCpCFkB_ETUHzxhW/s1600/C8EEC23B-22E8-4C98-B073-C54478A478DF.jpeg'
  },
  {
    id: 12,
    name: { en: 'Sausage Roll', sq: 'Samune me suxhuk' },
    description: { 
      en: 'Fresh roll with Albanian sausage',
      sq: 'Samun i freskët me suxhuk shqiptar'
    },
    ingredients: { 
      en: ['Fresh roll', 'Albanian sausage', 'Onions', 'Peppers'],
      sq: ['Samun i freskët', 'Suxhuk shqiptar', 'Qepë', 'Spec']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'fastfood',
    image: 'https://www.takeaway.com/bg/foodwiki/uploads/sites/9/2019/09/calzone_2-1080x960.jpg'
  },
  {
    id: 13,
    name: { en: 'Chicken Roll', sq: 'Samune me mish pule' },
    description: { 
      en: 'Fresh roll with grilled chicken',
      sq: 'Samun i freskët me mish pule të pjekur'
    },
    ingredients: { 
      en: ['Fresh roll', 'Grilled chicken', 'Lettuce', 'Tomato'],
      sq: ['Samun i freskët', 'Mish pule i pjekur', 'Marulë', 'Domate']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'fastfood',
    image: 'https://www.takeaway.com/bg/foodwiki/uploads/sites/9/2019/09/calzone_2-1080x960.jpg'
  },
  {
    id: 14,
    name: { en: 'Cheese Roll', sq: 'Samune me djathë' },
    description: { 
      en: 'Fresh roll with melted cheese',
      sq: 'Samun i freskët me djathë të shkrirë'
    },
    ingredients: { 
      en: ['Fresh roll', 'Cheese', 'Butter'],
      sq: ['Samun i freskët', 'Djathë', 'Gjalpë']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'fastfood',
    image: 'https://www.takeaway.com/bg/foodwiki/uploads/sites/9/2019/09/calzone_2-1080x960.jpg'
  },
  {
    id: 15,
    name: { en: 'Ham Roll', sq: 'Samune me proshute' },
    description: { 
      en: 'Fresh roll with premium ham',
      sq: 'Samun i freskët me proshutë premium'
    },
    ingredients: { 
      en: ['Fresh roll', 'Ham', 'Cheese', 'Lettuce'],
      sq: ['Samun i freskët', 'Proshutë', 'Djathë', 'Marulë']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'fastfood',
    image: 'https://www.takeaway.com/bg/foodwiki/uploads/sites/9/2019/09/calzone_2-1080x960.jpg'
  },
  {
    id: 16,
    name: { en: 'Toast', sq: 'Tost' },
    description: { 
      en: 'Grilled toast with cheese and ham',
      sq: 'Tost i pjekur me djathë dhe proshutë'
    },
    ingredients: { 
      en: ['Toast bread', 'Cheese', 'Ham', 'Butter'],
      sq: ['Bukë tost', 'Djathë', 'Proshutë', 'Gjalpë']
    },
    price: {
      en: '€1.50',
      sq: '150 Lek'
    },
    category: 'fastfood',
    image: 'https://www.dillons.com/content/v2/binary/image/imageset/french_toasted-ham_sandwiches--28_french-toasted-ham-sandwiches_p12-recipe-reshoots_p_23-tkc-0188_b-copy.jpg'
  },

  // Kitchen/Main Dishes
  {
    id: 17,
    name: { en: 'Whole Chicken', sq: 'Një pule me vete' },
    description: { 
      en: 'Whole roasted chicken, perfectly seasoned',
      sq: 'Pule e tërë në zgjarë, e erëzuar në përsosmëri'
    },
    ingredients: { 
      en: ['Whole chicken', 'Herbs', 'Spices', 'Oil'],
      sq: ['Pule e tërë', 'Bimë aromatike', 'Erëza', 'Vaj']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'kitchen',
    image: 'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/16:9/w_5803,h_3264,c_limit/RoastChicken_RECIPE_080420_37993.jpg'
  },
  {
    id: 18,
    name: { en: 'Table Chicken', sq: 'Një pule tavoline' },
    description: { 
      en: 'Chicken prepared for sharing, served family style',
      sq: 'Pule e përgatitur për ndarje, e shërbyer në stil familjar'
    },
    ingredients: { 
      en: ['Chicken', 'Vegetables', 'Rice', 'Sauce'],
      sq: ['Pule', 'Perime', 'Oriz', 'Salcë']
    },
    price: {
      en: '€8.00',
      sq: '800 Lek'
    },
    category: 'kitchen',
    image: 'https://img.freepik.com/premium-photo/half-roasted-chicken-piri-piri-with-french-fries-top-view_266870-14673.jpg'
  },
  {
    id: 19,
    name: { en: 'Half Chicken with Sides', sq: 'Gjysme pule garniture' },
    description: { 
      en: 'Half chicken served with side dishes',
      sq: 'Gjysme pule e shërbyer me garniture'
    },
    ingredients: { 
      en: ['Half chicken', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Sauce', 'Spice'],
      sq: ['Gjysme pule', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Salcë', 'Erëza']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'kitchen',
    image: 'https://scontent.ftia6-1.fna.fbcdn.net/v/t1.6435-9/164007315_289523769252827_6934326517739001319_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=3qGdcIVeEFQQ7kNvwGQaGod&_nc_oc=AdnmLnDc6jPD9wgqfYSKZYYOasOkK0zES6T6BollJPNjtMep-3-ImOjvm_bC0Mrfe2Y&_nc_zt=23&_nc_ht=scontent.ftia6-1.fna&_nc_gid=JBzjq1_c-jBUmDtZaxE_EQ&oh=00_AfSWmWX3TBqtCs19cM8L6ig1ujPwN0fMUMPEuyhuFtB2xw&oe=68B440D8'
  },
  {
    id: 20,
    name: { en: '10 Meatballs (Qebap)', sq: '10 qofte qebap' },
    description: { 
      en: 'Traditional Albanian grilled meatballs',
      sq: 'Qofte tradicionale shqiptare në zgjarë'
    },
    ingredients: { 
      en: ['Ground meat', 'Onions', 'Spices', 'Breadcrumbs'],
      sq: ['Mish i grirë', 'Qepë', 'Erëza', 'Thërrime buke']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'kitchen',
    image: 'https://static01.nyt.com/images/2025/05/29/multimedia/SL-Adana-Meatballs-platter-vhcf/SL-Adana-Meatballs-platter-vhcf-threeByTwoMediumAt2X-v2.jpg'
  },
  {
    id: 21,
    name: { en: '10 Meatballs with Sides', sq: '10 qofte (qebap) me garniture' },
    description: { 
      en: 'Grilled meatballs served with traditional sides',
      sq: 'Qofte në zgjarë të shërbyera me garniture tradicionale'
    },
    ingredients: { 
      en: ['Ground meat', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Sauce', 'Spice'],
      sq: ['Mish i grirë', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Salcë', 'Erëza']
    },
    price: {
      en: '€8.00',
      sq: '800 Lek'
    },
    category: 'kitchen',
    image: 'https://souvlakiforthesoul.com/wp-content/uploads/2021/03/keftedes-Greek-meatballs-featured.jpg'
  },
  {
    id: 22,
    name: { en: '5 Meatballs with Sides', sq: '5 qofte garniture' },
    description: { 
      en: 'Five grilled meatballs with side dishes',
      sq: 'Pesë qofte në zgjarë me garniture'
    },
    ingredients: { 
      en: ['Ground meat', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Sauce', 'Spice'],
      sq: ['Mish i grirë', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Salcë', 'Erëza']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'kitchen',
    image: 'https://souvlakiforthesoul.com/wp-content/uploads/2021/03/keftedes-Greek-meatballs-featured.jpg'
  },
  {
    id: 23,
    name: { en: 'Lamb Chop with Sides', sq: 'Berxolle me garniture' },
    description: { 
      en: 'Tender lamb chop grilled to perfection with sides',
      sq: 'Berxollë dashi e brishtë në zgjarë me garniture'
    },
    ingredients: { 
      en: ['Lamb chop', 'Onion', 'Potato', 'Sour sauce', 'Cucumber', 'Tomato', 'Spices', 'Sauce', 'Spice'],
      sq: ['Berxollë dashi', 'Qepë', 'Patate', 'Salc kosi', 'Kastravec', 'Domate', 'Speca', 'Salcë', 'Erëza']
    },
    price: {
      en: '€13.00',
      sq: '1300 Lek'
    },
    category: 'kitchen',
    image: 'https://img.freepik.com/premium-photo/lamb-chop-with-french-fries-served-dish-side-view-black-background-fast-food_689047-1888.jpg'
  },
  {
    id: 24,
    name: { en: 'Chicken Fillet', sq: 'Fileto pule' },
    description: { 
      en: 'Grilled chicken breast fillet',
      sq: 'Fileto gjoksi pule në zgjarë'
    },
    ingredients: { 
      en: ['Chicken breast', 'Herbs', 'Olive oil', 'Lemon'],
      sq: ['Gjoks pule', 'Bimë aromatike', 'Vaj ulliri', 'Limon']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'kitchen',
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-06-grilled-chicken-breast%2Fgrilled-chicken-breast-057'
  },
  {
    id: 25,
    name: { en: 'Grilled Fish', sq: 'Peshk zgare' },
    description: { 
      en: 'Fresh fish grilled with herbs and lemon',
      sq: 'Peshk i freskët në zgjarë me erëza dhe limon'
    },
    ingredients: { 
      en: ['Fresh fish', 'Lemon', 'Herbs', 'Olive oil'],
      sq: ['Peshk i freskët', 'Limon', 'Erëza', 'Vaj ulliri']
    },
    price: {
      en: '€13.00',
      sq: '1300 Lek'
    },
    category: 'kitchen',
    image: 'https://www.foodandwine.com/thmb/Sj_GFG_ln6ls7HGIoSiqb67-YRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lemon-Stuffed-Grilled-Branzino-FT-RECIPE0324-6d0a73fe0ad743309605df37066a9191.jpg'
  },
  {
    id: 26,
    name: { en: 'Omelet', sq: 'Omlet' },
    description: { 
      en: 'Fluffy omelet with your choice of fillings',
      sq: 'Omlet i butë me mbushjen që zgjidhni'
    },
    ingredients: { 
      en: ['Eggs', 'Milk', 'Cheese', 'Herbs', 'Butter'],
      sq: ['Vezë', 'Qumësht', 'Djathë', 'Erëza', 'Gjalpë']
    },
    price: {
      en: '€3.00',
      sq: '300 Lek'
    },
    category: 'kitchen',
    image: 'https://msmarket.coop/wp-content/uploads/omlete.jpg'
  },
  {
    id: 27,
    name: { en: 'Salad', sq: 'Sallatë' },
    description: { 
      en: 'Fresh mixed salad with seasonal vegetables',
      sq: 'Sallatë e përzier me perime sezonale'
    },
    ingredients: { 
      en: ['Lettuce', 'Tomatoes', 'Cucumber', 'Onions', 'Olive oil'],
      sq: ['Marulë', 'Domate', 'Kastravec', 'Qepë', 'Vaj ulliri']
    },
    price: {
      en: '€5.00',
      sq: '500 Lek'
    },
    category: 'kitchen',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/04/panera-southwest-caesar-salad.jpg?quality=82&strip=1'
  },
  {
    id: 28,
    name: { en: 'French Fries', sq: 'Patate' },
    description: { 
      en: 'Golden crispy french fries',
      sq: 'Patate të skuqura të argjendta'
    },
    ingredients: { 
      en: ['Potatoes', 'Oil', 'Salt'],
      sq: ['Patate', 'Vaj', 'Kripë']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'kitchen',
    image: 'https://images.squarespace-cdn.com/content/v1/5e3c4a2dede14863060c491e/1585533603561-ESYN4H8M1706X22VN06Z/fries.jpg'
  },
  {
    id: 29,
    name: { en: 'Yogurt Sauce', sq: 'Salcë kosi' },
    description: { 
      en: 'Traditional Albanian yogurt sauce',
      sq: 'Salcë tradicionale shqiptare me kos'
    },
    ingredients: { 
      en: ['Yogurt', 'Garlic', 'Salt', 'Herbs'],
      sq: ['Kos', 'Hudër', 'Kripë', 'Erëza']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'kitchen',
    image: 'https://i.ytimg.com/vi/2L6sNBI9uHg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCn4fHhVwQQWwrQZeja-xuAudAxCw'
  },

  // Pizza
  {
    id: 30,
    name: { en: 'Margherita', sq: 'Margarita' },
    description: { 
      en: 'Classic pizza with tomato sauce, mozzarella and basil',
      sq: 'Pica klasike me salcë domatesh, mozzarella dhe bozilok'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil', 'Olive oil'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Mozzarella', 'Bozilok', 'Vaj ulliri']
    },
    price: {
      en: '€5.00',
      sq: '500 Lek'
    },
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: 31,
    name: { en: 'Ham Pizza', sq: 'Proshute' },
    description: { 
      en: 'Pizza topped with ham and mozzarella cheese',
      sq: 'Pica me proshutë dhe djathë mozzarella'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Ham', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Proshutë', 'Mozzarella']
    },
    price: {
      en: '€6.00',
      sq: '600 Lek'
    },
    category: 'pizza',
    image: 'https://static.toiimg.com/thumb/61793317.cms?width=1200&height=900'
  },
  {
    id: 32,
    name: { en: 'Mushroom Pizza', sq: 'Kerpudha' },
    description: { 
      en: 'Pizza with fresh mushrooms and cheese',
      sq: 'Pica me kërpudha të freskëta dhe djathë'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Mushrooms', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Kërpudha', 'Mozzarella']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'pizza',
    image: 'https://www.savingdessert.com/wp-content/uploads/2024/05/Mushroom-Pizza-13.jpg'
  },
  {
    id: 33,
    name: { en: 'Capricciosa', sq: 'Kapricoza' },
    description: { 
      en: 'Pizza with ham, mushrooms, artichokes and olives',
      sq: 'Pica me proshutë, kërpudha, angullore dhe ullinj'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Ham', 'Mushrooms', 'Artichokes', 'Olives'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Proshutë', 'Kërpudha', 'Angullore', 'Ullinj']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'pizza',
    image: 'https://cdn.tasteatlas.com/images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg'
  },
  {
    id: 34,
    name: { en: 'Four Seasons', sq: '4 Stinët' },
    description: { 
      en: 'Pizza divided into four sections with different toppings',
      sq: 'Pica e ndarë në katër seksione me mbushje të ndryshme'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Ham', 'Mushrooms', 'Peppers', 'Olives'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Proshutë', 'Kërpudha', 'Spec', 'Ullinj']
    },
    price: {
      en: '€8.00',
      sq: '800 Lek'
    },
    category: 'pizza',
    image: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/recipe/202512/0003/img493l.jpg'
  },
  {
    id: 35,
    name: { en: 'Tuna Pizza', sq: 'Ton' },
    description: { 
      en: 'Pizza topped with tuna and onions',
      sq: 'Pica me ton dhe qepë'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Tuna', 'Onions', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Ton', 'Qepë', 'Mozzarella']
    },
    price: {
      en: '€8.00',
      sq: '800 Lek'
    },
    category: 'pizza',
    image: 'https://skinnyspatula.com/wp-content/uploads/2019/12/Tuna-Pizza-with-Red-Onion-and-Black-Olives4.jpg'
  },
  {
    id: 36,
    name: { en: 'Sausage Pizza', sq: 'Suxhuk' },
    description: { 
      en: 'Pizza with Albanian sausage and cheese',
      sq: 'Pica me suxhuk shqiptar dhe djathë'
    },
    ingredients: { 
      en: ['Pizza dough', 'Tomato sauce', 'Albanian sausage', 'Mozzarella'],
      sq: ['Brumë pice', 'Salcë domatesh', 'Suxhuk shqiptar', 'Mozzarella']
    },
    price: {
      en: '€9.00',
      sq: '900 Lek'
    },
    category: 'pizza',
    image: 'https://cookingwithcarbs.com/wp-content/uploads/2021/06/spicy-sausage-pizza-final8-min.jpg'
  },

  // Hot Drinks
  {
    id: 37,
    name: { en: 'Coffee', sq: 'Kafe' },
    description: { 
      en: 'Traditional Albanian coffee',
      sq: 'Kafe tradicionale shqiptare'
    },
    ingredients: { 
      en: ['Coffee beans', 'Water', 'Sugar (optional)'],
      sq: ['Kokrra kafeje', 'Ujë', 'Sheqer (opsional)']
    },
    price: {
      en: '€1.00',
      sq: '100 Lek'
    },
    category: 'hotdrinks',
    image: 'https://images.getrecipekit.com/20230414194230-espresso-cup-with-coffee-beans.jpg?width=650&quality=90&'
  },
  {
    id: 38,
    name: { en: 'Macchiato', sq: 'Makiato' },
    description: { 
      en: 'Espresso with a dollop of steamed milk',
      sq: 'Espresso me një pikë qumësht të ngrohtë'
    },
    ingredients: { 
      en: ['Espresso', 'Steamed milk'],
      sq: ['Espresso', 'Qumësht i ngrohtë']
    },
    price: {
      en: '€1.50',
      sq: '150 Lek'
    },
    category: 'hotdrinks',
    image: 'https://roastercoffees.com/wp-content/uploads/2021/05/Espresso-Macchiato-Recipe.webp'
  },
  {
    id: 39,
    name: { en: 'Large Macchiato', sq: 'Makiato e madhe' },
    description: { 
      en: 'Large size macchiato with extra milk',
      sq: 'Makiato e madhe me qumësht shtesë'
    },
    ingredients: { 
      en: ['Double espresso', 'Extra steamed milk'],
      sq: ['Espresso i dyfishtë', 'Qumësht shtesë i ngrohtë']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'hotdrinks',
    image: 'https://staresso.com/cdn/shop/articles/difference_between_espresso_and_cappuccino.png?v=1721125844'
  },
  {
    id: 40,
    name: { en: 'Tea', sq: 'Çaj' },
    description: { 
      en: 'Hot herbal or black tea',
      sq: 'Çaj i ngrohtë bimor ose i zi'
    },
    ingredients: { 
      en: ['Tea leaves', 'Hot water', 'Lemon (optional)'],
      sq: ['Gjethe çaji', 'Ujë i ngrohtë', 'Limon (opsional)']
    },
    price: {
      en: '€1.00',
      sq: '100 Lek'
    },
    category: 'hotdrinks',
    image: 'https://www.verywellhealth.com/thmb/wOpYMxG1V_VxYcp4iJRmxRO4lZc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-693893647-588d21e413dd411cb1f2b0a0ea3e02da.jpg'
  },

  // Cold Drinks
  {
    id: 41,
    name: { en: 'Coca Cola', sq: 'Coca Cola' },
    description: { 
      en: 'Classic Coca Cola soft drink',
      sq: 'Pije freskuese klasike Coca Cola'
    },
    ingredients: { 
      en: ['Carbonated water', 'Sugar', 'Cola flavoring'],
      sq: ['Ujë me gaz', 'Sheqer', 'Aroma kole']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'colddrinks',
    image: 'https://t3.ftcdn.net/jpg/07/29/63/02/360_F_729630262_7hAna5MDjwAd0vAmU3v25u2v3jBaZw8A.jpg'
  },
  {
    id: 42,
    name: { en: 'Fanta', sq: 'Fanta' },
    description: { 
      en: 'Orange flavored carbonated drink',
      sq: 'Pije me gaz me shije portokalli'
    },
    ingredients: { 
      en: ['Carbonated water', 'Orange flavoring', 'Sugar'],
      sq: ['Ujë me gaz', 'Aroma portokalli', 'Sheqer']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'colddrinks',
    image: 'https://www.beigelbake.co.uk/cdn/shop/products/0041_35_FantaOption2.jpg?v=1675628636'
  },
  {
    id: 43,
    name: { en: 'Sprite', sq: 'Sprite' },
    description: { 
      en: 'Lemon-lime flavored soft drink',
      sq: 'Pije freskuese me shije limoni-lime'
    },
    ingredients: { 
      en: ['Carbonated water', 'Lemon-lime flavoring', 'Sugar'],
      sq: ['Ujë me gaz', 'Aroma limoni-lime', 'Sheqer']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'colddrinks',
    image: 'https://m.media-amazon.com/images/I/51et8Od6cUL.jpg'
  },
  {
    id: 44,
    name: { en: 'Ivi', sq: 'Ivi' },
    description: { 
      en: 'Albanian fruit juice drink',
      sq: 'Pije shqiptare me lëng frutash'
    },
    ingredients: { 
      en: ['Fruit juice', 'Water', 'Sugar'],
      sq: ['Lëng frutash', 'Ujë', 'Sheqer']
    },
    price: {
      en: '€1.90',
      sq: '190 Lek'
    },
    category: 'colddrinks',
    image: 'https://freshalbmarket.co.uk/436-medium_default/ivi-orange-soda-drink-330ml-out-of-stock.jpg'
  },
  {
    id: 45,
    name: { en: 'Sola', sq: 'Sola' },
    description: { 
      en: 'Albanian carbonated soft drink',
      sq: 'Pije freskuese shqiptare me gaz'
    },
    ingredients: { 
      en: ['Carbonated water', 'Flavoring', 'Sugar'],
      sq: ['Ujë me gaz', 'Aroma', 'Sheqer']
    },
    price: {
      en: '€1.50',
      sq: '150 Lek'
    },
    category: 'colddrinks',
    image: 'https://maxiks.shop/storage/2019/05/3838999051225.png'
  },
  {
    id: 46,
    name: { en: 'B52', sq: 'B52' },
    description: { 
      en: 'Energy drink with caffeine',
      sq: 'Pije energjike me kafeinë'
    },
    ingredients: { 
      en: ['Caffeine', 'Taurine', 'Vitamins', 'Sugar'],
      sq: ['Kafeinë', 'Taurinë', 'Vitamina', 'Sheqer']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'colddrinks',
    image: 'https://i0.wp.com/digitalcity.al/wp-content/uploads/2024/07/b52-energy-250ml-1.jpg?fit=1200%2C1200&ssl=1'
  },
  {
    id: 47,
    name: { en: 'Bravo', sq: 'Bravo' },
    description: { 
      en: 'Fruit flavored juice drink',
      sq: 'Pije me lëng frutash'
    },
    ingredients: { 
      en: ['Fruit juice', 'Water', 'Vitamins'],
      sq: ['Lëng frutash', 'Ujë', 'Vitamina']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'colddrinks',
    image: 'https://bigmarketcitypark.com/wp-content/uploads/2020/04/90087660.jpg'
  },
  {
    id: 48,
    name: { en: 'Red Bull', sq: 'Red Bull' },
    description: { 
      en: 'Premium energy drink with wings',
      sq: 'Pije energjike premium që të jep krahë'
    },
    ingredients: { 
      en: ['Caffeine', 'Taurine', 'B-vitamins', 'Sugar'],
      sq: ['Kafeinë', 'Taurinë', 'Vitamina B', 'Sheqer']
    },
    price: {
      en: '€3.50',
      sq: '350 Lek'
    },
    category: 'colddrinks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8.4_floz_can_of_Red_Bull_Energy_Drink.jpg/1200px-8.4_floz_can_of_Red_Bull_Energy_Drink.jpg'
  },
  {
    id: 49,
    name: { en: 'Water', sq: 'Ujë' },
    description: { 
      en: 'Pure bottled water',
      sq: 'Ujë i pastër në shishe'
    },
    ingredients: { 
      en: ['Pure water'],
      sq: ['Ujë i pastër']
    },
    price: {
      en: '€1.00',
      sq: '100 Lek'
    },
    category: 'colddrinks',
    image: 'https://bli.ecomarket.al/wp-content/uploads/2020/12/SM03760.jpg'
  },
  {
    id: 50,
    name: { en: 'Buttermilk', sq: 'Dhallë' },
    description: { 
      en: 'Traditional Albanian buttermilk drink',
      sq: 'Pije tradicionale shqiptare dhallë'
    },
    ingredients: { 
      en: ['Buttermilk', 'Salt', 'Water'],
      sq: ['Dhallë', 'Kripë', 'Ujë']
    },
    price: {
      en: '€1.00',
      sq: '100 Lek'
    },
    category: 'colddrinks',
    image: 'https://shop.spar.al/wp-content/uploads/2022/08/68489.png'
  },

  // Alcoholic Drinks
  {
    id: 51,
    name: { en: 'Raki', sq: 'Raki' },
    description: { 
      en: 'Traditional Albanian grape brandy',
      sq: 'Raki tradicional shqiptar nga rrushi'
    },
    ingredients: { 
      en: ['Distilled grapes', 'Water'],
      sq: ['Rrush i distiluar', 'Ujë']
    },
    price: {
      en: '€1.00',
      sq: '100 Lek'
    },
    category: 'alcohol',
    image: 'https://premium1.al/wp-content/uploads/2021/05/raki-rrushi-origjinale-shqiptare-e-bere-vete.jpg'
  },
  {
    id: 52,
    name: { en: 'Korca Small', sq: 'Korca e vogël' },
    description: { 
      en: 'Small bottle of Korca beer',
      sq: 'Shishe e vogël birre Korca'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'alcohol',
    image: 'https://smakahoreca.al/wp-content/uploads/2022/10/bjonde.jpg'
  },
  {
    id: 53,
    name: { en: 'Korca Large', sq: 'Korca e madhe' },
    description: { 
      en: 'Large bottle of Korca beer',
      sq: 'Shishe e madhe birre Korca'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'alcohol',
    image: 'https://smakahoreca.al/wp-content/uploads/2022/10/bjonde.jpg'
  },
  {
    id: 54,
    name: { en: 'Peja Beer', sq: 'Peja' },
    description: { 
      en: 'Premium Albanian Peja beer',
      sq: 'Birre premium shqiptare Peja'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'alcohol',
    image: 'https://www.megateksa.com/media/catalog/product/2/7/270163_1.jpg'
  },
  {
    id: 55,
    name: { en: 'Peroni', sq: 'Peroni' },
    description: { 
      en: 'Italian premium lager beer',
      sq: 'Birre premium italiane Peroni'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Corn', 'Hops'],
      sq: ['Ujë', 'Elb i mbitur', 'Misër', 'Lulushtrydhe']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'alcohol',
    image: 'https://bigmarketcitypark.com/wp-content/uploads/2020/04/80067955.jpg'
  },
  {
    id: 56,
    name: { en: 'Tuborg', sq: 'Tuborg' },
    description: { 
      en: 'Danish pilsner beer',
      sq: 'Birre daneze Tuborg'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'alcohol',
    image: 'https://www.bell-italia.com/image/cache/catalog/products/Tuborg-Birra-Cl.66-Vol.5%C2%B0-1-464x464.jpg'
  },
  {
    id: 57,
    name: { en: 'Heineken', sq: 'Heineken' },
    description: { 
      en: 'Dutch premium lager beer',
      sq: 'Birre premium holandeze Heineken'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Yeast'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Maja']
    },
    price: {
      en: '€3.00',
      sq: '300 Lek'
    },
    category: 'alcohol',
    image: 'https://shop.spar.al/wp-content/uploads/2022/02/HNK_BOT_033.jpg'
  },
  {
    id: 58,
    name: { en: 'Bavaria 0% Alcohol', sq: 'Bavaria 0% alkol' },
    description: { 
      en: 'Non-alcoholic beer with full taste',
      sq: 'Birre pa alkol me shije të plotë'
    },
    ingredients: { 
      en: ['Water', 'Malted barley', 'Hops', 'Natural flavoring'],
      sq: ['Ujë', 'Elb i mbitur', 'Lulushtrydhe', 'Aroma natyrore']
    },
    price: {
      en: '€2.50',
      sq: '250 Lek'
    },
    category: 'alcohol',
    image: 'https://bigmarketcitypark.com/wp-content/uploads/2020/07/8714800011426.jpg'
  },
  {
    id: 59,
    name: { en: '1 Glass of Wine', sq: '1 gotë verë' },
    description: { 
      en: 'Single glass of house wine',
      sq: 'Një gotë verë shtëpie'
    },
    ingredients: { 
      en: ['Red or white wine'],
      sq: ['Verë e kuqe ose e bardhë']
    },
    price: {
      en: '€2.00',
      sq: '200 Lek'
    },
    category: 'alcohol',
    image: 'https://www.qulinaryessentials.com.my/image/qulinaryessentials/image/cache/data/all_product_images/product-430/Ocean%20Classic%20Red%20Wine%201-1000x1000.jpg'
  },
  {
    id: 60,
    name: { en: '1 Liter of Wine', sq: '1 liter verë' },
    description: { 
      en: 'One liter carafe of house wine',
      sq: 'Një litër verë shtëpie në karafë'
    },
    ingredients: { 
      en: ['Red or white wine'],
      sq: ['Verë e kuqe ose e bardhë']
    },
    price: {
      en: '€7.00',
      sq: '700 Lek'
    },
    category: 'alcohol',
    image: 'https://i5.walmartimages.com/seo/Wine-decanter-1100ml-37-2-ounce-red-wine-decanter-hand-blown-lead-free-crystal-bottle-suitable-small-decanters-white-red-wine-elegant-design-easy-pou_be7dc772-4538-4c4d-a500-b3b688ba3ebc.4d849738e95ca08ca39e0d370bcb3428.jpeg'
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
              
              <div className="price">{item.price[language]}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;