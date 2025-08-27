import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getInSituImages, getVideos } from "../books.js";
import Info from "../components/Info.jsx";
import NewsContainer from "../components/NewsContainer.jsx";


import logo2 from "/assets/logos/Fiery_Color_010_ok copy 2.png";
import logo3 from "/assets/logos/Fiery_Color_011 copy 2.png";
import logo4 from "/assets/logos/Fiery_Color_012 copy 2.png";
import logo5 from "/assets/logos/Fiery_Color_013 copy 2.png";
import logo6 from "/assets/logos/Fiery_Color_014 copy 2.png";
import logo7 from "/assets/logos/Fiery_Color_015 copy 2.png";
import logo8 from "/assets/logos/Fiery_Color_016 copy 2.png";
import logo9 from "/assets/logos/Fiery_Color_017 copy 2.png";
import logo10 from "/assets/logos/Fiery_Color_018 copy 2.png";
import logo11 from "/assets/logos/Fiery_Color_019 copy 2.png";
import logo12 from "/assets/logos/Fiery_Color_020 copy 2.png";
import logo13 from "/assets/logos/Fiery_Color_019 copy 2.png";

import dodecahedron from "/assets/small poly.png";
import inSitu1 from "/assets/inSituImages/IMG_9269 copy.jpeg"
// import logo1 from "/assets/logos/Fiery_Color_001 copy.png";

export async function loader() {
  const books = await getBooks();
  const inSituImages = await getInSituImages();
  // const videos = await getVideos ();
  // const logos = await getLogos();
  return { books, inSituImages };
}

const dog = inSitu1

export default function Root() {
  const { books } = useLoaderData();
  return (
    <>
      <div className=" pt-3 pb-2 px-2.5">
      <div className="absolute right-2 px-2">
          <NewsContainer/>
      </div>
        {/* Manual organization of books instead of using books.map */}
        
        {/* Book 1 - Vaclav Pozarek */}
        <Link to={`books/1`} className="">
          <div className="flex items-baseline border-b-[2px]">
            <img src={books[0].logo} className="w-10 h-9"></img>
            <h1 className="px-0.5 text-xs">{books[0].year}</h1>
          </div>
        </Link>
        
        {/* Book 2 - Isabelle Cornaro */}
        <Link to={`books/2`} className="">
          <div className="flex items-baseline border-b-[2px]">
            <img src={books[1].logo} className="w-10 h-9"></img>
            <h1 className="px-0.5 text-xs">{books[1].year}</h1>
          </div>
        </Link>
        
        {/* You can add more books manually here */}
        
        {/* The rest of your static logos */}
        <div className="flex items-baseline ">
          <img src={logo3} alt="" className="w-10 py-0.5 " />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        
        {/* ... existing code ... */}
        
        <div className="flex items-baseline ">
          <img src={logo4} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        
        // ... existing code ...
      </div>
      
      <div className="flex justify-center">
        <Info />
      </div>
    </>
  );
}