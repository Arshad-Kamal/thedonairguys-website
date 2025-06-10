// The Donair Guys Menu Data
const menuData = {
  "categories": [
    {
      "id": "donairs",
      "name": "Donairs & Wraps",
      "description": "Our signature 100% Halal donairs with sweet garlic sauce"
    },
    {
      "id": "pizza",
      "name": "Pizza",
      "description": "100% Halal pizzas with premium ingredients"
    },
    {
      "id": "burgers",
      "name": "Burgers",
      "description": "100% Halal burgers with fresh toppings"
    },
    {
      "id": "poutine",
      "name": "Poutine",
      "description": "Delicious poutine with our signature toppings"
    },
    {
      "id": "wings",
      "name": "Wings",
      "description": "Chicken wings served with ranch"
    },
    {
      "id": "salads",
      "name": "Salads",
      "description": "Fresh salads with premium ingredients"
    },
    {
      "id": "sides",
      "name": "Sides",
      "description": "Delicious sides to complement your meal"
    },
    {
      "id": "drinks",
      "name": "Drinks",
      "description": "Refreshing beverages"
    },
    {
      "id": "desserts",
      "name": "Desserts",
      "description": "Sweet treats to finish your meal"
    },
    {
      "id": "combos",
      "name": "Combos & Deals",
      "description": "Value meal deals for groups and families"
    }
  ],
  "items": [
    // Donairs & Wraps
    {
      "id": "beef-donair",
      "name": "Beef Donair",
      "description": "Comes with Swiss Cheese",
      "price": 12.95,
      "image": "/images/beef-donair.webp",
      "category": "donairs",
      "dietary": ["Halal"]
    },
    {
      "id": "chicken-shawarma-donair",
      "name": "Chicken Shawarma Donair",
      "description": "Comes with Swiss Cheese",
      "price": 13.95,
      "image": "/images/chicken-shawarma-donair.webp",
      "category": "donairs",
      "dietary": ["Halal"]
    },
    {
      "id": "mixed-donair",
      "name": "Mixed Donair",
      "description": "Comes with Swiss Cheese",
      "price": 14.95,
      "image": "/images/mixed-donair.webp",
      "category": "donairs",
      "dietary": ["Halal"]
    },
    
    // Pizza - 8" Personalized
    {
      "id": "8-cheese-blend-pizza",
      "name": "8\" Personalized 5 Cheese Blend Pizza",
      "description": "Mozzarella, cheddar, asiago, feta, and Parmesan cheese.",
      "price": 11.95,
      "image": "/images/5-cheese-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-dgs-special-pizza",
      "name": "8\" Personalized DG's Special Pizza",
      "description": "Pepperoni, mushrooms, bacon, onions, green pepper, and pineapple.",
      "price": 11.95,
      "image": "/images/dgs-special-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-meat-lovers-pizza",
      "name": "8\" Personalized Meat Lovers Pizza",
      "description": "Pepperoni, bacon, Grilled Chicken, and ground beef.",
      "price": 11.95,
      "image": "/images/meat-lovers-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-donair-pizza",
      "name": "8\" Personalized Donair Pizza",
      "description": "Donair sauce, donair meat, fresh tomatoes, onions, and double mozzarella cheese.",
      "price": 11.95,
      "image": "/images/donair-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-greek-pizza",
      "name": "8\" Personalized Greek Pizza",
      "description": "Seasoned ground beef, onions, black olives, mushrooms, feta cheese, and fresh tomatoes.",
      "price": 11.95,
      "image": "/images/greek-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-vegetarian-pizza",
      "name": "8\" Personalized Famous Vegetarian Pizza",
      "description": "Mushrooms, onions, green pepper, pineapple, black olives, and fresh tomatoes.",
      "price": 11.95,
      "image": "/images/vegetarian-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal", "Vegetarian"],
      "size": "8\""
    },
    {
      "id": "8-bbq-chicken-pizza",
      "name": "8\" Personalized BBQ Chicken Pizza",
      "description": "Barbeque sauce, barbeque chicken, onions, green peppers, and fresh tomatoes.",
      "price": 11.95,
      "image": "/images/bbq-chicken-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-spicy-chicken-pizza",
      "name": "8\" Personalized Spicy Chicken Pizza",
      "description": "Secret spicy sauce, spicy grilled chicken, green peppers, mushrooms, banana peppers, and jalapeno peppers.",
      "price": 11.95,
      "image": "/images/spicy-chicken-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-bacon-cheeseburger-pizza",
      "name": "8\" Personalized Bacon N Cheeseburger Pizza",
      "description": "Turkey bacon, ground beef, mushrooms, onions, cheddar, and mozzarella cheese.",
      "price": 11.95,
      "image": "/images/bacon-cheeseburger-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-spicy-mexican-pizza",
      "name": "8\" Personalized Spicy Mexican Pizza",
      "description": "Secret hot sauce, bacon, ground beef, onions, jalapeno peppers, cheddar, and mozzarella cheese.",
      "price": 11.95,
      "image": "/images/spicy-mexican-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-buffalo-chicken-pizza",
      "name": "8\" Personalized Buffalo Chicken Pizza",
      "description": "Spicy buffalo sauce, grilled chicken, onions, green peppers, and banana peppers.",
      "price": 11.95,
      "image": "/images/buffalo-chicken-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-mediterranean-pizza",
      "name": "8\" Personalized Light Mediterranean Pizza",
      "description": "Fresh baby spinach, grilled chicken, goat feta, onion, and fresh tomatoes.",
      "price": 11.95,
      "image": "/images/mediterranean-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-chicken-shawarma-pizza",
      "name": "8\" Personalized Chicken Shawarma Pizza",
      "description": "Chicken shawarma, onions, mushrooms, green peppers, cooked tomatoes, and banana peppers, topped with garlic sauce.",
      "price": 11.95,
      "image": "/images/chicken-shawarma-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    {
      "id": "8-rosemary-chicken-pizza",
      "name": "8\" Personalized Rosemary Chicken Pizza",
      "description": "DG's tomato sauce, mozzarella cheese, fresh garlic, grilled rosemary spiced chicken, mushrooms, and cooked tomatoes.",
      "price": 11.95,
      "image": "/images/rosemary-chicken-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "8\""
    },
    
    // Pizza - 10" Small
    {
      "id": "10-cheese-blend-pizza",
      "name": "10\" Small 5 Cheese Blend Pizza",
      "description": "Mozzarella, cheddar, asiago, feta, and Parmesan cheese. Six slices.",
      "price": 15.95,
      "image": "/images/5-cheese-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "10\""
    },
    {
      "id": "10-dgs-special-pizza",
      "name": "10\" Small DG's Special Pizza",
      "description": "Pepperoni, mushrooms, bacon, onions, green pepper, and pineapple. Six slices.",
      "price": 15.95,
      "image": "/images/dgs-special-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "10\""
    },
    {
      "id": "10-meat-lovers-pizza",
      "name": "10\" Small Meat Lovers Pizza",
      "description": "Pepperoni, bacon, Grilled Chicken, and ground beef. Six slices.",
      "price": 15.95,
      "image": "/images/meat-lovers-pizza.webp",
      "category": "pizza",
      "dietary": ["Halal"],
      "size": "10\""
    },
    
    // Burgers
    {
      "id": "regular-burger",
      "name": "Regular Burger",
      "description": "Classic burger with fresh toppings",
      "price": 9.95,
      "image": "/images/regular-burger.webp",
      "category": "burgers",
      "dietary": ["Halal"]
    },
    {
      "id": "cheese-burger",
      "name": "Cheese Burger",
      "description": "Classic burger topped with cheese",
      "price": 10.95,
      "image": "/images/cheese-burger.webp",
      "category": "burgers",
      "dietary": ["Halal"]
    },
    {
      "id": "donair-burger",
      "name": "Donair Burger",
      "description": "Comes with sweet sauce",
      "price": 10.95,
      "image": "/images/donair-burger.webp",
      "category": "burgers",
      "dietary": ["Halal"]
    },
    {
      "id": "mushroom-mozzarella-burger",
      "name": "Mushroom Mozzarella Burger",
      "description": "Burger topped with sauteed mushrooms and melted mozzarella cheese",
      "price": 11.95,
      "image": "/images/mushroom-mozzarella-burger.webp",
      "category": "burgers",
      "dietary": ["Halal"]
    },
    {
      "id": "mushroom-special-burger",
      "name": "Mushroom Special Burger",
      "description": "Double patty topped with sauteed onions, mushrooms, cheese, and turkey bacon",
      "price": 11.95,
      "image": "/images/mushroom-special-burger.webp",
      "category": "burgers",
      "dietary": ["Halal"]
    },
    
    // Poutines
    {
      "id": "poutine",
      "name": "Poutine",
      "description": "Seasoned fries topped with mozzarella cheese and gravy",
      "price": 6.99,
      "image": "/images/poutine.webp",
      "category": "poutine",
      "dietary": ["Halal"]
    },
    
    // Chicken Wings
    {
      "id": "chicken-wings",
      "name": "Chicken Wings",
      "description": "Served with ranch. All wings are served with ranch",
      "price": 7.99,
      "image": "/images/chicken-wings.webp",
      "category": "wings",
      "dietary": ["Halal"]
    },
    {
      "id": "boneless-chicken-bites",
      "name": "Boneless Chicken Bites",
      "description": "Boneless chicken bites served with ranch",
      "price": 13.95,
      "image": "/images/boneless-chicken-bites.webp",
      "category": "wings",
      "dietary": ["Halal"]
    },
    {
      "id": "breaded-chicken-wings",
      "name": "Breaded Chicken Wings",
      "description": "Served with ranch",
      "price": 8.99,
      "image": "/images/breaded-chicken-wings.webp",
      "category": "wings",
      "dietary": ["Halal"]
    },
    
    // Chicken Tendies
    {
      "id": "chicken-tendies",
      "name": "Chicken Tendies",
      "description": "Crispy chicken tenders",
      "price": 9.95,
      "image": "/images/chicken-tendies.webp",
      "category": "sides",
      "dietary": ["Halal"]
    },
    
    // Salads
    {
      "id": "donair-salad",
      "name": "Donair Salad",
      "description": "Fresh lettuce, tomatoes, onions and donair meat, topped with creamy homemade sweet sauce",
      "price": 10.95,
      "image": "/images/donair-salad.webp",
      "category": "salads",
      "dietary": ["Halal"]
    },
    {
      "id": "greek-salad",
      "name": "Greek Salad",
      "description": "Fresh romaine lettuce, tomatoes, onions, cucumbers, black olives, green peppers, feta cheese, and vinaigrette Greek dressing",
      "price": 10.95,
      "image": "/images/greek-salad.webp",
      "category": "salads",
      "dietary": ["Halal", "Vegetarian"]
    },
    {
      "id": "chicken-caesar-salad",
      "name": "Chicken Caesar Salad",
      "description": "Fresh romaine lettuce, seasoned croutons, and grilled chicken, topped with Parmesan cheese and Caesar dressing",
      "price": 10.95,
      "image": "/images/chicken-caesar-salad.webp",
      "category": "salads",
      "dietary": ["Halal"]
    },
    
    // Sides
    {
      "id": "gravy",
      "name": "Gravy",
      "description": "Rich, savory gravy",
      "price": 1.50,
      "image": "/images/gravy.webp",
      "category": "sides",
      "dietary": ["Halal"]
    },
    {
      "id": "seasoned-fries",
      "name": "Seasoned Fries",
      "description": "Crispy fries with special seasoning",
      "price": 5.50,
      "image": "/images/seasoned-fries.webp",
      "category": "sides",
      "dietary": ["Halal", "Vegetarian"]
    },
    {
      "id": "chicken-fingers",
      "name": "Chicken Fingers (3 pcs)",
      "description": "Chicken fingers served with fries and plum sauce. One order comes with three pieces",
      "price": 13.95,
      "image": "/images/chicken-fingers.webp",
      "category": "sides",
      "dietary": ["Halal"]
    },
    {
      "id": "fried-mushrooms",
      "name": "Deep-Fried Breaded Mushroom (12 pcs)",
      "description": "Comes with ranch. One order comes with twelve pieces",
      "price": 9.95,
      "image": "/images/fried-mushrooms.webp",
      "category": "sides",
      "dietary": ["Halal", "Vegetarian"]
    },
    {
      "id": "fried-pickles",
      "name": "Deep-Fried Pickles (6 pcs)",
      "description": "Comes with ranch. One order comes with six pieces",
      "price": 9.95,
      "image": "/images/fried-pickles.webp",
      "category": "sides",
      "dietary": ["Halal", "Vegetarian"]
    },
    
    // Dipping Sauce
    {
      "id": "dipping-sauce",
      "name": "Dipping Sauce",
      "description": "Choice of dipping sauce",
      "price": 1.50,
      "image": "/images/dipping-sauce.webp",
      "category": "sides",
      "dietary": ["Halal"]
    },
    
    // Desserts
    {
      "id": "strawberry-cheesecake",
      "name": "Strawberry Cheesecake Slice",
      "description": "By the slice",
      "price": 6.00,
      "image": "/images/strawberry-cheesecake.webp",
      "category": "desserts",
      "dietary": ["Halal"]
    },
    {
      "id": "baklava",
      "name": "Baklava (4 pcs)",
      "description": "One order comes with four pieces of baklava",
      "price": 6.00,
      "image": "/images/baklava.webp",
      "category": "desserts",
      "dietary": ["Halal"]
    },
    
    // Beverages
    {
      "id": "canned-pop",
      "name": "Canned Pop (355 ml)",
      "description": "Assorted soft drinks",
      "price": 2.10,
      "image": "/images/canned-pop.webp",
      "category": "drinks",
      "dietary": ["Halal", "Vegetarian"]
    },
    
    // Two Can Dine / Combos
    {
      "id": "two-can-dine-pizza-wings",
      "name": "One 12\" Medium Pizza with Two Toppings + 10 wings + 2 cans of pop",
      "description": "One order comes with one twelve-inch medium pizza with two toppings on each, ten pieces of chicken wings, and two canned pop",
      "price": 24.99,
      "image": "/images/two-can-dine-pizza-wings.webp",
      "category": "combos",
      "dietary": ["Halal"]
    },
    {
      "id": "two-can-dine-poutines",
      "name": "Two Medium Donair Poutines + 2 cans of pop",
      "description": "Two medium donair poutines with two canned pops",
      "price": 23.99,
      "image": "/images/two-can-dine-poutines.webp",
      "category": "combos",
      "dietary": ["Halal"]
    },
    {
      "id": "two-can-dine-donairs",
      "name": "Two Regular Cheese Donairs",
      "description": "Comes with two fries and two-canned pop",
      "price": 27.99,
      "image": "/images/two-can-dine-donairs.webp",
      "category": "combos",
      "dietary": ["Halal"]
    },
    {
      "id": "two-can-dine-burgers",
      "name": "Two Mushroom Mozzarella Burger",
      "description": "One order comes with two burgers, two fries, ten chicken wings, and two canned pops",
      "price": 34.99,
      "image": "/images/two-can-dine-burgers.webp",
      "category": "combos",
      "dietary": ["Halal"]
    }
  ]
};

export default menuData;
