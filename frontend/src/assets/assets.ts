// Navbar links
interface Navbar {
  name: string,
  path: string
}

export const navLinks: Navbar[] = [{
  name: "Home",
  path: '/'
}, {
  name: 'All Products',
  path: '/products'
}, {
  name: "About",
  path: '/about'
}, {
  name: "Contact",
  path: '/contact'
}, {
  name: "SignUp",
  path: '/signup'
}]



// Categories pic's
import cat_camera from '../assets/Category-Camera.png'
import cat_computer from '../assets/Category-Computer.png'
import cat_phone from '../assets/Category-CellPhone.png'
import cat_gamepad from '../assets/Category-Gamepad.png'
import cat_headphone from '../assets/Category-Headphone.png'
import cat_watch from '../assets/Category-SmartWatch.png'

interface Category {
  title: string,
  image: string,
  path: string
}

export const categories: Category[] = [
  { title: 'Phones', image: cat_phone, path: 'phones' },
  { title: "Camera", image: cat_camera, path: 'camera' },
  { title: 'Computers', image: cat_computer, path: 'computers' },
  { title: 'Gaming', image: cat_gamepad, path: 'gaming' },
  { title: 'HeadPhones', image: cat_headphone, path: 'headphones' },
  { title: 'SmartWatch', image: cat_watch, path: 'smartwatch' }
];




import north_coat from '../assets/north-coat.png'
import gucci_bag from '../assets/gucci-duffle-bag.png'
import cpu_cooler from '../assets/gammax-argb.png'
import book_self from '../assets/book-shelf.png'
import breed_dog_food from '../assets/breed-dog-food.png'
import canon_camera from '../assets/canon-eos-camera.png'
import asus_laptop from '../assets/asus-gaming-laptop.png'
import curology_set from '../assets/curology-product-set.png'
import mercedes_kids_car from '../assets/mercedes-kids-car.png'
import soccer_cleats from '../assets/soccer-cleats.png'
import shooter_gamepad from '../assets/shooter-usb-gamepad.png'
import quilted_jacket from '../assets/quilted-satlin-jacket.png'
import havit_gamepad from '../assets/havit-gamepad.png'
import IPS_LCD from '../assets/lcd.png'
import comfort_chair from '../assets/comfort-chair.png'

// Define the product interface
export interface Product {
  _id: string
  name: string
  category: string
  price: number
  offerPrice?: number
  rating: number
  image: string
  inStock: boolean
  isBestSelling?: boolean
  isOnSale?: boolean
}

// Full product dataset
export const products: Product[] = [
  {
    _id: "prd-001",
    name: "North Coat",
    category: "Fashion",
    price: 120,
    offerPrice: 90,
    rating: 4.5,
    image: north_coat,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "prd-002",
    name: "Gucci Duffle Bag",
    category: "Accessories",
    price: 200,
    offerPrice: 150,
    rating: 4.3,
    image: gucci_bag,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "prd-003",
    name: "RGB Liquid CPU Cooler",
    category: "Computers",
    price: 160,
    offerPrice: 130,
    rating: 4.6,
    image: cpu_cooler,
    inStock: true,
    isBestSelling: true,
    isOnSale: false,
  },
  {
    _id: "prd-004",
    name: "Wooden Book Shelf",
    category: "Furniture",
    price: 110,
    offerPrice: 90,
    rating: 4.2,
    image: book_self,
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "prd-005",
    name: "Breed Dry Dog Food",
    category: "Pets",
    price: 35,
    offerPrice: 30,
    rating: 4.4,
    image: breed_dog_food,
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "prd-006",
    name: "Canon EOS DSLR Camera",
    category: "Camera",
    price: 700,
    offerPrice: 600,
    rating: 4.7,
    image: canon_camera,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "prd-007",
    name: "ASUS FHD Gaming Laptop",
    category: "Computers",
    price: 1200,
    offerPrice: 1000,
    rating: 4.8,
    image: asus_laptop,
    inStock: true,
    isBestSelling: true,
    isOnSale: false,
  },
  {
    _id: "prd-008",
    name: "Curology Product Set",
    category: "Beauty",
    price: 60,
    offerPrice: 50,
    rating: 4.1,
    image: curology_set,
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "prd-009",
    name: "Kids Electric Car",
    category: "Toys",
    price: 300,
    offerPrice: 250,
    rating: 4.5,
    image: mercedes_kids_car,
    inStock: true,
    isBestSelling: true,
    isOnSale: false,
  },
  {
    _id: "prd-010",
    name: "JR. Zoom Soccer Cleats",
    category: "Sports",
    price: 90,
    offerPrice: 70,
    rating: 4.3,
    image: soccer_cleats,
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "prd-011",
    name: "GP11 Shooter USB Gamepad",
    category: "Gaming",
    price: 50,
    offerPrice: 40,
    rating: 4.6,
    image: shooter_gamepad,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "prd-012",
    name: "Quilted Satin Jacket",
    category: "Fashion",
    price: 130,
    offerPrice: 100,
    rating: 4.5,
    image: quilted_jacket,
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  }, {
    _id: "prd-013",
    name: "HAVIT HV-G92 Gamepad",
    category: "Gaming",
    price: 160,
    offerPrice: 130,
    rating: 4.6,
    image: havit_gamepad,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "prd-014",
    name: "IPS LCD Gaming Monitor",
    category: "Gaming",
    price: 50,
    offerPrice: 40,
    rating: 4.6,
    image: IPS_LCD,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  }, {
    _id: "prd-015",
    name: "S-Series Comfort Chair",
    category: "Furniture",
    price: 400,
    offerPrice: 375,
    rating: 4.6,
    image: comfort_chair,
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
];

import perfume from '../assets/perfume-gucci.png'
import playstation from '../assets/ps5-slim-goedkope-playstation.png'
import woman_hat from '../assets/woman-black-hat.png'
import speaker from '../assets/speaker-amazon.png'

interface NewArrival {
  productName: string,
  description: string,
  image: string
}

export const newArrivals: NewArrival[] = [{
  productName: 'PlayStation 5',
  description: 'Black and White version of the PS5 coming out on sale.',
  image: playstation
}, {
  productName: "Woman's Collections ",
  description: 'Featured woman collections that give you another vibe.',
  image: woman_hat
}, {
  productName: 'Speakers',
  description: 'Amazon wireless speakers',
  image: speaker
}, {
  productName: 'Perfume',
  description: 'GUCCI INTENSE OUD EDP',
  image: perfume
}]

