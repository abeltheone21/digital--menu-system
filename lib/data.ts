import type { Category, MenuItem, Review } from './types';

export const categories: Category[] = [
  {
    id: 'starters',
    label: 'Starters',
    description: 'Small plates & sharables to open the meal',
    icon: 'Flame',
  },
  {
    id: 'mains',
    label: 'Mains',
    description: 'Hearty plates, grills & Ethiopian classics',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'burgers',
    label: 'Burgers & Sandwiches',
    description: 'Stacked, grilled & pressed to order',
    icon: 'Sandwich',
  },
  {
    id: 'salads',
    label: 'Salads',
    description: 'Fresh, crisp & satisfying bowls',
    icon: 'Salad',
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    description: 'Morning plates & fresh bakes',
    icon: 'Egg',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    description: 'House-made sweets to finish',
    icon: 'CakeSlice',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    description: 'Coffee, tea, cold & freshly pressed',
    icon: 'GlassWater',
  },
];

export const menuItems: MenuItem[] = [
  // ── Starters ─────────────────────────────────────────────
  {
    id: 'sambusa-trio',
    name: 'Sambusa Trio',
    category: 'starters',
    description:
      'Three golden fried pastries — lentil, beef, and spiced potato — with house chili sauce.',
    longDescription:
      'A trio of hand-folded sambusas: spiced lentil, seasoned minced beef, and jalapeño potato. Fried to a golden crisp and served with our house chili-tomato dipping sauce. The perfect sharable opener.',
    price: 85,
    image:
      'https://images.pexels.com/photos/35985960/pexels-photo-35985960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    reviewCount: 132,
    popular: true,
    ingredients: ['Wonton pastry', 'Lentils', 'Minced beef', 'Potato', 'Jalapeño', 'Spices'],
    prepTime: '10 min',
    calories: 320,
  },
  {
    id: 'kitfo-tartare',
    name: 'Kitfo (Ethiopian Beef Tartare)',
    category: 'starters',
    description:
      'Hand-minced lean beef warmed in spiced niter kibbeh, with ayib cheese and kolo.',
    longDescription:
      'A traditional Ethiopian delicacy: hand-minced lean beef warmed — not cooked — in spiced clarified butter (niter kibbeh) with mitmita chili blend. Served with fresh ayib cheese and toasted kolo barley. Rich, deeply spiced, and unforgettable.',
    price: 165,
    image:
      'https://images.pexels.com/photos/3840182/pexels-photo-3840182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    reviewCount: 87,
    popular: true,
    ingredients: ['Lean beef', 'Niter kibbeh', 'Mitmita', 'Ayib cheese', 'Kolo barley'],
    prepTime: '12 min',
    calories: 380,
  },
  {
    id: 'mezze-platter',
    name: 'Mezze Sharing Platter',
    category: 'starters',
    description:
      'Hummus, baba ganoush, falafel, olives, and warm pita — built for the table.',
    longDescription:
      'A generous platter for sharing: creamy hummus, smoky baba ganoush, four crisp falafel, marinated olives, and warm pita bread. Drizzled with olive oil and a sprinkle of sumac.',
    price: 145,
    image:
      'https://images.pexels.com/photos/4958946/pexels-photo-4958946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.6,
    reviewCount: 74,
    popular: false,
    ingredients: ['Hummus', 'Baba ganoush', 'Falafel', 'Olives', 'Pita', 'Olive oil', 'Sumac'],
    prepTime: '8 min',
    calories: 450,
  },
  {
    id: 'soup-of-day',
    name: 'Spiced Lentil Soup',
    category: 'starters',
    description:
      'Velvety red lentils with cumin, garlic, and a squeeze of lemon — warming and wholesome.',
    longDescription:
      'Velvety red lentils simmered with cumin, garlic, and tomato, finished with a squeeze of fresh lemon and a swirl of olive oil. Served with warm house bread. Comforting, vegan, and deeply flavorful.',
    price: 65,
    image:
      'https://images.pexels.com/photos/5605632/pexels-photo-5605632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.5,
    reviewCount: 56,
    popular: false,
    ingredients: ['Red lentils', 'Cumin', 'Garlic', 'Tomato', 'Lemon', 'Olive oil'],
    prepTime: '8 min',
    calories: 220,
  },

  // ── Mains ───────────────────────────────────────────────
  {
    id: 'doro-wot',
    name: 'Doro Wot (Chicken Stew)',
    category: 'mains',
    description:
      'Ethiopia’s national dish — slow-braised chicken and hard-boiled egg in a rich berbere sauce, on injera.',
    longDescription:
      'Our signature main and Ethiopia’s most celebrated dish: chicken leg and thigh slow-braised for hours in a deep, complex berbere and red-onion sauce, finished with a hard-boiled egg and served on a platter of soft injera. The sauce is dark, rich, and deeply spiced — the kind of dish you remember.',
    price: 185,
    image:
      'https://images.pexels.com/photos/34788180/pexels-photo-34788180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    reviewCount: 243,
    popular: true,
    ingredients: ['Chicken', 'Berbere', 'Red onion', 'Hard-boiled egg', 'Niter kibbeh', 'Injera'],
    prepTime: '20 min',
    calories: 620,
  },
  {
    id: 'grilled-steak',
    name: 'Peppercorn Grilled Steak',
    category: 'mains',
    description:
      '200g tender beef steak with a creamy peppercorn sauce, roasted vegetables, and herb potatoes.',
    longDescription:
      'A 200g tender beef steak grilled to your liking, smothered in a creamy cognac-peppercorn sauce. Served with roasted seasonal vegetables and golden herb-crusted potatoes. A hearty, restaurant-quality plate.',
    price: 240,
    image:
      'https://images.pexels.com/photos/27643017/pexels-photo-27643017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 156,
    popular: true,
    ingredients: ['Beef steak', 'Peppercorn', 'Cream', 'Cognac', 'Potatoes', 'Vegetables'],
    prepTime: '18 min',
    calories: 780,
  },
  {
    id: 'shiro-wot',
    name: 'Shiro Wot (Chickpea Stew)',
    category: 'mains',
    description:
      'Velvety spiced chickpea stew simmered with berbere and garlic, served on injera.',
    longDescription:
      'A velvety stew of finely ground chickpeas simmered with berbere spice, garlic, and caramelized onion. Served on a platter of soft injera with a side of fresh salad. A beloved Ethiopian comfort dish — and naturally vegan.',
    price: 130,
    image:
      'https://images.pexels.com/photos/34788180/pexels-photo-34788180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    reviewCount: 134,
    popular: false,
    ingredients: ['Ground chickpeas', 'Berbere', 'Garlic', 'Onion', 'Injera'],
    prepTime: '15 min',
    calories: 540,
  },
  {
    id: 'grilled-chicken-rice',
    name: 'Grilled Chicken & Rice Plate',
    category: 'mains',
    description:
      'Marinated grilled chicken over saffron rice with roasted vegetables and garlic sauce.',
    longDescription:
      'A half chicken marinated overnight in lemon, garlic, and herbs, grilled until golden and juicy. Served over saffron rice with roasted vegetables and a drizzle of garlic yogurt sauce. A filling, balanced plate.',
    price: 175,
    image:
      'https://images.pexels.com/photos/19938618/pexels-photo-19938618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    reviewCount: 112,
    popular: true,
    ingredients: ['Chicken', 'Saffron rice', 'Vegetables', 'Garlic yogurt', 'Lemon', 'Herbs'],
    prepTime: '16 min',
    calories: 690,
  },
  {
    id: 'pasta-arabbiata',
    name: 'Pasta all’Arrabbiata',
    category: 'mains',
    description:
      'Penne in a spicy tomato sauce with garlic, chili, and fresh basil.',
    longDescription:
      'Penne tossed in a fiery tomato arrabbiata sauce with garlic, red chili, and torn basil, finished with olive oil and parmesan. A nod to Addis’ Italian-Ethiopian heritage. Vegetarian.',
    price: 140,
    image:
      'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.5,
    reviewCount: 78,
    popular: false,
    ingredients: ['Penne', 'Tomato', 'Garlic', 'Chili', 'Basil', 'Parmesan'],
    prepTime: '14 min',
    calories: 610,
  },
  {
    id: 'mixed-grill',
    name: 'Aroma Mixed Grill Platter',
    category: 'mains',
    description:
      'Grilled beef, lamb, and chicken with jollof rice, roasted veg, and three sauces — for two.',
    longDescription:
      'A feast for two: skewers of marinated beef, lamb, and chicken grilled over open flame, served with jollof rice, roasted vegetables, and three house sauces (chili, garlic yogurt, and berbere aioli). Our most photogenic plate.',
    price: 320,
    image:
      'https://images.pexels.com/photos/36734922/pexels-photo-36734922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    reviewCount: 98,
    popular: true,
    ingredients: ['Beef', 'Lamb', 'Chicken', 'Jollof rice', 'Vegetables', 'Chili sauce', 'Garlic yogurt', 'Berbere aioli'],
    prepTime: '22 min',
    calories: 980,
  },

  // ── Burgers & Sandwiches ─────────────────────────────────
  {
    id: 'aroma-burger',
    name: 'Aroma Signature Burger',
    category: 'burgers',
    description:
      '180g beef patty, cheddar, caramelized onion, and house sauce on a brioche bun, with fries.',
    longDescription:
      'Our signature: a thick 180g beef patty seared medium, topped with melted cheddar, caramelized onion jam, crisp lettuce, and house burger sauce on a toasted brioche bun. Served with a generous side of golden fries.',
    price: 165,
    image:
      'https://images.pexels.com/photos/9011742/pexels-photo-9011742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 201,
    popular: true,
    ingredients: ['Beef patty', 'Cheddar', 'Caramelized onion', 'House sauce', 'Brioche bun', 'Fries'],
    prepTime: '14 min',
    calories: 820,
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    category: 'burgers',
    description:
      'Buttermilk-fried chicken thigh, slaw, pickles, and spicy mayo on a sesame bun, with fries.',
    longDescription:
      'A buttermilk-marinated chicken thigh fried until shatteringly crisp, topped with crunchy slaw, dill pickles, and spicy mayo on a toasted sesame bun. Served with fries. The most-ordered item on the menu.',
    price: 145,
    image:
      'https://images.pexels.com/photos/10935114/pexels-photo-10935114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 267,
    popular: true,
    ingredients: ['Chicken thigh', 'Buttermilk', 'Slaw', 'Pickles', 'Spicy mayo', 'Sesame bun', 'Fries'],
    prepTime: '13 min',
    calories: 760,
  },
  {
    id: 'panini-club',
    name: 'Grilled Chicken Panini Club',
    category: 'burgers',
    description:
      'Triple-decker pressed panini with grilled chicken, bacon, egg, lettuce, and garlic mayo.',
    longDescription:
      'A triple-decker panini pressed warm: grilled chicken, crispy bacon, fried egg, fresh lettuce, tomato, and garlic mayo between toasted slices. Hearty and satisfying.',
    price: 125,
    image:
      'https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.6,
    reviewCount: 89,
    popular: false,
    ingredients: ['Grilled chicken', 'Bacon', 'Fried egg', 'Lettuce', 'Tomato', 'Garlic mayo', 'Panini bread'],
    prepTime: '10 min',
    calories: 640,
  },
  {
    id: 'cheese-panini',
    name: 'Mozzarella & Pesto Panini',
    category: 'burgers',
    description:
      'Melted mozzarella, sun-dried tomato, and basil pesto on grilled ciabatta.',
    longDescription:
      'Stretchy melted mozzarella, sun-dried tomatoes, and house basil pesto pressed between slices of ciabatta until golden and crisp. Vegetarian and deeply satisfying.',
    price: 110,
    image:
      'https://images.pexels.com/photos/32715053/pexels-photo-32715053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.5,
    reviewCount: 64,
    popular: false,
    ingredients: ['Mozzarella', 'Sun-dried tomato', 'Basil pesto', 'Ciabatta'],
    prepTime: '8 min',
    calories: 520,
  },

  // ── Salads ───────────────────────────────────────────────
  {
    id: 'grilled-chicken-salad',
    name: 'Grilled Chicken Garden Salad',
    category: 'salads',
    description:
      'Grilled chicken over mixed greens, cherry tomato, cucumber, and croutons with lemon dressing.',
    longDescription:
      'Sliced grilled chicken breast over a bed of mixed greens, cherry tomatoes, cucumber, red onion, and crisp croutons, tossed in a bright lemon-olive oil dressing. Light, fresh, and protein-packed.',
    price: 120,
    image:
      'https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.6,
    reviewCount: 95,
    popular: true,
    ingredients: ['Grilled chicken', 'Mixed greens', 'Cherry tomato', 'Cucumber', 'Croutons', 'Lemon dressing'],
    prepTime: '10 min',
    calories: 340,
  },
  {
    id: 'falafel-salad',
    name: 'Falafel & Hummus Salad',
    category: 'salads',
    description:
      'Crispy falafel over greens with hummus, olives, and a tahini-lemon dressing.',
    longDescription:
      'Four crisp falafel over fresh greens with a dollop of hummus, Kalamata olives, diced cucumber, and tomato, drizzled with a tahini-lemon dressing. Vegan and deeply satisfying.',
    price: 115,
    image:
      'https://images.pexels.com/photos/4958946/pexels-photo-4958946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    reviewCount: 71,
    popular: false,
    ingredients: ['Falafel', 'Hummus', 'Mixed greens', 'Olives', 'Cucumber', 'Tomato', 'Tahini dressing'],
    prepTime: '10 min',
    calories: 410,
  },
  {
    id: 'mediterranean-salad',
    name: 'Mediterranean Mezze Salad',
    category: 'salads',
    description:
      'Burrata, cherry tomato, basil, and olive oil over greens — simple and fresh.',
    longDescription:
      'Creamy burrata over mixed greens with cherry tomatoes, fresh basil, and a drizzle of olive oil and balsamic glaze. Simple, fresh, and elegant.',
    price: 130,
    image:
      'https://images.pexels.com/photos/34618702/pexels-photo-34618702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.6,
    reviewCount: 48,
    popular: false,
    ingredients: ['Burrata', 'Cherry tomato', 'Basil', 'Mixed greens', 'Olive oil', 'Balsamic glaze'],
    prepTime: '8 min',
    calories: 380,
  },

  // ── Breakfast ─────────────────────────────────────────────
  {
    id: 'ful-medames',
    name: 'Ful Medames',
    category: 'breakfast',
    description:
      'Slow-cooked fava beans with olive oil, cumin, and fresh tomato — an Ethiopian breakfast staple.',
    longDescription:
      'Fava beans slow-cooked overnight with cumin and garlic, topped with olive oil, diced onion, tomato, jalapeño, and a squeeze of lemon. Served with warm injera and crusty bread. A hearty Ethiopian breakfast staple.',
    price: 110,
    image:
      'https://images.pexels.com/photos/5836619/pexels-photo-5836619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 143,
    popular: true,
    ingredients: ['Fava beans', 'Olive oil', 'Cumin', 'Tomato', 'Onion', 'Jalapeño', 'Lemon'],
    prepTime: '12 min',
    calories: 420,
  },
  {
    id: 'breakfast-platter',
    name: 'Aroma Breakfast Platter',
    category: 'breakfast',
    description:
      'Scrambled eggs, sautéed greens, fresh fruit, and warm bread with honey butter.',
    longDescription:
      'Fluffy scrambled eggs, sautéed collard greens (gomen), a bowl of seasonal fresh fruit, and warm house bread with honey butter. A complete, balanced start to the day.',
    price: 145,
    image:
      'https://images.pexels.com/photos/4869428/pexels-photo-4869428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    reviewCount: 89,
    popular: false,
    ingredients: ['Eggs', 'Collard greens', 'Seasonal fruit', 'House bread', 'Honey butter'],
    prepTime: '14 min',
    calories: 520,
  },
  {
    id: 'feta-plate',
    name: 'Feta & Egg Plate',
    category: 'breakfast',
    description:
      'Two fried eggs over crumbled feta with olives, tomato, and warm bread.',
    longDescription:
      'Two eggs fried sunny-side up over crumbled feta cheese, with Kalamata olives, sliced tomato, cucumber, and warm bread. Salty, savory, and satisfying.',
    price: 98,
    image:
      'https://images.pexels.com/photos/5605632/pexels-photo-5605632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.5,
    reviewCount: 41,
    popular: false,
    ingredients: ['Eggs', 'Feta cheese', 'Olives', 'Tomato', 'Bread'],
    prepTime: '10 min',
    calories: 480,
  },

  // ── Desserts ──────────────────────────────────────────────
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    category: 'desserts',
    description:
      'Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.',
    longDescription:
      'Ladyfingers soaked in espresso, layered with airy mascarpone cream, and dusted with bitter cocoa. A coffee-house classic, made fresh daily.',
    price: 95,
    image:
      'https://images.pexels.com/photos/6612637/pexels-photo-6612637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    reviewCount: 198,
    popular: true,
    ingredients: ['Ladyfingers', 'Espresso', 'Mascarpone', 'Cocoa', 'Eggs'],
    prepTime: '5 min',
    calories: 380,
  },
  // ── Additional Coffee ─────────────────────────────────────

{
  id: 'espresso',
  name: 'Double Espresso',
  category: 'drinks',
  description: 'Rich double-shot Ethiopian espresso.',
  longDescription: 'A bold double shot brewed from freshly roasted Ethiopian Yirgacheffe beans.',
  price: 45,
  image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.8,
  reviewCount: 190,
  popular: true,
  ingredients: ['Espresso Beans', 'Water'],
  prepTime: '3 min',
  calories: 10,
},
{
  id: 'cappuccino',
  name: 'Cappuccino',
  category: 'drinks',
  description: 'Espresso with steamed milk and foam.',
  longDescription: 'Classic Italian cappuccino crafted with premium Ethiopian espresso.',
  price: 65,
  image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.9,
  reviewCount: 280,
  popular: true,
  ingredients: ['Espresso', 'Milk'],
  prepTime: '5 min',
  calories: 120,
},
{
  id: 'latte',
  name: 'Vanilla Latte',
  category: 'drinks',
  description: 'Creamy latte with vanilla syrup.',
  longDescription: 'Smooth espresso mixed with steamed milk and natural vanilla.',
  price: 78,
  image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.8,
  reviewCount: 140,
  popular: true,
  ingredients: ['Espresso', 'Milk', 'Vanilla'],
  prepTime: '5 min',
  calories: 210,
},

// ── Smoothies ─────────────────────────────────────────────

{
  id: 'strawberry-smoothie',
  name: 'Strawberry Smoothie',
  category: 'drinks',
  description: 'Fresh strawberries blended with yogurt.',
  longDescription: 'A refreshing blend of ripe strawberries, yogurt, honey, and ice.',
  price: 95,
  image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.9,
  reviewCount: 110,
  popular: true,
  ingredients: ['Strawberries', 'Yogurt', 'Honey'],
  prepTime: '4 min',
  calories: 240,
},

// ── Breakfast ─────────────────────────────────────────────

{
  id: 'pancakes',
  name: 'Classic Pancakes',
  category: 'breakfast',
  description: 'Three fluffy pancakes with maple syrup.',
  longDescription: 'Fresh pancakes served with butter, maple syrup, and seasonal fruit.',
  price: 135,
  image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.8,
  reviewCount: 130,
  popular: true,
  ingredients: ['Flour', 'Eggs', 'Milk', 'Butter'],
  prepTime: '12 min',
  calories: 520,
},

// ── Pizza ─────────────────────────────────────────────────

{
  id: 'margherita-pizza',
  name: 'Margherita Pizza',
  category: 'mains',
  description: 'Classic pizza with mozzarella and basil.',
  longDescription: 'Stone-baked pizza topped with tomato sauce, mozzarella, and fresh basil.',
  price: 230,
  image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.8,
  reviewCount: 220,
  popular: true,
  ingredients: ['Mozzarella', 'Tomato', 'Basil'],
  prepTime: '18 min',
  calories: 760,
},

{
  id: 'pepperoni-pizza',
  name: 'Pepperoni Pizza',
  category: 'mains',
  description: 'Loaded with mozzarella and pepperoni.',
  longDescription: 'A crispy stone-baked pizza with premium pepperoni slices.',
  price: 260,
  image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.9,
  reviewCount: 190,
  popular: true,
  ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
  prepTime: '18 min',
  calories: 890,
},

// ── Pasta ────────────────────────────────────────────────

{
  id: 'alfredo-pasta',
  name: 'Chicken Alfredo',
  category: 'mains',
  description: 'Creamy Alfredo pasta with grilled chicken.',
  longDescription: 'Fettuccine tossed in rich Alfredo sauce with grilled chicken breast.',
  price: 210,
  image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.8,
  reviewCount: 150,
  popular: true,
  ingredients: ['Chicken', 'Cream', 'Parmesan', 'Pasta'],
  prepTime: '15 min',
  calories: 780,
},

// ── Desserts ─────────────────────────────────────────────

{
  id: 'cheesecake',
  name: 'New York Cheesecake',
  category: 'desserts',
  description: 'Creamy baked cheesecake with berry sauce.',
  longDescription: 'Classic New York cheesecake served with homemade mixed berry compote.',
  price: 120,
  image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.9,
  reviewCount: 170,
  popular: true,
  ingredients: ['Cream Cheese', 'Eggs', 'Butter'],
  prepTime: '5 min',
  calories: 450,
},

{
  id: 'ice-cream',
  name: 'Ice Cream Trio',
  category: 'desserts',
  description: 'Chocolate, vanilla, and strawberry ice cream.',
  longDescription: 'Three scoops of premium ice cream served with chocolate drizzle.',
  price: 95,
  image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  rating: 4.7,
  reviewCount: 90,
  popular: false,
  ingredients: ['Milk', 'Cream', 'Chocolate', 'Vanilla'],
  prepTime: '2 min',
  calories: 360,
},
  {
    id: 'chocolate-cake',
    name: 'Molten Chocolate Cake',
    category: 'desserts',
    description:
      'Warm dark-chocolate cake with a flowing center, served with vanilla gelato.',
    longDescription:
      'A warm individual cake with a dark chocolate shell and a flowing molten center, served with a scoop of vanilla bean gelato and a dusting of cocoa. Decadent.',
    price: 110,
    image:
      'https://images.pexels.com/photos/30869364/pexels-photo-30869364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 134,
    popular: true,
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Vanilla gelato'],
    prepTime: '10 min',
    calories: 520,
  },
  {
    id: 'berry-tart',
    name: 'Mixed Berry Tart',
    category: 'desserts',
    description:
      'Buttery pastry shell with vanilla custard and fresh seasonal berries.',
    longDescription:
      'A buttery shortcrust shell filled with vanilla bean custard and topped with fresh seasonal berries and a light apricot glaze. Bright, fresh, and not too sweet.',
    price: 88,
    image:
      'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.6,
    reviewCount: 73,
    popular: false,
    ingredients: ['Pastry', 'Vanilla custard', 'Mixed berries', 'Apricot glaze'],
    prepTime: '5 min',
    calories: 290,
  },

  // ── Drinks ────────────────────────────────────────────────
  {
    id: 'macchiato',
    name: 'Ethiopian Macchiato',
    category: 'drinks',
    description:
      'Double shot of Sidamo espresso marked with steamed milk foam — bold and velvety.',
    longDescription:
      'A double shot of our Sidamo single-origin espresso, marked with a dollop of velvet steamed-milk foam. Intense, sweet, and deeply aromatic — the most ordered drink in Addis.',
    price: 55,
    image:
      'https://images.pexels.com/photos/997670/pexels-photo-997670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 389,
    popular: true,
    ingredients: ['Sidamo espresso', 'Steamed milk', 'Milk foam'],
    prepTime: '5 min',
    calories: 90,
  },
  {
    id: 'buna-ceremony',
    name: 'Buna Ceremony Brew',
    category: 'drinks',
    description:
      'Traditional hand-roasted Yirgacheffe beans, brewed in a jebena clay pot with popcorn.',
    longDescription:
      'Our signature experience. Green Yirgacheffe beans are roasted in-house, ground fresh, and brewed in a traditional clay jebena. Served with fragrant popcorn and incense — the way coffee has been shared in Ethiopian homes for centuries.',
    price: 95,
    image:
      'https://images.pexels.com/photos/6742970/pexels-photo-6742970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    reviewCount: 214,
    popular: true,
    ingredients: ['Yirgacheffe beans', 'Water', 'Popcorn', 'Incense'],
    prepTime: '15 min',
    calories: 120,
  },
  {
    id: 'iced-latte',
    name: 'Iced Caramel Latte',
    category: 'drinks',
    description:
      'Chilled espresso and milk over ice, swirled with house caramel — cool and indulgent.',
    longDescription:
      'A double shot of espresso shaken with cold milk and house-made caramel, poured over a tall glass of ice. Sweet, creamy, and dangerously refreshing.',
    price: 72,
    image:
      'https://images.pexels.com/photos/4869290/pexels-photo-4869290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    reviewCount: 167,
    popular: false,
    ingredients: ['Espresso', 'Cold milk', 'Caramel', 'Ice'],
    prepTime: '4 min',
    calories: 210,
  },
  {
    id: 'mango-smoothie',
    name: 'Mango Avocado Smoothie',
    category: 'drinks',
    description:
      'Ripe mango blended with creamy avocado and a splash of lime — thick and tropical.',
    longDescription:
      'Ripe Alphonso mango blended with creamy avocado, a splash of lime, and a touch of honey. Thick, naturally sweet, and packed with good fats.',
    price: 80,
    image:
      'https://images.pexels.com/photos/17612822/pexels-photo-17612822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    reviewCount: 121,
    popular: true,
    ingredients: ['Mango', 'Avocado', 'Lime', 'Honey', 'Ice'],
    prepTime: '5 min',
    calories: 280,
  },
  {
    id: 'spiced-tea',
    name: 'Spiced Black Tea (Shai)',
    category: 'drinks',
    description:
      'Black tea simmered with cardamom, clove, and cinnamon — warm and aromatic.',
    longDescription:
      'Loose-leaf black tea simmered with whole cardamom, clove, and a stick of cinnamon. Served with honey on the side. Warm, fragrant, and deeply comforting.',
    price: 35,
    image:
      'https://images.pexels.com/photos/10240648/pexels-photo-10240648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    reviewCount: 112,
    popular: false,
    ingredients: ['Black tea', 'Cardamom', 'Clove', 'Cinnamon', 'Honey'],
    prepTime: '7 min',
    calories: 25,
  },
  {
    id: 'iced-hibiscus',
    name: 'Iced Hibiscus Tea',
    category: 'drinks',
    description:
      'Brewed hibiscus (karkade) served chilled with lemon — tart and ruby-red.',
    longDescription:
      'Dried hibiscus flowers steeped and chilled, served over ice with a wedge of lemon. Tart, ruby-red, and deeply refreshing — a popular Addis afternoon cooler.',
    price: 42,
    image:
      'https://images.pexels.com/photos/8980388/pexels-photo-8980388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.6,
    reviewCount: 67,
    popular: false,
    ingredients: ['Hibiscus', 'Lemon', 'Honey', 'Ice'],
    prepTime: '4 min',
    calories: 35,
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Hanna Tesfaye',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
    date: '2 weeks ago',
    role: 'Regular customer',
    comment:
      'The Doro Wot is the best in Addis — full stop. The sauce is dark and rich and the injera is always fresh. Aroma has become our family’s go-to for Sunday lunch.',
  },
  {
    id: 'r2',
    name: 'Dawit Bekele',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
    date: '1 month ago',
    role: 'Local guide',
    comment:
      'The mixed grill platter is unreal value for two people. Everything came hot, the jolloh rice was perfectly spiced, and the three sauces are a stroke of genius. I bring clients here every week.',
  },
  {
    id: 'r3',
    name: 'Sara Ahmed',
    avatar: 'https://i.pravatar.cc/120?img=32',
    rating: 4,
    date: '3 weeks ago',
    role: 'Food enthusiast',
    comment:
      'Lovely grilled chicken salad with genuinely fresh ingredients. The QR menu makes ordering effortless and the food comes out fast. Lost a star only because it gets busy on weekends — book ahead.',
  },
  {
    id: 'r4',
    name: 'Michael G.',
    avatar: 'https://i.pravatar.cc/120?img=15',
    rating: 5,
    date: '5 days ago',
    role: 'Visitor from Nairobi',
    comment:
      'Stopped in during a trip to Addis and came back three days in a row. The crispy chicken burger and tiramisu combo is unreal. This is what a great eatery should feel like.',
  },
];

export const cafeInfo = {
  name: 'Dado restaurant',
  tagline: 'Food That Brings People Together',
  description:
    'A modern Ethiopian eatery in the heart of Addis Ababa, serving hearty plates, grilled specialties, and the classics of Ethiopian home cooking — alongside fresh salads, stacked burgers, and house-made desserts. Every dish is made to order, with locally sourced produce and a whole lot of soul.',
  address: 'merkato, Addis Ababa, Ethiopia',
  phone: '+251 11 467 8900',
  email: 'hello@Dadorestaurant.et',
  hours: [
    { day: 'Monday – Thursday', time: '8:00 AM – 10:00 PM' },
    { day: 'Friday – Saturday', time: '8:00 AM – 11:30 PM' },
    { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
  },
  heroImage:
    'https://images.pexels.com/photos/17294719/pexels-photo-17294719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  storyImage:
    'https://images.pexels.com/photos/8471743/pexels-photo-8471743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  baristaImage:
    'https://images.pexels.com/photos/36734922/pexels-photo-36734922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  beansImage:
    'https://images.pexels.com/photos/5531102/pexels-photo-5531102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export function getItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}

export function getRelatedItems(item: MenuItem, count = 3): MenuItem[] {
  return menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, count);
}

export function getPopularItems(count = 6): MenuItem[] {
  return menuItems.filter((item) => item.popular).slice(0, count);
}
