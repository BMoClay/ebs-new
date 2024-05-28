import { useState } from "react";
// import Book from "../routes/book";

const slideStyles = {
  width: "100%",
  height: "100%",
  //   borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  // height: "100%",
};

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };

const ImageSlider = ({ pictures, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //   const goToSlide = (slideIndex) => {
  //     setCurrentIndex(slideIndex);
  //   };

  //   const slideStylesWidthBackground = {
  //     ...slideStyles,
  //     backgroundImage: `${pictures[currentIndex].imgFile}`,
  //   };

  //   const slideBackground = {
  //     backgroundImage: "url(/assets/coverImages/IMG_9389 copy.jpg)",
  //   };

  // console.log(pictures)
  //   console.log("slideStylesWidthBackground:",slideStylesWidthBackground)
  return (
    <div style={sliderStyles} className="">
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      {/* <video src={videos[currentIndex].videoFile} autoPlay className="w-full object-cover"></video> */}
      <div  >
        <img src={pictures[currentIndex].imgFile} alt="" />
      </div>
      {/* <div style={slideStylesWidthBackground}></div> */}
      {/* <div style={dotsContainerStyles}>
        {pictures.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
