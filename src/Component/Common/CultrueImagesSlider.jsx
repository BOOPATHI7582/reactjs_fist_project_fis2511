import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};
const CultrueImagesSlider = ({deviceType}) => {
     const SliderImge = [
          "https://www.nextwebi.com/assets/images/about-us/culture-3.jpg",
          "https://www.nextwebi.com/assets/images/about-us/culture-6.jpg",
          "https://www.nextwebi.com/assets/images/about-us/culture-7.jpg",
          "	https://www.nextwebi.com/assets/images/about-us/culture-1.jpg",
          "https://www.nextwebi.com/assets/images/about-us/culture-2.jpg",
          "https://www.nextwebi.com/assets/images/about-us/culture-3.jpg"
    ]
  return (
        <Carousel

            responsive={responsive}
            ssr={false}
            infinite={true}
            autoPlay={deviceType !== "mobile"}
            autoPlaySpeed={1000}
            customTransition="all 0.05s ease"
            transitionDuration={500}
            arrows={false}
            itemClass="px-3"

        >
            {SliderImge.map((e) => (
                <>
                    <div className="  flex justify-center items-center  ">
                        <img src={e} alt="" className=" object-cover " />

                    </div>
                </>
            ))}
            

            
            
            
        </Carousel>

    );
}

export default CultrueImagesSlider





