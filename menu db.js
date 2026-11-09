/* db.js - Viella's Café Product Database & Storage Helper */

const DB = {
  // Database of drinks and seasonal items
  products: [
    {
      id: 1,
      name: "Iced Coffee with Whipped Cream",
      category: "Iced Coffees",
      description: "A refreshing iced coffee topped with a generous swirl of whipped cream.",
      seasonal: false,
      prices: { S: 22.00, M: 26.00, L: 30.00 }
    },
    {
      id: 2,
      name: "Blended Mocha Latte",
      category: "Blended Drinks",
      description: "A smooth, chocolatey blended coffee drink topped with whipped cream.",
      seasonal: false,
      prices: { S: 25.00, M: 30.00, L: 35.00 }
    },
    {
      id: 3,
      name: "Midnight Mocha",
      category: "Hot Favourites",
      description: "A rich and indulgent blend of espresso, chocolate, and steamed milk.",
      seasonal: false,
      prices: { S: 24.00, M: 28.00, L: 32.00 }
    },
    {
      id: 4,
      name: "Caramel Toffee Iced Coffee",
      category: "Iced Coffees",
      description: "A sweet and creamy iced coffee infused with caramel and toffee flavors.",
      seasonal: false,
      prices: { S: 25.00, M: 29.00, L: 33.00 }
    },
    {
      id: 5,
      name: "Strawberry Swirl",
      category: "Blended Drinks",
      description: "A delightful blend of fresh strawberries and creamy milk, perfect for a refreshing treat.",
      seasonal: false,
      prices: { S: 23.00, M: 27.00, L: 31.00 }
    },
    {
      id: 6,
      name: "Coconut Iced Latte",
      category: "Iced Coffees",
      description: "A tropical twist on the classic iced latte, made with coconut milk and a hint of vanilla. Topped with coconut shavings.",
      seasonal: false,
      prices: { S: 26.00, M: 31.00, L: 36.00 }
    },
    {
      id: 7,
      name: "Snowflake Wonderland Hot Chocolate",
      category: "Seasonal",
      description: "Creamy white chocolate topped with marshmallow foam and edible shimmer.",
      seasonal: true,
      prices: { S: 28.00, M: 32.00, L: 37.00 }
    },
    {
      id: 8,
      name: "Peppermint Hot Chocolate Tea",
      category: "Seasonal",
      description: "Rich cocoa infused with peppermint tea leaves for a crisp, festive finish.",
      seasonal: true,
      prices: { S: 27.00, M: 31.00, L: 35.00 }
    }
  ],

  // Fetch method used by menu script
  get: function (key) {
    if (key === "products") {
      return this.products;
    }
    return null;
  }
};

/* Shopping Cart Helper Utility */
const Cart = {
  getCart: function () {
    return JSON.parse(localStorage.getItem("viella_cart") || "[]");
  },

  add: function (productId, size, quantity = 1) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(
      item => item.id === productId && item.size === size
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ id: productId, size: size, quantity: quantity });
    }

    localStorage.setItem("viella_cart", JSON.stringify(cart));
  }
};