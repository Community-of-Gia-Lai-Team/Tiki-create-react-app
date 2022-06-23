import Slider from 'react-slick';

import Slide1 from '@/assets/Image/slide1.webp';
import Slide2 from '@/assets/Image/slide2.webp';
import Slide3 from '@/assets/Image/slide3.webp';
import Slide4 from '@/assets/Image/slide4.webp';
import Slide5 from '@/assets/Image/slide5.webp';
import Slide6 from '@/assets/Image/slide6.webp';
import Slide7 from '@/assets/Image/slide7.webp';
import Slide8 from '@/assets/Image/slide8.webp';
import Slide9 from '@/assets/Image/slide9.webp';
import Slide10 from '@/assets/Image/slide10.webp';
import Slide11 from '@/assets/Image/slide11.webp';
import Slide12 from '@/assets/Image/slide12.webp';

function RenderOne() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Slide1} alt="" />
                </div>
                <div>
                    <img src={Slide2} alt="" />
                </div>
                <div>
                    <img src={Slide3} alt="" />
                </div>
                <div>
                    <img src={Slide4} alt="" />
                </div>
                <div>
                    <img src={Slide5} alt="" />
                </div>
                <div>
                    <img src={Slide6} alt="" />
                </div>
                <div>
                    <img src={Slide7} alt="" />
                </div>
                <div>
                    <img src={Slide8} alt="" />
                </div>
                <div>
                    <img src={Slide9} alt="" />
                </div>
                <div>
                    <img src={Slide10} alt="" />
                </div>
                <div>
                    <img src={Slide11} alt="" />
                </div>
                <div>
                    <img src={Slide12} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default RenderOne;
