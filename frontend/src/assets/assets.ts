// Hero Section Categories Links
export const sidebarLinks = [
  { catName: "Woman's Fashion", path: 'women-fashion' },
  { catName: "Men's Fashion", path: 'men-fashion' },
  { catName: "Kid's Fashion", path: 'kid-fashion' },
  { catName: "Electronics", path: 'electronics' },
  { catName: "Lifestyle", path: 'lifestyle' },
  { catName: "Medicine", path: 'medicine' },
  { catName: "Sports", path: 'sports' },
  { catName: "Toys", path: 'toys' },
  { catName: "Groceries", path: "groceries" },
  { catName: "Beauty", path: "beauty" },
  { catName: "Health ", path: "health" }
];


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
  name: "Signup",
  path: '/signup'
}]



// Categories pic's
import cat_camera from '../assets/Category-Camera.png'
import cat_computer from '../assets/Category-Computer.png'
import cat_phone from '../assets/Category-CellPhone.png'
import cat_gamepad from '../assets/Category-Gamepad.png'
import cat_headphone from '../assets/Category-Headphone.png'
import cat_watch from '../assets/Category-SmartWatch.png'

// Cateogories
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
  { title: 'SmartWatch', image: cat_watch, path: 'smartwatch' },

  { title: 'Phones', image: cat_phone, path: 'phones' },
  { title: "Camera", image: cat_camera, path: 'camera' },
  { title: ' Laptops', image: cat_computer, path: 'Laptops' },
  { title: 'Gaming', image: cat_gamepad, path: 'gaming' },
  { title: 'HeadPhones', image: cat_headphone, path: 'headphones' },
  { title: 'SmartWatch', image: cat_watch, path: 'smartwatch' }
];

// Stats
import stat_1 from '../assets/Stat-1.png'
import stat_2 from '../assets/Stat-2.png'
import stat_3 from '../assets/Stat-3.png'
import stat_4 from '../assets/Stat-4.png'


// About section Stat interface
interface Stat {
  number: number,
  desc: string,
  image: string
}

// Stats info
export const stats: Stat[] = [
  { number: 10.5, desc: 'Sallers active our site', image: stat_1 },
  { number: 33, desc: 'Sallers active our site', image: stat_2 },
  { number: 45.5, desc: 'Sallers active our site', image: stat_3 },
  { number: 25, desc: 'Sallers active our site', image: stat_4 },
];

// Services images
import service_1 from '../assets/Service-1.png'
import service_2 from '../assets/Service-2.png'
import service_3 from '../assets/Service-3.png'

// Servies interface
interface Service {
  heading: string,
  desc: string,
  image: string
}

export const services: Service[] = [
  {heading: "Free and fast delivery", desc: "Free delivery for all orders over $140", image: service_1},
  {heading: "24/7 Customer service", desc: "Friendly 24/7 customer support", image: service_2},
  {heading: "Money Back Gurantee", desc: "We reurn money within 30 days", image: service_3}
]


export interface Member {
  name: string,
  designation: string,
  image: string
}

import founder from '../assets/founder.png'
import managing_director from '../assets/managing-director.png'
import product_designer from '../assets/product-designer.png'

export const teamMember: Member[] = [
  { name: 'Tim Bruise', designation: "Founder & Chairman", image: founder },
  { name: 'Lady Jain', designation: "Product Designer", image: product_designer },
  { name: 'McCullum', designation: "Managing Director", image: managing_director },
]




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


// fashion products
import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";


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
  image: string[]
  inStock: boolean
  isBestSelling: boolean
  isOnSale: boolean
}



export const dummyProducts: Product[] = [
  {
    _id: "67a1f4e43f34a7ghb6dde901",
    userId: "user_001",
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A soft and stylish striped blouse with flutter sleeves and an overlap collar design, perfect for casual outings.",
    category: "women-fashion",
    price: 80.5,
    offerPrice: 50.0,
    rating: 4.4,
    image: [p1_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde902",
    userId: "user_001",
    name: "Casual Floral Peplum Blouse",
    description: "Elegant peplum blouse with floral prints, designed for both comfort and style.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p2_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde903",
    userId: "user_001",
    name: "Pleated V-Neck Peplum Top",
    description: "Chic pleated peplum top with a V-neck cut, suitable for formal and semi-formal wear.",
    category: "women-fashion",
    price: 100.5,
    offerPrice: 60.0,
    rating: 4.3,
    image: [p3_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde904",
    userId: "user_001",
    name: "Classic Overlap Collar Peplum Blouse",
    description: "Timeless peplum blouse featuring an overlap collar and smooth cotton fabric.",
    category: "women-fashion",
    price: 150.0,
    offerPrice: 100.0,
    rating: 4.7,
    image: [p4_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde905",
    userId: "user_001",
    name: "Elegant Puff Sleeve Peplum Blouse",
    description: "A trendy puff sleeve design combined with a flattering peplum fit.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.6,
    image: [p5_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde906",
    userId: "user_001",
    name: "Soft Cotton Casual Peplum Top",
    description: "Lightweight and breathable cotton peplum top ideal for daily wear.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.1,
    image: [p6_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde907",
    userId: "user_001",
    name: "Ruffled Neck Peplum Blouse",
    description: "Ruffled neckline blouse with a gentle fit, offering both comfort and charm.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.2,
    image: [p7_img],
    inStock: false,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde908",
    userId: "user_001",
    name: "Elegant Evening Peplum Top",
    description: "An elegant peplum blouse designed for evening occasions with a sleek silhouette.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.8,
    image: [p8_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde909",
    userId: "user_001",
    name: "Vibrant Summer Peplum Blouse",
    description: "Bright and colorful peplum top perfect for summer wear.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.0,
    image: [p9_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde910",
    userId: "user_001",
    name: "Silky Flow Peplum Top",
    description: "Smooth silk peplum blouse that adds elegance to any outfit.",
    category: "women-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p10_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },

  // --- MEN PRODUCTS ---
  {
    _id: "67a1f4e43f34a7ghb6dde911",
    userId: "user_002",
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    description: "A classic green bomber jacket crafted with premium fabric for modern comfort and fit.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.7,
    image: [p13_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde912",
    userId: "user_002",
    name: "Men Black Quilted Bomber Jacket",
    description: "Stylish quilted bomber jacket designed for warmth and elegance.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.6,
    image: [p14_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde913",
    userId: "user_002",
    name: "Men Navy Blue Slim Fit Jacket",
    description: "Navy slim-fit jacket with adjustable cuffs and zipper pockets.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p15_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde914",
    userId: "user_002",
    name: "Men Grey Comfort Jacket",
    description: "Soft and warm jacket suitable for both casual and semi-formal occasions.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.3,
    image: [p16_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde915",
    userId: "user_002",
    name: "Men Olive Zippered Bomber",
    description: "Trendy olive bomber jacket made for comfort and lasting durability.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.4,
    image: [p17_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde916",
    userId: "user_002",
    name: "Men Black Slim Jacket",
    description: "Minimalist design black slim-fit jacket, versatile for all seasons.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.2,
    image: [p18_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde917",
    userId: "user_002",
    name: "Men Blue Zippered Jacket",
    description: "Stylish blue full-zip jacket with durable stitching and modern aesthetics.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p19_img],
    inStock: false,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde918",
    userId: "user_002",
    name: "Men Khaki Full-Zip Jacket",
    description: "Lightweight khaki jacket suitable for outdoor activities.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.6,
    image: [p20_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde919",
    userId: "user_002",
    name: "Men Grey Zippered Bomber Jacket",
    description: "A high-quality grey bomber jacket that provides both style and comfort.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p21_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde920",
    userId: "user_002",
    name: "Men Charcoal Slim Fit Jacket",
    description: "Modern slim-fit design with lightweight material for a perfect fit.",
    category: "men-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.7,
    image: [p22_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },

  // --- KIDS PRODUCTS ---
  {
    _id: "67a1f4e43f34a7ghb6dde921",
    userId: "user_003",
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "Soft cotton hoodie with orange and navy color blocking for a sporty look.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.4,
    image: [p25_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde922",
    userId: "user_003",
    name: "Boys Printed Cotton Hoodie",
    description: "Fun and comfortable hoodie with cartoon print, perfect for everyday wear.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 120.5,
    rating: 4.3,
    image: [p26_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde923",
    userId: "user_003",
    name: "Boys Winter Fleece Sweatshirt",
    description: "Warm fleece sweatshirt providing coziness in cold weather.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p27_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde924",
    userId: "user_003",
    name: "Boys Blue Hooded Sweatshirt",
    description: "Blue cotton hoodie designed for active kids.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 120.5,
    rating: 4.2,
    image: [p28_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde925",
    userId: "user_003",
    name: "Boys Yellow Pullover Hoodie",
    description: "Bright yellow pullover with soft fabric for all-day comfort.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.4,
    image: [p29_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde926",
    userId: "user_003",
    name: "Boys Green Casual Sweatshirt",
    description: "Casual wear sweatshirt with ribbed cuffs and soft cotton finish.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 120.5,
    rating: 4.0,
    image: [p30_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde927",
    userId: "user_003",
    name: "Boys Navy Blue Hoodie",
    description: "Navy blue hoodie with printed design for trendy everyday wear.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.3,
    image: [p31_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde928",
    userId: "user_003",
    name: "Boys Red Cotton Hoodie",
    description: "Soft red hoodie with breathable cotton blend for all-day play.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 120.5,
    rating: 4.2,
    image: [p32_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde929",
    userId: "user_003",
    name: "Boys Graphic Hoodie",
    description: "Trendy graphic hoodie that adds style to any outfit.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.5,
    image: [p33_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde930",
    userId: "user_003",
    name: "Boys Cotton Zip-Up Sweatshirt",
    description: "Lightweight zip-up sweatshirt with a smooth finish for active kids.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 120.5,
    rating: 4.3,
    image: [p34_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde931",
    userId: "user_003",
    name: "Boys Orange Hoodie Set",
    description: "Matching orange hoodie set made with soft cotton fabric for warmth and comfort.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 85.0,
    rating: 4.6,
    image: [p35_img],
    inStock: true,
    isBestSelling: true,
    isOnSale: true,
  },
  {
    _id: "67a1f4e43f34a7ghb6dde932",
    userId: "user_003",
    name: "Boys Classic Full-Sleeve Sweatshirt",
    description: "Classic sweatshirt ideal for school and casual wear.",
    category: "kid-fashion",
    price: 120.5,
    offerPrice: 120.5,
    rating: 4.1,
    image: [p36_img],
    inStock: true,
    isBestSelling: false,
    isOnSale: false,
  },


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
    rating: 3,
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

