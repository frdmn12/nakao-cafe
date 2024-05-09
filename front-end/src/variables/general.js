import nakoaDinoyo from "../assets/img/nakoa-dinoyo.jpg";
import nakoaBondowoso from "../assets/img/nakoa-bondowoso.jpg";
import nakoaSuhat from "../assets/img/nakoa-suhat.jpg";
import nakoaPanjaitan from "../assets/img/nakoa-panjaitan.jpeg";
import avatar1 from "../assets/customer_say/Select Avatar=Female 37.png"
import avatar2 from "../assets/customer_say/Select Avatar=Male 5.png"
import avatar3 from "../assets/customer_say/Select Avatar=Male 6.png"

export const TopsSaleListProduct = [
  {
    title: "Americano",
    image:
      "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtZXJpY2FubyUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Matcha Latte",
    image:
      "https://images.unsplash.com/photo-1566657040726-62fd1e379726?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vanilla Latte",
    image:
      "https://images.unsplash.com/photo-1603374399574-4cf3f4d79d34?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const StoreList = [
  {
    location_name: "Bondowoso",
    image: `${nakoaBondowoso}`,
    google_maps: "https://maps.app.goo.gl/E2d1PaDnZt6fR2EUA",
  },
  {
    location_name: "Dinoyo",
    image: `${nakoaDinoyo}`,
    google_maps: "https://maps.app.goo.gl/mXkq5h4PKmAaR8kq7",
  },
  {
    location_name: "Suhat",
    image: `${nakoaSuhat}`,
    google_maps: "https://maps.app.goo.gl/46EwFTbzvtYu9n7C8",
  },
  {
    location_name: "Panjaitan",
    image: `${nakoaPanjaitan}`,
    google_maps: "https://maps.app.goo.gl/37AvNExPjAhbcwWs8",
  },
];


export const CustomerSayList = [
  {
    name: 'John F',
    photo: avatar1,
    job  : 'Software Engineer',
    desc: "Best place to get my morning coffee!"
  },
  {
    name: 'Emily R',
    photo: avatar2,
    job  : 'Designer',
    desc: "The atmosphere is cozy and the coffee is amazing!"
  },
  {
    name: 'Michael S',
    photo: avatar3,
    job  : 'Photographer',
    desc: "I love the variety of drinks they offer. Highly recommended!"
  }
];
