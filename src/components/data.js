import React from "react";
import { FaSearch, FaHeart, FaCartPlus } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/About",
    text: "About",
  },
  {
    id: 3,
    url: "/Dishes",
    text: "Dishes",
  },
  {
    id: 4,
    url: "/Menu",
    text: "Menu",
  },
  {
    id: 5,
    url: "/Review",
    text: "Review",
  },
  {
    id: 6,
    url: "/Order",
    text: "Order",
  },
];

export const social = [
  {
    id: 1,
    icon: <FaSearch />,
  },
  {
    id: 2,
    icon: <FaHeart />,
  },
  {
    id: 3,
    icon: <FaCartPlus />,
  },
];
export const home = [
  {
    id: 1,
    special: "our special dish",
    name: "spicy noodles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitnatus dolor cumque?",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    // image:
    //   "https://www.google.com/search?q=burger&rlz=1C1CHBF_enUS936US936&sxsrf=AOaemvJu3wk0UwYHYZOvdmENsTFI9FPS4A:1630545214318&tbm=isch&source=iu&ictx=1&fir=eqPeH0FZbMGIJM%252CRhoVEzhmEuF4jM%252C_&vet=1&usg=AI4_-kRPMHQoo0R7_8almTjNucwZUsbLSg&sa=X&ved=2ahUKEwip9qeijt_yAhXrYt8KHb-FD7gQ_h16BAhSEAE#imgrc=eqPeH0FZbMGIJM",
  },
  {
    id: 2,
    special: "our special dish",
    name: "fried chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitnatus dolor cumque?",
    image: "images/home-img-2.png",
  },
  {
    id: 3,
    special: "our special dish",
    name: "hot pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitnatus dolor cumque?",
    image: "images/home-img-3.png",
  },
];
