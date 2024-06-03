import logo2 from "/assets/logosBig/Fiery_Color_021.png";
import logoA2 from "/assets/logosBookPage/Fiery_Color_010_ok copy 3.png";
import logoA3 from "/assets/logosBookPage/Fiery_Color_011 copy 3.png";
import logoA4 from "/assets/logosBookPage/Fiery_Color_012 copy 3.png";
import logoA5 from "/assets/logosBookPage/Fiery_Color_013 copy 3.png";
import logoA6 from "/assets/logosBookPage/Fiery_Color_014 copy 3.png";
import logoA7 from "/assets/logosBookPage/Fiery_Color_015 copy 3.png";
import logoA8 from "/assets/logosBookPage/Fiery_Color_016 copy 3.png";
import logoA9 from "/assets/logosBookPage/Fiery_Color_017 copy 3.png";
import logoA10 from "/assets/logosBookPage/Fiery_Color_018 copy 3.png";
import logoA11 from "/assets/logosBookPage/Fiery_Color_019 copy 3.png";
import logoA12 from "/assets/logosBookPage/Fiery_Color_020 copy 3.png";
import logoA13 from "/assets/logosBookPage/Fiery_Color_008 copy 3.png";

import coverImage1 from "/assets/coverImages/IMG_9389 copy.jpg";
import coverImage2 from "/assets/coverImages/IMG_9393 copy.jpg";
import coverImage3 from "/assets/coverImages/IMG_9409 copy.jpg";
// import video1 from "/assets/coverImages/IMG_9401.mp4"
// import video2 from "/assets/coverImages/IMG_9408.mp4"

import dog from "/assets/inSituImages/IMG_9270 copy.jpeg"
import logo1 from "/assets/logos/Fiery_Color_021 copy 2.png";
// import logo3 from "/assets/logos/Fiery_Color_010_ok copy 2.png"

export const BOOKS = [
     {
        id: 1,
        bookTitle: "",
        headerArtist: "",
        artist: "Vaclav Pozarek",
        urlText: "first-book",
        year: 2023,
        pages: 12,
        size: "7.5 x 10.5 cm",
        binding: "staplebound",
        price: "EU 30.-",
        edition: "First",
        editionAmount: 220,
        attribution:
          "",
        notes:
          "",
        bio: "",
        websiteUrl: "https://editionsbierisusanne-ebs.ch/",
        website: "editionsbierisusanne-ebs.ch",
        logo: logo1,
        // coverImage: dog,
        sliderStyles: "none",
        images: [
          {
            id: 1,
            imgFile: dog
          },
          {
            id: 2,
            imgFile: logoA2
          },
          {
            id: 3,
            imgFile: logoA3
          },
          {
            id: 4,
            imgFile: logoA4
          },
          {
            id: 5,
            imgFile: logoA5
          },
          {
            id: 6,
            imgFile: logoA6
          },
          {
            id: 7,
            imgFile: logoA7
          },
          {
            id: 8,
            imgFile: logoA8
          },
          {
            id: 9,
            imgFile: logoA9
          },
          {
            id: 10,
            imgFile: logoA10
          },
          {
            id: 11,
            imgFile: logoA11
          },
          {
            id: 12,
            imgFile: logoA12
          },
          {
            id: 13,
            imgFile: logoA13
          },
        ],
        available: true,
      },
    {
        id: 2,
        bookTitle: "LAWS, MATTER",
        headerArtist: "Isabelle Cornaro",
        artist: "Isabelle Cornaro",
        urlText: "isabelle-cornaro",
        year: 2024,
        pages: 44,
        size: "24 x 30 cm",
        binding: "Staplebound",
        price: "EU 30.-",
        edition: "First",
        editionAmount: 220,
        attribution:  "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",          
        notes: "Published on occasion of the exhibition MOTHER, LAWS, MATTER, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profit project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
        bio: "Isabelle CORNARO - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
        websiteUrl: "https://isabellecornaro.com/",
        website: "isabellecornaro.com",
        logo: logo2,
        images: [
          {
            id: 1,
            imgFile: coverImage1
          }, 
          {
            id: 2,
            imgFile: coverImage2
          }, 
          {
            id: 3,
            imgFile: coverImage3
          },     
        ],
        // media: [
        //   {
        //     id: 1,
        //     videoFile: video1,
        //   },
        //   {
        //     id: 2,
        //     videoFile: video2
        //   }
        // ],
        available: true,
      },
      // {
      //   id: 3,
      //   bookTitle: "Third BOOK",
      //   artist: "third artist",
      //   urlText: "third-artist",
      //   year: 2026,
      //   pages: 45,
      //   size: "24 x 30 cm",
      //   binding: "staplebound",
      //   price: "EU 30.-",
      //   edition: "First",
      //   editionAmount: 220,
      //   attribution:
      //     "Published on occasion of the exhibition third BOOK, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profi t project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
      //   notes:
      //     "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",
      //   bio: "third Artist bio - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
      //   artistsWebsite: "https://thirdartist.com/",
      //   logo: logo3,
      //   coverImage: coverImage3,
      //   available: true,
      // },
      // {
      //   id: 4,
      //   bookTitle: "fourth BOOK",
      //   artist: "fourth artist",
      //   urlText: "fourth-artist",
      //   year: 2026,
      //   pages: 45,
      //   size: "24 x 30 cm",
      //   binding: "staplebound",
      //   price: "EU 30.-",
      //   edition: "First",
      //   editionAmount: 220,
      //   attribution:
      //     "Published on occasion of the exhibition fourth BOOK, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profi t project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
      //   notes:
      //     "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",
      //   bio: "fourth Artist bio - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
      //   artistsWebsite: "https://fourthartist.com/",
      //   logo: logo4,
      //   coverImage: coverImage3,
      //   available: true,
      // },
      // {
      //   id: 5,
      //   urlText: 'not-made-yet',
      //   logo: logo5,
      //   available: false,
      // },
      // {
      //   id: 6,
      //   urlText: 'not-made-yet',
      //   logo: logo6,
      //   available: false,
      // },
      // {
      //   id: 7,
      //   urlText: 'not-made-yet',
      //   logo: logo7,
      //   available: false,
      // },
      // {
      //   id: 8,
      //   urlText: 'not-made-yet',
      //   logo: logo8,
      //   available: false,
      // },
      // {
      //   id: 9,
      //   urlText: 'not-made-yet',
      //   logo: logo9,
      //   available: false,
      // },
      // {
      //   id: 10,
      //   urlText: 'not-made-yet',
      //   logo: logo10,
      //   available: false,
      // },
      // {
      //   id: 11,
      //   urlText: 'not-made-yet',
      //   logo: logo11,
      //   available: false,
      // },
      // {
      //   id: 12,
      //   urlText: 'not-made-yet',
      //   logo: logo12,
      //   available: false,
      // },
      // {
      //   id: 13,
      //   urlText: 'not-made-yet',
      //   logo: logo13,
      //   available: false,
      // }
]

