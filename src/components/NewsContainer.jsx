import { useState } from "react";
import News from "../components/News.jsx";



const NewsContainer = () => {
    
    const [openModal, setOpenModal] = useState(false);

     const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleButtonClick = () => {
        setOpenModal(true);
      };

    return (
        <div className="pl-8 bg-white ">
            <div className="NewsContainer">
                {!openModal && (
                    <button onClick={handleButtonClick}>News</button>
                )}
                {openModal && <News closeModal={handleCloseModal}/>}
            </div>
        </div>
    
  )
}

export default NewsContainer