import { BOOKS } from "./components/bookObjects.js";
import { INSITUIMAGES } from "./components/inSituImages.js"
// import { LOGOS } from "./components/logoImages.js"

// export async function getLogos() {
//     let logos = LOGOS
//     return logos
// }

export async function getBooks() {
    let books = BOOKS
    return books
}

export async function getBook(id) {
    await `book:${id}`;

    let book = BOOKS.find(book => book.id === Number(id));
    return book ?? null;
}

export async function getInSituImages() {
    let inSituImages = INSITUIMAGES
    return inSituImages
}
export async function getVideos() {
    let video = VIDEO_DATA;
    return video;
   }