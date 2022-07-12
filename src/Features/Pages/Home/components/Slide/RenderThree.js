import { AppContextSave } from '@/components/Context/Context';
import { useContext } from 'react';
import Slider from 'react-slick';

import ProductsRender from './ProductsRender';

function RenderThree() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: '1200px',
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: '1008px',
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: '560px',
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { slider } = useContext(AppContextSave);

    return (
        <div>
            <Slider {...settings}>
                {slider &&
                    slider.map((data, index) => (
                        <div key={index}>
                            <ProductsRender ImagePro={data.img} price={data.price} reducerprice={data.reducerprice} />
                        </div>
                    ))}
            </Slider>
        </div>
    );
}

export default RenderThree;
