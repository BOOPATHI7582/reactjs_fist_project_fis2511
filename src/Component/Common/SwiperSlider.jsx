import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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

const SliderImages = [
    "https://www.nextwebi.com/assets/images/home/google.png",
    "	https://www.nextwebi.com/assets/images/home/designrush-new-logo.png",
    "https://www.nextwebi.com/assets/images/home/tracxn.png",
    "https://www.nextwebi.com/assets/images/home/good-firms-logo.png",
    "https://www.nextwebi.com/assets/images/home/crunchbase.png",
    "	https://www.nextwebi.com/assets/images/home/google.png",
    "	https://www.nextwebi.com/assets/images/home/good-firms-logo.png"
]
const SwiperSlider = ({ deviceType, SliderImgeFun }) => {
    console.log(SliderImgeFun);
    
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
            {SliderImages.map((e) => (
                <>
                    <div className="  flex justify-center items-center mt-6 border">
                        <img src={e} alt="" className="w-[100px] h-[100px] object-contain " />

                    </div>
                </>
            ))}
            

            
            
            
        </Carousel>

    );
};

export default SwiperSlider;
