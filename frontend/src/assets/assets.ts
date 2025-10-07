import cat_camera from '../assets/Category-Camera.png'
import cat_computer from '../assets/Category-Computer.png'
import cat_phone from '../assets/Category-CellPhone.png'
import cat_gamepad from '../assets/Category-Gamepad.png'
import cat_headphone from '../assets/Category-Headphone.png'
import cat_watch from '../assets/Category-SmartWatch.png'

interface Category {
  title: string,
  image: string
}

export const categories: Category[] = [
  { title: 'Phones', image: cat_phone },
  { title: "Camera", image: cat_camera },
  { title: 'Computers', image: cat_computer },
  { title: 'Gaming', image: cat_gamepad },
  { title: 'HeadPhones', image: cat_headphone },
  { title: 'SmartWatch', image: cat_watch }
]


