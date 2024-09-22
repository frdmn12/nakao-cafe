import Arabica from "../assets/images/products/ARABICA.webp";
import Robusta from "../assets/images/products/ROBUSTA.webp";
import Liberica from "../assets/images/products/LIBERICA.webp";

import ArabicaShadow from "../assets/images/products/ARABICA-shadow.png"
import RobustaShadow from "../assets/images/products/ROBUSTA-shadow.png"
import LibericaShadow from "../assets/images/products/LIBERICA-shadow.png"


// List of products
export const listProducts = [
  {
    id: 1,
    name: "Arabica",
    price: 10,
    image: Arabica,
    image2: ArabicaShadow,
    description: "A smooth and aromatic coffee with a rich flavor.",
    caption: "smooth"
  },
  {
    id: 2,
    name: "Robusta",
    price: 15,
    image: Robusta,
    image2: RobustaShadow,
    description: "A strong and bold coffee with a distinct flavor.",
    caption: "dark"
  },
  {
    id: 3,
    name: "Liberica",
    price: 20,
    image: Liberica,
    image2: LibericaShadow,
    description: "A unique and exotic coffee with a fruity and floral aroma.",
    caption: "exotic"
  },
];



