// import React from "react";
import dog from "/assets/inSituImages/IMG_9269 copy.jpeg"
import sarnlogo from "/assets/logosBig/unnamed.jpg"
import logo2 from "/assets/logos/Fiery_Color_021 5.png";
import fpLogo from "/assets/logos/unnamed-1.jpg";
import lawsMatterImg from "/assets/coverImages/unnamed-3.jpg"
import samImg from "/assets/coverImages/unnamed-2.jpg"
import echologo from "/assets/news/echo2.png"
import ebbslogo from "/assets/news/echo3.png"
import video1 from "/assets/news/echo4.mov"
import VolImg from "/assets/news/volumes-2025.jpg"
import halles from "/assets/news/echo1b.jpg"
import halles2 from "/assets/news/echo3c.jpeg"    
import invito1 from "/assets/news/INVITO1.jpg"
// import PdfViewer from "../components/Pdf-view"
// import news from "./components/news.css"

function News({ closeModal }) {

    const handleClose = () => {
        closeModal()
    };

    return (
        <>
            <div className=" ">
                <div className="modalBackground">
                    <button className="absolute right-2" onClick={handleClose}>x</button>
                    <div className="py-8 pr-2">
                        <div className="border-b"></div>
                        {/* new news */}

                        <div className="flex justify-center">
                            <div className="max-w-3xl">
                                <img src={invito1} />
                            </div>
                        </div>
                        <div className="text-left text-base">
                            <br />
                            <p>
                                <b>OLIVIER MOSSET – JOHN ARMLEDER. Toblerones and Thé</b>
                                <br />
                                Susanne Bieri
                                <br />
                                <br />
                                Spazio Officina, Centro Culturale Chiasso
                            </p>
                            <br />
                            <p>
                                The exhibition <i>OLIVIER MOSSET – JOHN ARMLEDER. Artistic Explorations: Toblerones and Thé</i> takes an unusual point of departure: exhibitions are typically conceived before the publications that accompany them. In the case of <i>Toblerones and Thé</i>, however, the sequence is reversed. The project originates from two artists’ books published in 2026 by ebs editionsbierisusanne: <i>the Toblerones</i> by Olivier Mosset and <i>Le Livre du Thé</i> by John M. Armleder. The exhibition grows out of these two artists’ books, translating their distinct conceptual approaches into spatial form.
                            </p>
                            <br />
                            <p>
                                Olivier Mosset (*1944) is among the leading figures of contemporary abstract painting. Since the 1960s, he has questioned notions of originality, authorship, and artistic production, developing a practice consistently centered on color, form, and space. His works deliberately avoid any subjective gesture and continue to shape the discourse on abstract painting.
                            </p>
                            <br />
                            <p>
                                This position also underlies Mosset’s long-term engagement with the so-called “Toblerones” – the characteristic concrete anti-tank obstacles of Switzerland’s Second World War defence system. Since discovering them in 1994, these anonymous yet highly precise forms have fascinated him as a point of convergence between Minimalism, Land Art, and “found abstraction”. Over more than three decades, Mosset has realized approximately 170 Toblerones in a wide range of materials and contexts.
                            </p>
                            <br />
                            <p>
                                The artists’ book <i>the Toblerones</i> represents the culmination of this research. It is the result of a long-term investigation into the origins, authorship, and formal history of these concrete structures, bringing together historical sources, archival material, and testimonies. The artists’ book is at once an artistic project and a historical inquiry, while reflecting on the emergence of a form that remains anonymous yet is deeply embedded in Switzerland’s collective memory.
                            </p>
                            <br />
                            <p>
                                John M. Armleder (*1948) is one of the most influential Swiss artists of his generation. His work is characterized by an exceptional openness, moving fluidly between painting, sculpture, installation, design, performance, and publishing. With the Ecart group, founded in 1969 together with Patrick Lucchini and Claude Rychner, he developed a practice that intertwined art and everyday life, understanding social exchange as an integral part of artistic production.
                            </p>
                            <br />
                            <p>
                                <i>Le Livre du Thé</i> emerged from this context. During Ecart’s activities, Armleder regularly served tea to visitors and fellow artists, carefully preserving the paper placemats marked by stains and traces of use. The 632 embossed, cut, and materially inscribed sheets now form the content of the artists’ book. Without commentary or imposed order, they record conversations, encounters, and shared moments. <i>Le Livre du Thé</i> is at once an archive, a social sculpture, and an autonomous work of art.
                            </p>
                            <br />
                            <p>
                                Although both artists’ books revolve around traces of human activity, they could hardly be more different. While <i>the Toblerones</i> investigates an anonymous military form and its history, <i>Le Livre du Thé</i> gathers the incidental traces of social encounters. One pursues a rigorous inquiry into origin and authorship; the other preserves the ephemerality of everyday life while deliberately resisting explanation.
                            </p>
                            <br />
                            <p>
                                The exhibition at Spazio Officina, Centro Culturale Chiasso, translates these two artists’ books into spatial form for the first time. Drawing on the research presented in <i>the Toblerones</i>, Mosset realizes a unique edition of twelve so-called “dragon’s teeth” from the Siegfried Line—the historical predecessors of his later Toblerones. Opposite them stands <i>Liotard/Aalto (Tse-Tse/Castagnettes) FS</i> (2015) by John M. Armleder, evoking the social and contemplative dimension of <i>Le Livre du Thé</i>. Together, the two works establish a dialogue between obstacle and encounter, historical inquiry and lived experience.
                            </p>
                        </div>
                        <div className="border-b"></div>



                    <div className="py-12"></div>

                    <div className="border-b"> Past News</div>

                    <div className="py-6"></div>

                        <div className="flex justify-center">
                            <div className="max-w-3xl">
                                <img src={halles} />
                            </div>
                        </div>
                        <div className="text-left text-base">
                            <br />
                            <p>
                                <b>ECHO, an artist’s book by phono/graph and ebs at espace d’art contemporain EAC (les halles)</b>
                                <br />
                                Rue Pierre Péquignat 9
                                <br />
                                2800 Porrentruy
                                <br />
                                <u><a href="http://www.eac-leshalles.ch" target="_blank">www.eac-leshalles.ch</a></u>
                                <br />
                                <br />
                                February 14 – April 6, 2026
                                <br />
                                Exhibition conceived and presented by Susanne Bieri (ebs)
                                <br />
                                Opening: Saturday, February 14, 2026, 6 PM
                                <br />
                                Intervention: phono/graph
                            </p>
                            <br />
                            <p>
                                <i>ECHO</i> is primarily a comprehensive study, in book form, of the acoustic phenomenon of echo and its historical context. The analysis is rooted in typography and graphic elements, playing with both the "form" and the meaning of the word echo across diverse cultural contexts.
                            </p>
                            <br />
                            <p>
                                At EAC (Les Halles) in Porrentruy, <i>ECHO</i> becomes a spatial installation. This reinterpretation of the book's content is expanded through additions in the form of new works by the artist collective phono/graph as well as by the two artists invited by ebs, Vaclav Pozarek and Philippe Queloz. The result is a temporary, extended mode of reading that unfolds horizontally and vertically in the exhibition space.
                            </p>
                            <br />
                            <p>
                            The exhibition is supported by: DNP Foundation for Cultural Promotion; Ichigaya Letterpress Factory; Shinkaichi Community Center for Arts and Interaction. </p>
                        </div>
                        <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <img src={halles2} />
                        </div>
                        </div>
                        <div className="border-b"></div>

                        <div className="text-left text-base">
                            <br />
                            <p>
                                <b>ebs is participating in VOLUMES 2025, returning to the Nordflügel and Stall 6 of Gessnerallee Zürich for this year's November edition of the art publishing days.</b>
                                <br />
                                When:
                                <br />
                                Saturday, November 22, 2025 — 12:00–20:00
                                <br />
                                Sunday, November 23, 2025 — 12:00–19:00
                                <br />
                                Where:
                                <br />
                                Gessnerallee & Stall 6
                                <br />
                                Gessnerallee 8, 8001 Zürich
                            </p>
                            <br />
                            <div className="flex justify-center">
                                <div className="max-w-3xl">
                                    <img src={VolImg} />
                                </div>
                            </div>
                        </div>
                        <div className="border-b"></div>

                        <div className="flex justify-center">
                            <div className="max-w-80"><img src={echologo} /></div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-20"><img src={ebbslogo} /></div>
                        </div>
                        <p>
                            Come and view the book ECHO by ebs-phono/graph <br />
                            on 20.09.2025, 6 PM. <br />
                            Location: ebs project space, via Santa Maria 7, IT-06031 Bevagna (PG).
                        </p>
                        <div className="flex justify-center">
                            <div className="video-container">
                                <video src={video1} controls className="w-full pt-2 px-4" />
                            </div>
                        </div>
                        <p>
                            <br />
                            ebs & phono/graph, <i>ECHO</i> <br />
                            published by <u><a href="https://editionsbierisusanne-ebs.ch/">e.bs</a></u>
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
                        Produced between Japan and Bevagna, Italy <br />
                        Supported by DNP Foundation for Cultural Promotion, <br />
                        Ichigaya Letterpress Factory, Shinkaichi Community Center for Arts and Interaction <br />
                        Organizational support: Chikako Tatsuuma <br />
                        <p >
                            <a href="http://www.phonograph.jp/artists.htm" target="_blank" className="underline">
                                phono/graph | artists
                            </a>
                        </p> <br />
                    </div>
                    <br />
                  
                    {/* Rest of your component remains unchanged */}
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
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-48">
                            <img src={fpLogo} />
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <div className="max-w-16">
                            <img src={logo2} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <img src={dog} />
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
                            <img src={lawsMatterImg} />
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
                            <img src={samImg} />
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
                            <img src={dog} />
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
                                <img src={sarnlogo} />
                            </div>
                        </div>
                        <br /><br />
                        <button onClick={handleClose}>x</button>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
}

export default News
