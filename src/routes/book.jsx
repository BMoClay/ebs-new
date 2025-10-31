import { useLoaderData } from "react-router-dom";
import { getBook } from "../books";
import ImageSlider from "../components/ImageSlider";
import { Navbar } from "../components/Navbar";

export async function loader({ params }) {
  console.log({ params });
  const book = await getBook(params.bookId);
  if (!book) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { book };
}

const containerStyles = {
   width: "100%",
  // height: "100vh",
  // margin: "0 auto",
  // width: "500px",
  height: "auto",
  margin: "0 auto",
};

export default function Book() {
  const { book } = useLoaderData();
  let pictures = book.images;
  let videos = book.video;

  //   console.log(pictures)
  //   let picUrl = "/assets/coverImages/IMG_9389 copy.jpg"
  //   console.log("pictures[0].imgFile:",pictures[0].imgFile);
  //   console.log("picUrl:",picUrl)
  //   console.log("pictures:",pictures)
  return (
    <>
      <div className="">
        <div className="">
          <h2 className="flex absolute py-1 inset-x-0 top-0 justify-center">
            {book.bookTitle}  {book.headerArtist}
          </h2>
          <Navbar />
          {/* <img className="h-32" src={book.logo} alt="" /> */}
          {/* <h1>{book.artist}</h1> */}
          {/* <iframe src={slides[3].file} autoPlay className="w-full object-cover"/> */}
          {/* <video src={slides[3].file} autoPlay className="w-full object-cover" /> */}
        </div>
        <div className="bg-neutral-100 pt-2 px-4">
          <div style={containerStyles} >
          {pictures && <ImageSlider pictures={pictures} />}
            {/* <ImageSlider pictures={pictures} videos={videos} /> */}
          </div>
       

        </div>
        {/* <img src={picUrl} /> */}
        <div >
          {/* {pictures.map((picture) => (
            <div key={picture.id} className=" ">
              <img src={picture.imgFile} />
            </div>
          ))} */}
          <div className="m-4 grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs ">
            <div className="sm:col-span-8 py-1">
              <p >{book.attribution}</p>
             
              <p className="py-2">{book.notes}</p>
              <p className="py-1 pl-4">{book.notes2}</p>
              <p className="py-1">{book.notes3}</p>
              <p className="py-1 pl-4">{book.notes4}</p>
              <p className="py-1">{book.notes5}</p>
              <p className="py-1 pl-4">{book.notes6}</p>
              <p className="py-1">{book.notes7}</p>
              <p className="py-1 pl-4">{book.notes8}</p>
             <br />
              <p>{book.bio}</p>
              {videos && (
  <div className="video-container">
    <video src={videos} controls className="w-full pt-2 px-4" />
  </div>
)}
            </div>
            <div className="sm:col-span-4 text-xs px-4 ">
              <div className="grid grid-cols-6 sm:col-span-2 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Logo{" "}</h3>
                <img src={book.logo} alt={book.artist} className="w-10" />
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Title</h3>
                <h3 className="sm:col-span-3">{book.bookTitle}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Artist </h3>
                <h3 className="sm:col-span-3">{book.artist}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <div className="sm:col-span-2 ">
                  <h3 >Format</h3>
                </div>
                <div className="sm:col-span-3 ">
                  <h3 >{book.size}</h3>
                  <h3 >{book.pages} pages</h3>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Binding</h3>
                <h3 className="sm:col-span-3">{book.binding}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Limited Edition</h3>
                <h3 className="sm:col-span-3">{book.edition} {book.editionAmount} </h3>
              </div>
              <hr />
                 <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Artist Proofs</h3>
                <h3 className="sm:col-span-3">{book.o1edition} {book.o1editionAmount} </h3>
              </div>
              <hr />

               <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Signed by Artist</h3>
                <h3 className="sm:col-span-3">{book.o2edition} {book.o2editionAmount} </h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Price</h3>
                <h3 className="sm:col-span-3">{book.price}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1 gap-1">
                <h3 className="sm:col-span-2 ">Website</h3>
                <h3 className="sm:col-span-3"><a href={book.websiteUrl}><b>{book.website}</b></a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
