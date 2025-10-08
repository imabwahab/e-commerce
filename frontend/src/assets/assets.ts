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
  { title: ' Laptops', image: cat_computer, path: 'Laptops' },
  { title: 'Gaming', image: cat_gamepad, path: 'gaming' },
  { title: 'HeadPhones', image: cat_headphone, path: 'headphones' },
  { title: 'SmartWatch', image: cat_watch, path: 'smartwatch' }

];





import north_coat from './north-coat.png'
import gucci_bag from './gucci-duffle-bag.png'
import cpu_cooler from './gammax-argb.png'
import book_self from './book-shelf.png'
import breed_dog_food from './breed-dog-food.png'
import canon_camera from './canon-eos-camera.png'
import asus_laptop from './asus-gaming-laptop.png'
import curology_set from './curology-product-set.png'
import mercedes_kids_car from './mercedes-kids-car.png'
import soccer_cleats from './soccer-cleats.png'
import shooter_gamepad from './shooter-usb-gamepad.png'
import quilted_jacket from './quilted-satlin-jacket.png'
import havit_gamepad from './havit-gamepad.png'
import IPS_LCD from './lcd.png'
import comfort_chair from './comfort-chair.png'


// Product interface

export interface Product {
  _id: string
  userId: string
  name: string
  description: string
  category: string
  price: number
  offerPrice: number
  rating: number
  image: string | string[]
  inStock: boolean
  isBestSelling: boolean
  isOnSale: boolean
}



export const dummyProducts: Product[] = [
  // Local products
  {
    _id: "prd-001",
    userId: "local",
    name: "North Coat",
    description: "Warm and stylish North Coat — perfect for cold seasons.",
    category: "Fashion",
    price: 120,
    offerPrice: 90, // on sale -> different
    rating: 4.5,
    image: [north_coat],
    inStock: true,
    isBestSelling: true,
    isOnSale: true

  },
  {
    _id: "prd-002",
    userId: "local",
    name: "Gucci Duffle Bag",
    description: "Spacious duffle bag with premium finishing.",
    category: "Accessories",
    price: 200,
    offerPrice: 150,
    rating: 4.3,
    image: [gucci_bag],
    inStock: true,
    isBestSelling: true,
    isOnSale: true

  },
  {
    _id: "prd-003",
    userId: "local",
    name: "RGB Liquid CPU Cooler",
    description: "High-performance liquid cooler with ARGB lighting.",
    category: "Laptops",
    price: 160,
    offerPrice: 160, // not on sale -> same
    rating: 4.6,
    image: [cpu_cooler],
    inStock: true,
    isBestSelling: true,
    isOnSale: false,

  },
  {
    _id: "prd-004",
    userId: "local",
    name: "Wooden Book Shelf",
    description: "Compact wooden bookshelf suitable for small rooms.",
    category: "Furniture",
    price: 110,
    offerPrice: 110,
    rating: 4.2,
    image: [book_self],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,

  },
  {
    _id: "prd-005",
    userId: "local",
    name: "Breed Dry Dog Food",
    description: "Nutritious dry food for adult dogs.",
    category: "Pets",
    price: 35,
    offerPrice: 35,
    rating: 4.4,
    image: [breed_dog_food],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,

  },
  {
    _id: "prd-006",
    userId: "local",
    name: "Canon EOS DSLR Camera",
    description: "Reliable DSLR camera for hobbyists and pros.",
    category: "Camera",
    price: 700,
    offerPrice: 600, // on sale
    rating: 4.7,
    image: [canon_camera],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,

  },
  {
    _id: "prd-007",
    userId: "local",
    name: "ASUS FHD Gaming Laptop",
    description: "Gaming laptop with solid performance for mid-range budgets.",
    category: "Laptops",
    price: 1200,
    offerPrice: 1200,
    rating: 4.8,
    image: [asus_laptop],
    inStock: true,
    isBestSelling: true,
    isOnSale: false,

  },
  {
    _id: "prd-008",
    userId: "local",
    name: "Curology Product Set",
    description: "Skincare product set for daily routine.",
    category: "Beauty",
    price: 60,
    offerPrice: 50,
    rating: 4.1,
    image: [curology_set],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,

  },
  {
    _id: "prd-009",
    userId: "local",
    name: "Kids Electric Car",
    description: "Battery-powered kids car with fun lights and music.",
    category: "Toys",
    price: 300,
    offerPrice: 250,
    rating: 4.5,
    image: [mercedes_kids_car],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,

  },
  {
    _id: "prd-010",
    userId: "local",
    name: "JR. Zoom Soccer Cleats",
    description: "Youth soccer cleats offering good grip and comfort.",
    category: "Sports",
    price: 90,
    offerPrice: 90,
    rating: 4.3,
    image: [soccer_cleats],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,

  },
  {
    _id: "prd-011",
    userId: "local",
    name: "GP11 Shooter USB Gamepad",
    description: "Compact USB gamepad for PC and console emulators.",
    category: "Gaming",
    price: 50,
    offerPrice: 50,
    rating: 4.6,
    image: [shooter_gamepad],
    inStock: true,
    isBestSelling: true,
    isOnSale: false,

  },
  {
    _id: "prd-012",
    userId: "local",
    name: "Quilted Satin Jacket",
    description: "Premium satin jacket with quilted pattern.",
    category: "Fashion",
    price: 130,
    offerPrice: 100,
    rating: 4.5,
    image: [quilted_jacket],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,

  },
  {
    _id: "prd-013",
    userId: "local",
    name: "HAVIT HV-G92 Gamepad",
    description: "Havit wired gamepad with ergonomic design.",
    category: "Gaming",
    price: 160,
    offerPrice: 130,
    rating: 4.6,
    image: [havit_gamepad],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,

  },
  {
    _id: "prd-014",
    userId: "local",
    name: "IPS LCD Gaming Monitor",
    description: "24-inch IPS gaming monitor with 144Hz refresh.",
    category: "Gaming",
    price: 250,
    offerPrice: 200,
    rating: 4.6,
    image: [IPS_LCD],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,

  },
  {
    _id: "prd-015",
    userId: "local",
    name: "S-Series Comfort Chair",
    description: "Ergonomic comfort chair for home/office.",
    category: "Furniture",
    price: 400,
    offerPrice: 375,
    rating: 4.6,
    image: [comfort_chair],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,

  },

  // ---------- Dummy API products (kept original _id values) ----------
  {
    _id: "67a1f4e43f34a77b6dde9144",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Apple AirPods Pro 2nd gen",
    description:
      "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) — active noise cancellation & great fit.",
    category: "Earphone",
    price: 499.99,
    offerPrice: 399.99,
    rating: 4.8,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k4dafzhwhgcn5tnoylrw.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/j212frakb8hdrhvhajhg.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/imwuugqxsajuwqpkegb5.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k1oqaslw5tb3ebw01vvj.webp"
    ],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f52e3f34a77b6dde914a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Bose QuietComfort 45",
    description:
      "Bose QC45 headphones: top noise cancellation and comfortable design with long battery life.",
    category: "Headphone",
    price: 429.99,
    offerPrice: 329.99,
    rating: 4.7,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/m16coelz8ivkk9f0nwrz.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f5663f34a77b6dde914c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Samsung Galaxy S23",
    description:
      "Samsung Galaxy S23 with advanced AMOLED display and high-end performance.",
    category: "phones",
    price: 899.99,
    offerPrice: 799.99,
    rating: 4.7,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/xjd4eprpwqs7odbera1w.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f5993f34a77b6dde914e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Garmin Venu 2",
    description:
      "Garmin Venu 2 — advanced fitness tracking, GPS and AMOLED display.",
    category: "Smartwatch",
    price: 399.99,
    offerPrice: 349.99,
    rating: 4.5,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/hdfi4u3fmprazpnrnaga.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f5ef3f34a77b6dde9150",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "PlayStation 5",
    description:
      "PlayStation 5 — ultra-HD graphics, super-fast SSD and exceptional gaming experience.",
    category: "Gaming",
    price: 599.99,
    offerPrice: 499.99,
    rating: 4.8,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/dd3l13vfoartrgbvkkh5.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f70c3f34a77b6dde9156",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Canon EOS R5",
    description:
      "Canon EOS R5 — 45MP full-frame mirrorless camera, great for photo & video pros.",
    category: "Camera",
    price: 4199.99,
    offerPrice: 3899.99,
    rating: 4.9,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/r5h370zuujvrw461c6wy.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f7c93f34a77b6dde915a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "MacBook Pro 16",
    description:
      "MacBook Pro 16 (M2 Pro) — powerful machine for professionals and creatives.",
    category: "Laptops",
    price: 2799.99,
    offerPrice: 2499.99,
    rating: 4.9,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/rzri7kytphxalrm9rubd.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f8363f34a77b6dde915c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Sony WF-1000XM5",
    description:
      "Sony WF-1000XM5 true wireless earbuds with Hi-Res Audio and excellent ANC.",
    category: "Earphone",
    price: 349.99,
    offerPrice: 299.99,
    rating: 4.7,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/e3zjaupyumdkladmytke.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1f85e3f34a77b6dde915e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Samsung Projector 4k",
    description:
      "Samsung 4K projector for home theatre and presentations with excellent color.",
    category: "Accessories",
    price: 1699.99,
    offerPrice: 1499.99,
    rating: 4.6,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/qqdcly8a8vkyciy9g0bw.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  },
  {
    _id: "67a1fa4b3f34a77b6dde9166",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "ASUS ROG Zephyrus G16",
    description:
      "ASUS ROG Zephyrus G16 — high-end gaming laptop with Intel Core i9 and RTX 4070.",
    category: "Laptops",
    price: 2199.99,
    offerPrice: 1999.99,
    rating: 4.8,
    image: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/wig1urqgnkeyp4t2rtso.webp"],
    inStock: true,
    isBestSelling: true,
    isOnSale: true
  }
]


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

