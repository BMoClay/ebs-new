import { useLoaderData } from 'react-router-dom'
import { getBook } from '../books'

export async function loader({params}) {
    console.log({params})
    const book = await getBook(params.id)
    if (!book) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return { book };
}

export default function Book() {
    const { book } = useLoaderData()

    return ( 
        <>
            <div id="book">
                <h1>{book.year}</h1>
                <h1>how to get dynamic data passed to here</h1>
                <img src={book.coverImage} alt={book.artist}/>
            </div>
        </>
    )
}