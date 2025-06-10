// menu-template.js
// The Donair Guys menu data
// Populated with actual menu information

export const menuData = {
  categories: [
    {
      id: "donairs",
      name: "Donairs & Wraps",
      description: "Our signature 100% Halal donairs with sweet garlic sauce",
      items: [
        {
          id: "beef-donair",
          name: "Beef Donair",
          description: "Comes with Swiss Cheese",
          price: 12.95,
          ingredients: [
            "Halal beef",
            "Swiss cheese",
            "Pita bread",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Sweet sauce",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/beef-donair.webp",
        },
        {
          id: "chicken-shawarma-donair",
          name: "Chicken Shawarma Donair",
          description: "Comes with Swiss Cheese",
          price: 13.95,
          ingredients: [
            "Halal chicken shawarma",
            "Swiss cheese",
            "Pita bread",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Garlic sauce",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/chicken-shawarma-donair.webp",
        },
        {
          id: "mixed-donair",
          name: "Mixed Donair",
          description: "Comes with Swiss Cheese",
          price: 14.95,
          ingredients: [
            "Halal beef",
            "Halal chicken",
            "Swiss cheese",
            "Pita bread",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Mixed sauces",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/mixed-donair.webp",
        },
      ],
    },
    {
      id: "pizza",
      name: "Pizza",
      description: "100% Halal pizzas with premium ingredients",
      items: [
        // 8" Personalized Pizzas
        {
          id: "8-cheese-blend-pizza",
          name: '8" Personalized 5 Cheese Blend Pizza',
          size: '8"',
          description:
            "Mozzarella, cheddar, asiago, feta, and Parmesan cheese.",
          price: 11.95,
          ingredients: [
            "Mozzarella",
            "Cheddar",
            "Asiago",
            "Feta",
            "Parmesan cheese",
          ],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/5-cheese-pizza.webp",
        },
        {
          id: "8-dgs-special-pizza",
          name: "8\" Personalized DG's Special Pizza",
          size: '8"',
          description:
            "Pepperoni, mushrooms, bacon, onions, green pepper, and pineapple.",
          price: 11.95,
          ingredients: [
            "Pepperoni",
            "Mushrooms",
            "Turkey bacon",
            "Onions",
            "Green pepper",
            "Pineapple",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/dgs-special-pizza.webp",
        },
        {
          id: "8-meat-lovers-pizza",
          name: '8" Personalized Meat Lovers Pizza',
          size: '8"',
          description: "Pepperoni, bacon, Grilled Chicken, and ground beef.",
          price: 11.95,
          ingredients: [
            "Pepperoni",
            "Turkey bacon",
            "Grilled chicken",
            "Ground beef",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/meat-lovers-pizza.webp",
        },
        {
          id: "8-donair-pizza",
          name: '8" Personalized Donair Pizza',
          size: '8"',
          description:
            "Donair sauce, donair meat, fresh tomatoes, onions, and double mozzarella cheese.",
          price: 11.95,
          ingredients: [
            "Donair sauce",
            "Donair meat",
            "Fresh tomatoes",
            "Onions",
            "Double mozzarella cheese",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/donair-pizza.webp",
        },
        {
          id: "8-greek-pizza",
          name: '8" Personalized Greek Pizza',
          size: '8"',
          description:
            "Seasoned ground beef, onions, black olives, mushrooms, feta cheese, and fresh tomatoes.",
          price: 11.95,
          ingredients: [
            "Seasoned ground beef",
            "Onions",
            "Black olives",
            "Mushrooms",
            "Feta cheese",
            "Fresh tomatoes",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/greek-pizza.webp",
        },
        {
          id: "8-vegetarian-pizza",
          name: '8" Personalized Famous Vegetarian Pizza',
          size: '8"',
          description:
            "Mushrooms, onions, green pepper, pineapple, black olives, and fresh tomatoes.",
          price: 11.95,
          ingredients: [
            "Mushrooms",
            "Onions",
            "Green pepper",
            "Pineapple",
            "Black olives",
            "Fresh tomatoes",
          ],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/vegetarian-pizza.webp",
        },
        {
          id: "8-bbq-chicken-pizza",
          name: '8" Personalized BBQ Chicken Pizza',
          size: '8"',
          description:
            "Barbeque sauce, barbeque chicken, onions, green peppers, and fresh tomatoes.",
          price: 11.95,
          ingredients: [
            "BBQ sauce",
            "BBQ chicken",
            "Onions",
            "Green peppers",
            "Fresh tomatoes",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/bbq-chicken-pizza.webp",
        },
        {
          id: "8-spicy-chicken-pizza",
          name: '8" Personalized Spicy Chicken Pizza',
          size: '8"',
          description:
            "Secret spicy sauce, spicy grilled chicken, green peppers, mushrooms, banana peppers, and jalapeno peppers.",
          price: 11.95,
          ingredients: [
            "Secret spicy sauce",
            "Spicy grilled chicken",
            "Green peppers",
            "Mushrooms",
            "Banana peppers",
            "Jalapeno peppers",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: true,
          },
          popular: false,
          image: "/images/spicy-chicken-pizza.webp",
        },
        {
          id: "8-bacon-cheeseburger-pizza",
          name: '8" Personalized Bacon N Cheeseburger Pizza',
          size: '8"',
          description:
            "Turkey bacon, ground beef, mushrooms, onions, cheddar, and mozzarella cheese.",
          price: 11.95,
          ingredients: [
            "Turkey bacon",
            "Ground beef",
            "Mushrooms",
            "Onions",
            "Cheddar cheese",
            "Mozzarella cheese",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/bacon-cheeseburger-pizza.webp",
        },
        {
          id: "8-spicy-mexican-pizza",
          name: '8" Personalized Spicy Mexican Pizza',
          size: '8"',
          description:
            "Secret hot sauce, bacon, ground beef, onions, jalapeno peppers, cheddar, and mozzarella cheese.",
          price: 11.95,
          ingredients: [
            "Secret hot sauce",
            "Turkey bacon",
            "Ground beef",
            "Onions",
            "Jalapeno peppers",
            "Cheddar cheese",
            "Mozzarella cheese",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: true,
          },
          popular: false,
          image: "/images/spicy-mexican-pizza.webp",
        },
        {
          id: "8-buffalo-chicken-pizza",
          name: '8" Personalized Buffalo Chicken Pizza',
          size: '8"',
          description:
            "Spicy buffalo sauce, grilled chicken, onions, green peppers, and banana peppers.",
          price: 11.95,
          ingredients: [
            "Spicy buffalo sauce",
            "Grilled chicken",
            "Onions",
            "Green peppers",
            "Banana peppers",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: true,
          },
          popular: false,
          image: "/images/buffalo-chicken-pizza.webp",
        },
        {
          id: "8-mediterranean-pizza",
          name: '8" Personalized Light Mediterranean Pizza',
          size: '8"',
          description:
            "Fresh baby spinach, grilled chicken, goat feta, onion, and fresh tomatoes.",
          price: 11.95,
          ingredients: [
            "Fresh baby spinach",
            "Grilled chicken",
            "Goat feta",
            "Onion",
            "Fresh tomatoes",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/mediterranean-pizza.webp",
        },
        {
          id: "8-chicken-shawarma-pizza",
          name: '8" Personalized Chicken Shawarma Pizza',
          size: '8"',
          description:
            "Chicken shawarma, onions, mushrooms, green peppers, cooked tomatoes, and banana peppers, topped with garlic sauce.",
          price: 11.95,
          ingredients: [
            "Chicken shawarma",
            "Onions",
            "Mushrooms",
            "Green peppers",
            "Cooked tomatoes",
            "Banana peppers",
            "Garlic sauce",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/chicken-shawarma-pizza.webp",
        },
        {
          id: "8-rosemary-chicken-pizza",
          name: '8" Personalized Rosemary Chicken Pizza',
          size: '8"',
          description:
            "DG's tomato sauce, mozzarella cheese, fresh garlic, grilled rosemary spiced chicken, mushrooms, and cooked tomatoes.",
          price: 11.95,
          ingredients: [
            "DG's tomato sauce",
            "Mozzarella cheese",
            "Fresh garlic",
            "Grilled rosemary spiced chicken",
            "Mushrooms",
            "Cooked tomatoes",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/rosemary-chicken-pizza.webp",
        },
        // 10" Small Pizzas
        {
          id: "10-cheese-blend-pizza",
          name: '10" Small 5 Cheese Blend Pizza',
          size: '10"',
          description:
            "Mozzarella, cheddar, asiago, feta, and Parmesan cheese. Six slices.",
          price: 15.95,
          ingredients: [
            "Mozzarella",
            "Cheddar",
            "Asiago",
            "Feta",
            "Parmesan cheese",
          ],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/5-cheese-pizza.webp",
        },
        {
          id: "10-dgs-special-pizza",
          name: "10\" Small DG's Special Pizza",
          size: '10"',
          description:
            "Pepperoni, mushrooms, bacon, onions, green pepper, and pineapple. Six slices.",
          price: 15.95,
          ingredients: [
            "Pepperoni",
            "Mushrooms",
            "Turkey bacon",
            "Onions",
            "Green pepper",
            "Pineapple",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/dgs-special-pizza.webp",
        },
        {
          id: "10-meat-lovers-pizza",
          name: '10" Small Meat Lovers Pizza',
          size: '10"',
          description:
            "Pepperoni, bacon, Grilled Chicken, and ground beef. Six slices.",
          price: 15.95,
          ingredients: [
            "Pepperoni",
            "Turkey bacon",
            "Grilled chicken",
            "Ground beef",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/meat-lovers-pizza.webp",
        },
      ],
    },
    {
      id: "burgers",
      name: "Burgers",
      description: "100% Halal burgers with fresh toppings",
      items: [
        {
          id: "regular-burger",
          name: "Regular Burger",
          description: "Classic burger with fresh toppings",
          price: 9.95,
          ingredients: [
            "Halal beef patty",
            "Burger bun",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Pickles",
            "Ketchup",
            "Mustard",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/regular-burger.webp",
        },
        {
          id: "cheese-burger",
          name: "Cheese Burger",
          description: "Classic burger topped with cheese",
          price: 10.95,
          ingredients: [
            "Halal beef patty",
            "Cheese",
            "Burger bun",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Pickles",
            "Ketchup",
            "Mustard",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/cheese-burger.webp",
        },
        {
          id: "donair-burger",
          name: "Donair Burger",
          description: "Comes with sweet sauce",
          price: 10.95,
          ingredients: [
            "Halal beef patty",
            "Burger bun",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Sweet donair sauce",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/donair-burger.webp",
        },
        {
          id: "mushroom-mozzarella-burger",
          name: "Mushroom Mozzarella Burger",
          description:
            "Burger topped with sauteed mushrooms and melted mozzarella cheese",
          price: 11.95,
          ingredients: [
            "Halal beef patty",
            "Sauteed mushrooms",
            "Mozzarella cheese",
            "Burger bun",
            "Lettuce",
            "Tomatoes",
            "Onions",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/mushroom-mozzarella-burger.webp",
        },
        {
          id: "mushroom-special-burger",
          name: "Mushroom Special Burger",
          description:
            "Double patty topped with sauteed onions, mushrooms, cheese, and turkey bacon",
          price: 11.95,
          ingredients: [
            "Double halal beef patty",
            "Sauteed onions",
            "Mushrooms",
            "Cheese",
            "Turkey bacon",
            "Burger bun",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/mushroom-special-burger.webp",
        },
      ],
    },
    {
      id: "poutine",
      name: "Poutine",
      description: "Delicious poutine with our signature toppings",
      items: [
        {
          id: "poutine",
          name: "Poutine",
          description: "Seasoned fries topped with mozzarella cheese and gravy",
          price: 6.99,
          ingredients: ["Seasoned fries", "Mozzarella cheese", "Gravy"],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/poutine.webp",
        },
      ],
    },
    {
      id: "wings",
      name: "Wings",
      description: "Chicken wings served with ranch",
      items: [
        {
          id: "chicken-wings",
          name: "Chicken Wings",
          description: "Served with ranch. All wings are served with ranch",
          price: 7.99,
          ingredients: ["Halal chicken wings", "Ranch dip"],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/chicken-wings.webp",
        },
        {
          id: "boneless-chicken-bites",
          name: "Boneless Chicken Bites",
          description: "Boneless chicken bites served with ranch",
          price: 13.95,
          ingredients: ["Halal boneless chicken", "Ranch dip"],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/boneless-chicken-bites.webp",
        },
        {
          id: "breaded-chicken-wings",
          name: "Breaded Chicken Wings",
          description: "Served with ranch",
          price: 8.99,
          ingredients: ["Halal breaded chicken wings", "Ranch dip"],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: false,
          image: "/images/breaded-chicken-wings.webp",
        },
      ],
    },
    {
      id: "salads",
      name: "Salads",
      description: "Fresh salads with premium ingredients",
      items: [
        {
          id: "donair-salad",
          name: "Donair Salad",
          description:
            "Fresh lettuce, tomatoes, onions and donair meat, topped with creamy homemade sweet sauce",
          price: 10.95,
          ingredients: [
            "Fresh lettuce",
            "Tomatoes",
            "Onions",
            "Donair meat",
            "Sweet sauce",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            spicy: false,
          },
          popular: false,
          image: "/images/donair-salad.webp",
        },
        {
          id: "greek-salad",
          name: "Greek Salad",
          description:
            "Fresh romaine lettuce, tomatoes, onions, cucumbers, black olives, green peppers, feta cheese, and vinaigrette Greek dressing",
          price: 10.95,
          ingredients: [
            "Romaine lettuce",
            "Tomatoes",
            "Onions",
            "Cucumbers",
            "Black olives",
            "Green peppers",
            "Feta cheese",
            "Greek dressing",
          ],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: true,
            spicy: false,
          },
          popular: true,
          image: "/images/greek-salad.webp",
        },
        {
          id: "chicken-caesar-salad",
          name: "Chicken Caesar Salad",
          description:
            "Fresh romaine lettuce, seasoned croutons, and grilled chicken, topped with Parmesan cheese and Caesar dressing",
          price: 10.95,
          ingredients: [
            "Romaine lettuce",
            "Seasoned croutons",
            "Grilled chicken",
            "Parmesan cheese",
            "Caesar dressing",
          ],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          popular: true,
          image: "/images/chicken-caesar-salad.webp",
        },
      ],
    },
    {
      id: "sides",
      name: "Sides & Extras",
      description: "Delicious sides to complement your meal",
      items: [
        {
          id: "seasoned-fries",
          name: "Seasoned Fries",
          description: "Crispy fries with special seasoning",
          price: 5.5,
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: true,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/seasoned-fries.webp",
        },
        {
          id: "gravy",
          name: "Gravy",
          description: "Rich, savory gravy",
          price: 1.5,
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            spicy: false,
          },
          image: "/images/gravy.webp",
        },
        {
          id: "chicken-tendies",
          name: "Chicken Tendies",
          description: "Crispy chicken tenders",
          price: 9.95,
          ingredients: ["Halal chicken tenders"],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/chicken-tendies.webp",
        },
        {
          id: "chicken-fingers",
          name: "Chicken Fingers (3 pcs)",
          description:
            "Chicken fingers served with fries and plum sauce. One order comes with three pieces",
          price: 13.95,
          ingredients: ["Halal chicken fingers", "Fries", "Plum sauce"],
          dietary: {
            halal: true,
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/chicken-fingers.webp",
        },
        {
          id: "fried-mushrooms",
          name: "Deep-Fried Breaded Mushroom (12 pcs)",
          description: "Comes with ranch. One order comes with twelve pieces",
          price: 9.95,
          ingredients: ["Breaded mushrooms", "Ranch dip"],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/fried-mushrooms.webp",
        },
        {
          id: "fried-pickles",
          name: "Deep-Fried Pickles (6 pcs)",
          description: "Comes with ranch. One order comes with six pieces",
          price: 9.95,
          ingredients: ["Breaded pickles", "Ranch dip"],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/fried-pickles.webp",
        },
        {
          id: "dipping-sauce",
          name: "Dipping Sauce",
          description: "Choice of dipping sauce",
          price: 1.5,
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: true,
            spicy: false,
          },
          image: "/images/dipping-sauce.webp",
        },
      ],
    },
    {
      id: "drinks",
      name: "Beverages",
      description: "Refreshing beverages",
      items: [
        {
          id: "canned-pop",
          name: "Canned Pop (355 ml)",
          description: "Assorted soft drinks",
          price: 2.1,
          options: ["Coke", "Sprite", "Orange", "Root Beer", "Ginger Ale"],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: true,
            glutenFree: true,
            spicy: false,
          },
          image: "/images/canned-pop.webp",
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet treats to finish your meal",
      items: [
        {
          id: "strawberry-cheesecake",
          name: "Strawberry Cheesecake Slice",
          description: "By the slice",
          price: 6.0,
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/strawberry-cheesecake.webp",
        },
        {
          id: "baklava",
          name: "Baklava (4 pcs)",
          description: "One order comes with four pieces of baklava",
          price: 6.0,
          ingredients: ["Phyllo dough", "Honey", "Nuts", "Syrup"],
          dietary: {
            halal: true,
            vegetarian: true,
            vegan: false,
            glutenFree: false,
            spicy: false,
          },
          image: "/images/baklava.webp",
        },
      ],
    },
  ],

  // Combo meals
  combos: [
    {
      id: "two-can-dine-pizza-wings",
      name: "Pizza & Wings Combo",
      description:
        'One 12" Medium Pizza with Two Toppings + 10 wings + 2 cans of pop',
      price: 24.99,
      includes: [
        '12" pizza with 2 toppings',
        "10 chicken wings",
        "2 canned pops",
      ],
      savings: 5.0,
      dietary: {
        halal: true,
      },
      image: "/images/two-can-dine-pizza-wings.webp",
    },
    {
      id: "two-can-dine-poutines",
      name: "Poutine Combo",
      description: "Two Medium Donair Poutines + 2 cans of pop",
      price: 23.99,
      includes: ["2 medium donair poutines", "2 canned pops"],
      savings: 3.0,
      dietary: {
        halal: true,
      },
      image: "/images/two-can-dine-poutines.webp",
    },
    {
      id: "two-can-dine-donairs",
      name: "Donair Combo",
      description:
        "Two Regular Cheese Donairs with two fries and two canned pops",
      price: 27.99,
      includes: [
        "2 regular cheese donairs",
        "2 seasoned fries",
        "2 canned pops",
      ],
      savings: 4.0,
      dietary: {
        halal: true,
      },
      image: "/images/two-can-dine-donairs.webp",
    },
    {
      id: "two-can-dine-burgers",
      name: "Burger Combo",
      description:
        "Two Mushroom Mozzarella Burgers with two fries, ten chicken wings, and two canned pops",
      price: 34.99,
      includes: [
        "2 mushroom mozzarella burgers",
        "2 seasoned fries",
        "10 chicken wings",
        "2 canned pops",
      ],
      savings: 6.0,
      dietary: {
        halal: true,
      },
      image: "/images/two-can-dine-burgers.webp",
    },
  ],

  // Special notes about the menu
  menuNotes: {
    halalCertification: "All meat is 100% Halal certified",
    customization:
      "Most items can be customized to your preference. Ask our staff for options.",
    allergies:
      "Please inform staff of any allergies or dietary restrictions. Cross-contamination may occur in our kitchen.",
    lastUpdated: "2024-01-15",
  },
};

// Helper function to get all items in a category
export function getItemsByCategory(categoryId) {
  const category = menuData.categories.find((cat) => cat.id === categoryId);
  return category ? category.items : [];
}

// Helper function to get all vegetarian items
export function getVegetarianItems() {
  const vegItems = [];
  menuData.categories.forEach((category) => {
    category.items.forEach((item) => {
      if (item.dietary?.vegetarian) {
        vegItems.push({ ...item, category: category.name });
      }
    });
  });
  return vegItems;
}

// Helper function to get popular items
export function getPopularItems() {
  const popularItems = [];
  menuData.categories.forEach((category) => {
    category.items.forEach((item) => {
      if (item.popular) {
        popularItems.push({ ...item, category: category.name });
      }
    });
  });
  return popularItems;
}

// Validation helper
export function validateMenuData() {
  let hasErrors = false;
  const errors = [];

  menuData.categories.forEach((category) => {
    category.items.forEach((item) => {
      if (item.price === 0) {
        errors.push(`Missing price for: ${item.name}`);
        hasErrors = true;
      }
      if (item.description?.includes("FILL_IN")) {
        errors.push(`Missing description for: ${item.name}`);
        hasErrors = true;
      }
    });
  });

  if (hasErrors) {
    console.warn("Menu validation errors:", errors);
  }

  return !hasErrors;
}
