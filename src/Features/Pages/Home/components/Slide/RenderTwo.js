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

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <iframe
                        width="100%"
                        height="274px"
                        src="https://www.youtube.com/embed/ysjJlvQ3FFc"
                        title="NodeJS là gì? Tại sao phải sử dụng NodeJS trong khóa ReactJS?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <iframe
                        width="100%"
                        height="274px"
                        src="https://www.youtube.com/embed/F5z6YoR8of0"
                        title="Fn.bind() method P1? Học rồi thì xem lại cho chắc nha!"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <iframe
                        width="100%"
                        height="274px"
                        src="https://www.youtube.com/embed/30sMCciFIAM"
                        title="SPA/MPA là gì?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Slider>
        </div>
    );
}

export default RenderTwo;
