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
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
                <div>
                    <ProductsRender />
                </div>
            </Slider>
        </div>
    );
}

export default RenderThree;
