import React from "react";
import dog from "/assets/inSituImages/IMG_9269 copy.jpeg"
import sarnlogo from "/assets/logosBig/unnamed.jpg"
// import news from "./components/news.css"

function News ({ closeModal }) {
    
    const handleClose = () => {
        closeModal()
      };

    return (
        <> 
        <div className="pl-4 ">
            <div className="modalBackground">
            <button className="absolute right-2" onClick={handleClose}>x</button>
                <div className="py-8 pr-2">
                    
                    {/* <button onClick={() => closeModal(false)}>X Close</button> */}
                    {/* <button className="absolute right-2" onClick={handleClose}>x</button> */}
                    <div className="title">
                        <p>
                            Invitation 
                        </p>
                    </div>
                    <div className="text-xs">
                        <p>
                            SARN Table @edition bieri susanne – Artists' Books
                        </p>
                        <br />
                       
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <img src={dog}/>
                        </div>
                    </div>
                    <div className="text-xs">
                        <br />
                        <hr />
                        <p>
                            Studio visit and exchange + apéro<br />
                            Friday 22 November / 16h-18h+ <br /> 
                            Atelierhaus Thun, <a href="https://maps.app.goo.gl/SnQ2ZAG8Dg6jy27aA">Uttigenstrasse 27, 3600 Thun</a><br />
                            Registration: <a href="mailto:info@sarn.ch"> Please register, space is limited. </a><br />
                            Contact: <a href="mailto:info@sarn.ch">Erin Mallon / info(at)sarn.ch</a>
                        </p>
                        <hr />
                        <p></p>
                    </div>
                    <div className="text-xs">
                        <br />
                        <p> <a href="https://sarn.ch/research/sarntable">SARN Table</a>(Fabiana Senkpiel, Erin Mallon) and Susanne Bieri welcome 
                            you for an apéro and talk about artists' books. In the frame of a 
                            long-term research, Susanne Bieri has examined the development and 
                            significance of the phenomenon of the artist's book by analyzing around 
                            1,500 titles in the Helvetica collection of the Swiss National Library 
                            (NL) and evaluating 112 interviews conducted with international experts. 
                            She examined a large number of case studies ranging from early medieval 
                            illuminated codices to ephemera and contemporary fanzines.
                        </p>
                        <br />
                        <p>
                            In 2023, Susanne Bieri founded the artists' book publisher e.bs 
                            editionsbierisusanne, with headquarters in Bern, CH and a second office
                            in Bevagna, IT. Since then, she has been producing artists' publications
                            in collaboration with institutions and artists, according to their own
                            rules. Two artists' publications have already been published, the third
                            is in print and four further artists' book projects are in progress: 
                            editions bieri susanne - ebs. At this SARN Table, we will have the 
                            opportunity to take a closer look at these and other examples of artists’ 
                            publications and to discuss their development, production, distribution, 
                            etc. The dilemma of finding a universal definition of artists’ books will
                            be at the center of the discussion. Susanne Bieri will speak from her 
                            experience as a researcher and publisher and offer us personal insight 
                            into the positioning of e.bs in this broad field.
                            <br />
                            <br />
                            We're looking forward to seeing you there!
                            <br />
                            <br />
                            Susanne, Fabiana and Erin
                        </p>
                    </div>
                    <div className="text-xs">
                        <br />
                        <br />
                        <p>
                            
                        Susanne Bieri, Dr. phil., art historian. From 1995 to 2020, head of the Prints and Drawings Department (PDD), the Special Collections and the Federal Archives of Historic Monuments at the Swiss National Library (NL), where she researched and expanded the NL's iconographic collections. The artists’ books and art editions collection is one of the focal points of the PDD/NL and the most extensive collection of its kind in Switzerland. Over the past 25 years, it has been important to the NL to update this collection through acquisitions and to integrate it into the international context through various exhibitions, presentations and colloquia. The latter was pursued in particular via an academic research project funded by the Swiss National Science Foundation, following which and on behalf of the NL Susanne Bieri published the first critical overview of Swiss artists’ books, “Swiss artists’ books - Livres d'artistes suisses - Libri d'artista svizzeri” (Verlag der Buchhandlung Walther und Franz König: Cologne, 2022).
                        </p>
                       
                        <br />
                        <br />
                        <div className="">
                            <div className="justify-center max-w-32">
                                <img src={sarnlogo}/>
                            </div>
                        </div>
                        <br /><br />
                        <button onClick={handleClose}>x</button>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default News