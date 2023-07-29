import React, { useEffect, useState } from 'react'
import "react-slideshow-image/dist/styles.css"
import { Fade, Zoom, Slide } from 'react-slideshow-image'

const slideImage = [
    {
        url: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "first Slider"
    },
    {
        url: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Second Slider"
    },
    {
        url: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Third Slider"
    }
]

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    backgroundSize: "cover"
}


const ImageSlider = () => {

    const [banner, setBanner] = useState([]);
    useEffect(() => {
        setBanner(slideImage);
    }, []);

    return (
        <>
            <div className='"slide-container'>
                <Slide>
                    {
                        banner.map((banners, index) => (
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "400px",
                                backgroundSize: "cover"
                            }} className={index === 0 ? "carousel-item active" : "carousel-item"} key={banners.index}>
                                <img src={banners.url} className="d-block w-100" alt='...' />
                            </div>
                        ))
                    }

                </Slide>
            </div>
        </>
    )
}

export default ImageSlider

