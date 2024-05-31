import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getInSituImages } from "../books.js";
import Info from "../components/Info.jsx";
// import logo1 from "/assets/logos/Fiery_Color_001 copy.png";
// import logo1 from "/assets/logos/"
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
// import logo13 from "/assets/logos/Fiery_Color_021 copy 2.png";
// import dodecahedron from "/assets/IMG_7556 copy.jpeg";
import dodecahedron from "/assets/small poly.png";
import inSitu1 from "/assets/inSituImages/IMG_9269 copy.jpeg"

export async function loader() {
  const books = await getBooks();
  const inSituImages = await getInSituImages();
  //   const logos = await getLogos();
  return { books, inSituImages };
}

const dog = inSitu1

export default function Root() {
  //   const { logos, books, inSituImages } = useLoaderData();
  const { books, inSituImages } = useLoaderData();

  //   const availableBooks = books.filter((book) => book.available);
  //   const booksNotYetAvailable = books.filter((book) => !book.available);
  //   const justLogos = booksNotYetAvailable.map(
  //     (notYetAvailable) => notYetAvailable.logo
  //   );

  return (
    <>
      <div className="pt-3 pb-2 px-2.5">
        {books.map((book) => (
          <Link to={`books/${book.id}`} key={book.id} className="">
            <div className="flex pb-[0.5px] items-baseline">
              <img src={book.logo} className="w-10"></img>
              <h1 className="px-0.5 text-xs">{book.year}</h1>
            </div>
          </Link>
        ))}
        <div className="flex pb-[0.5px] items-baseline ">
          <img src={logo2} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo3} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo4} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo5} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo6} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo7} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo8} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo9} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo10} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo11} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo12} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        {/* <div className="flex items-baseline ">
          <img src={logo13} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div> */}
        {/* {logos.map((logo) => (
          <div key={logo} className="flex items-baseline px-0.5  ">
            <img src={logo} className="w-10 "></img>
            <h1 className="px-1 text-xs"></h1>
          </div>
        ))} */}
      </div>
      <hr />
      <div className="px-2 py-2">
        
        <div>
          <img src={dog}/>
        </div>
        {/* <h1 className=" font-bold">e.bs</h1>
        <h1 className="text-xs pb-2">e.bs</h1>
        <p className="text-xs pb-2">
          editionsbierisusanne-ebs is an artists' book publisher with
          headquarters in Bern/CH and a second office in Bevagna/IT. ebs
          artists' publications are produced in collaboration with artists and
          institutions according to their own rules.
        </p> */}
        {/* <div className="grid sm:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-2">
          {inSituImages.map((inSituImage) => (
            <div key={inSituImage} className="">
              <img src={inSituImage}></img>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
        {inSituImages.map((inSituImage) => (
          <div key={inSituImage} >
            <img src={inSituImage}></img>
          </div>
        ))}
      </div> */}
      {/* <div className="px-3 grid gap-3 sm:grid-cols-12 ">
        {inSituImages.map((inSituImage) => (
          <div key={inSituImage} className="sm:col-span-6 min-h-[100px] ">
            <img src={inSituImage}></img>
          </div>
        ))}
      </div> */}
      <div className="px-3">
        <Info />
      </div>
      <div className="flex justify-center">
        <img src={dodecahedron} alt="" className="w-48 pb-5" />
      </div>
    </>
  );
}
