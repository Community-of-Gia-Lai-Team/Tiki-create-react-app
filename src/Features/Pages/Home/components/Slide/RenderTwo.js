import { AppContextSave } from '@/components/Context/Context';
import { useContext } from 'react';
import Slider from 'react-slick';

// import { PrevArrow, PrevArrowNext } from './RenderArrow';

function RenderTwo() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const { dataYouTobe } = useContext(AppContextSave);

    return (
        <div>
            <Slider {...settings}>
                {dataYouTobe.map((data, index) => (
                    <div key={index}>
                        <iframe
                            width="100%"
                            height="274px"
                            src={`https://www.youtube.com/embed/${data}`}
                            title="Tự Render Bởi Youtobe"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RenderTwo;
