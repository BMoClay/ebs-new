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

// The slider holds both stills and video files, so detect video sources by
// their bundled URL extension and render a muted, looping <video> for them.
const isVideo = (src) => typeof src === "string" && /\.(mp4|mov|webm|ogg)(\?|$)/i.test(src);

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };


// const ImageSlider = ({ pictures, videos }) => {
const ImageSlider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!pictures || pictures.length === 0) return null;

  const visibleIndex = currentIndex % pictures.length;

  const goToPrevious = () => {
    const isFirstSlide = visibleIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : visibleIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = visibleIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : visibleIndex + 1;
    setCurrentIndex(newIndex);
  };

  //   const goToSlide = (slideIndex) => {
  //     setCurrentIndex(slideIndex);
  //   };

  //   const slideStylesWidthBackground = {
  //     ...slideStyles,
  //     backgroundImage: `${pictures[visibleIndex].imgFile}`,
  //   };

  //   const slideBackground = {
  //     backgroundImage: "url(/assets/coverImages/IMG_9389 copy.jpg)",
  //   };

  // console.log(pictures)
  //   console.log("slideStylesWidthBackground:",slideStylesWidthBackground)
  return (
    <div style={sliderStyles} className="">
      {pictures.length > 1 && <div>
        <button type="button" aria-label="Previous image" onClick={goToPrevious} style={{...leftArrowStyles, background:"transparent", border:0, padding:0, minWidth:44, minHeight:44}}>
          ❰
        </button>
        <button type="button" aria-label="Next image" onClick={goToNext} style={{...rightArrowStyles, background:"transparent", border:0, padding:0, minWidth:44, minHeight:44}}>
          ❱
        </button>
      </div>}
      <div>
        {isVideo(pictures[visibleIndex].imgFile) ? (
          <video
            src={pictures[visibleIndex].imgFile}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full object-cover"
          />
        ) : (
          <img src={pictures[visibleIndex].imgFile} alt="" />
        )}
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
