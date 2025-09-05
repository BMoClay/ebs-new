// import React from "react";
import dog from "/assets/inSituImages/IMG_9269 copy.jpeg"
import sarnlogo from "/assets/logosBig/unnamed.jpg"
import logo2 from "/assets/logos/Fiery_Color_021 5.png";
import fpLogo from "/assets/logos/unnamed-1.jpg";
import lawsMatterImg from "/assets/coverImages/unnamed-3.jpg"
import samImg from "/assets/coverImages/unnamed-2.jpg"
// import news from "./components/news.css"

function News ({ closeModal }) {
    
    const handleClose = () => {
        closeModal()
      };

    return (
        <> 
        <div className=" ">
            <div className="modalBackground">
            <button className="absolute right-2" onClick={handleClose}>x</button>
                <div className="py-8 pr-2">
                    
                    {/* <button onClick={() => closeModal(false)}>X Close</button> */}
                    {/* <button className="absolute right-2" onClick={handleClose}>x</button> */}
                  <div className="flex justify-center">
  <div className="max-w-3xl">
    {/* <img src="788f1903-2f76-4ef5-bb9c-a63689a5d7c6.png" /> */}
  </div>
</div>
<div className="text-center text-base">
  <br />

  <p>
    <b>
      <br />
      ebs & phono/graph, <i>ECHO</i> <br />
      published by <u><a href="https://editionsbierisusanne-ebs.ch/">e.bs</a></u> <br />
      <br />
      Produced between Japan and Bevagna, Italy <br />
      Supported by DNP Foundation for Cultural Promotion, <br />
      Ichigaya Letterpress Factory, Shinkaichi Community Center for Arts and Interaction <br />
      Organizational support: Chikako Tatsuuma
    </b>
  </p>

  <br />

  <p>
    <i>ECHO</i> is an artist’s book by ebs and phono/graph, partly handcrafted and assembled
    in a ring binder. Combining typography, graphics, and diverse printing techniques, it
    explores how meaning unfolds on the page. Reading becomes an active, sensory experience —
    expanding the intersections of sound, letters, and graphics beyond traditional media.
  </p>

  <br />

  <p>
    phono/graph is a collective founded in Osaka in 2011. Through experimental, cross-media
    work, it explores the interplay of sound, text, and graphics. Members: Fujimoto Yukio,
    Kishimoto Rinko, Hayashi Aoi, Suzuki Hiroyoshi, Jo Kazuhiro, intext, Yagi Lyota,
    Nicole Schmid, softpad.
  </p> <br />
  <p>
    <a href="http://www.phonograph.jp/artists.htm" target="_blank" className="underline">
      phono/graph | artists
    </a>
  </p> <br />
  <p>
    <i>ECHO</i> is an artist’s book by ebs and phono/graph, partly handcrafted and assembled
    in a ring binder. Combining typography, graphics, and diverse printing techniques, it
    explores how meaning unfolds on the page. Reading becomes an active, sensory experience —
    expanding the intersections of sound, letters, and graphics beyond traditional media.
  </p>

  <br />

  <p>
    Founded in Osaka in 2011, phono/graph is a collective working experimentally across sound,
    text, and image. Members: Fujimoto Yukio, Kishimoto Rinko, Hayashi Aoi, Suzuki Hiroyoshi,
    Jo Kazuhiro, intext, Yagi Lyota, Nicole Schmid, softpad.
  </p>

  <br />
</div>
  <br />


  
                    <div className="title">
                        <p>
                        Booklaunch 
                        </p>
                    </div>
                    <div className="text-xs">
                        <p>
                        Isabelle Cornaro & Sam Pulitzer, published by ebs, December 11, 5–7 pm
                        </p>
                        <br />
                       <br />
                       <br />
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-48">
                            <img src={fpLogo}/>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <div className="max-w-16">
                            <img src={logo2}/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <img src={dog}/>
                        </div>
                    </div>
                    <div className="text-center text-base">
                        <br />
                       
                        <p><b>Booklaunch<br />
                           Isabelle Cornaro, <i>Laws, Matter</i> <br /> 
                          Sam Pulitzer, <i>No</i> <br />
                            published by <u><a href="https://editionsbierisusanne-ebs.ch/">e.bs</a></u><br /> <br />
                          Wednesday, December 11, 2024<br />
                            Galerie Francesca Pia
                        </b></p>
                        <br />
                        <p></p>
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <img src={lawsMatterImg}/>
                        </div>
                    </div>
                    <div className="text-center text-sm">
                        <br />
                        <p><b>
                        Isabelle Cornaro <br />
                        <i>Laws, Matter</i> <br /> <br />
                        24 x 30 cm, 44 pages, staplebound <br />
                        First Edition, 220 copies <br />
                        Printed by La Tipografica Bevagna, Italy <br />
                        Published on occasion of the exhibition <i>Mother, Laws, Matter</i> <br />
                        at Fondazione Giuliani, Rome, 2024 <br />
                        CHF 30.- <br></br> <br />
                        Special Edition of 20 <br />
                        with an original drawing by Isabelle Cornaro <br />
                        signed and numbered <br />
                        CHF 450.- <br /><br />
                        <u><a href="https://editionsbierisusanne-ebs.ch/books/3">Interview with Isabelle Cornaro</a></u>
                        </b>
                        </p>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <img src={samImg}/>
                        </div>
                    </div>
                    <div className="text-center text-sm">
                        <br />
                        <p><b>
                        Sam Pulitzer<br />
                        <i>No</i> <br /> <br />
                        13 x 16 cm, 20 pages, spiral bound in metal, three-fold cover<br />
                        First Edition, 200 copies <br />
                        Printed by La Tipografica Bevagna, Italy <br />
                        CHF 30.- <br></br> <br />
                        <u><a href="https://editionsbierisusanne-ebs.ch/books/4">Interview with Sam Pulitzer</a></u>
                        </b>
                        </p>
                    </div>
                    <br />
                    <div className="text-sm">
                        <br />
                        <p className=""><b>
                        <u><a href="https://editionsbierisusanne-ebs.ch">e.bs</a></u><br />
                        Susanne Bieri<br />
                       Dr. phil. art historian<br />
                       Artists' book publisher <br />
                        <u><a href="https://editionsbierisusanne-ebs.ch">editionsbierisusanne-ebs.ch</a></u><br />
                        <u><a href="https://www.instagram.com/edededebs/">Instagram</a></u><br /> <br />
                        Galerie Francesca Pia <br />
                        Limmatstrasse 270 <br />
                        CH-8005 Zürich <br />
                        Tuesday-Friday, 11-18 <br />
                        Saturday 11-17 <br />
                        <u><a href="https://www.francescapia.com/gallery">francescapia.com</a></u><br />
                        <u><a href="https://www.instagram.com/galerie_francescapia/">Instagram</a></u><br />
                        </b>
                        </p>
                        <br /><br /><br /><br />
                    </div>
                    <hr />
                    Past News
                    <hr />
                    <br />
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