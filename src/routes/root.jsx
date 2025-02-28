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
  //   const logos = await getLogos();
  return { books, inSituImages };
}

const dog = inSitu1

export default function Root() {
  //   const { logos, books, inSituImages } = useLoaderData();
  const { books } = useLoaderData();
  return (
    <>
       {/* <div className="absolute pt-3 right-0 px-4">
          <NewsContainer/>
      </div> */}
      <div className=" pt-3 pb-2 px-2.5">
      <div className="absolute right-2 px-2">
          <NewsContainer/>
      </div>
        {books.map((book) => (
          <Link to={`books/${book.id}`} key={book.id} className="">
            {/* <div className="flex pb-[0.5px] items-baseline"> */}
            <div className="flex items-baseline">
              <img src={book.logo} className="w-10 h-9"></img>
              <h1 className="px-0.5 text-xs">{book.year}</h1>
            </div>
          </Link>
        ))}
        {/* <Link to={`books/3}`} key={3} className=""> 
          <div className="flex pb-[0.5px] items-baseline ">
            <img src={logo1} alt="" className="w-10 py-0.5" />
            <h1 className="px-0.5 text-xs">2024 *</h1>
          </div>
        </Link> */}
       
        <div className="flex items-baseline ">
          <img src={logo3} alt="" className="w-10 py-0.5 " />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo4} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo5} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo6} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo7} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo8} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo9} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo10} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex pb-[0.5px] items-baseline  ">
          <img src={logo2} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo12} alt="" className="w-10 py-0.5" />
          <h1 className="px-0.5 text-xs"></h1>
        </div>
      </div>
      <hr />
      {/* <div className="absolute right-0">
        <News/>
      </div> */}
      
      <div className="flex justify-center">
        <div className="px-4 py-4 max-w-3xl">
          <img src={dog}/>
        </div>
      </div>
      <hr />
      <div className="px-3">
        <Info />
      </div>

      <div className="flex justify-center  py-9">
        <img src={dodecahedron} alt="" className="w-32 py-9" />
      </div>
    </>
  );
}
