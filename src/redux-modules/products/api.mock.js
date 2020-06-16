export const getAllProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });

export const getAllBrands = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(brands);
    }, 1000);
  });

export const addProduct = (product) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(product), 1000);
  });
};

export const editproduct = (Product) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(Product), 1000);
  });
};

export const deleteProduct = (id) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(id), 1000);
  });
};

export const getProductById = (id) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(product), 1000);
  });
};

export const products = [
  {
    src: "assets/images/Product-1.jpg",
    amount: 10,
    price: 30,
    name: "Caramel Cake",
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 10,
    price: 20,
    name: "Figs Tart",
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 30,
    price: 40,
    name: "Cup Cake",
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 10,
    price: 90,
    name: "Strawberry Cake",
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 10,
    price: 70,
    name: "Pastry Cream",
  },
  {
    src: "assets/images/Product-1.jpg",
    amount: 40,
    price: 20,
    name: "Caramel Cake",
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 10,
    price: 10,
    name: "Figs Tart",
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 10,
    price: 30,
    name: "Cup Cake",
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 10,
    price: 20,
    name: "Strawberry Cake",
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 60,
    price: 60,
    name: "Pastry Cream",
  },
  {
    src: "assets/images/Product-1.jpg",
    amount: 10,
    price: 40,
    name: "Caramel Cake",
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 20,
    price: 80,
    name: "Figs Tart",
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 10,
    price: 40,
    name: "Cup Cake",
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 10,
    price: 20,
    name: "Strawberry Cake",
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 10,
    price: 20,
    name: "Pastry Cream",
  },
  {
    src: "assets/images/Product-1.jpg",
    amount: 10,
    price: 20,
    name: "Caramel Cake",
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 10,
    price: 20,
    name: "Figs Tart",
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 10,
    price: 20,
    name: "Cup Cake",
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 10,
    price: 20,
    name: "Strawberry Cake",
  },
  {
    src: "assets/images/donut.jpg",
    amount: 30,
    price: 30,
    name: "Dounts",
  },
];

export const brands = [
  {
    src: "assets/images/ElAbd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Al Abd",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
  {
    src: "assets/images/lo.png",
    description: "this is a brand",
    price: 20,
    name: "Sale Sucre",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
  {
    src: "assets/images/lo.png",
    description: "this is a brand",
    price: 20,
    name: "Sale Sucre",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
  {
    src: "assets/images/lo.png",
    description: "this is a brand",
    price: 20,
    name: "Sale Sucre",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
];

const product = {
  src: "assets/images/Product-1.jpg",
  amount: 10,
  price: 30,
  name: "Caramel Cake",
};
