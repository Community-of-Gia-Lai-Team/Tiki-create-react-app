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
                        src="https://www.youtube.com/embed/usEAgNIhFW4"
                        title="Tiki - Miền Đất Hứa Cho Các Lập Trình Viên"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <iframe
                        width="100%"
                        height="274px"
                        src="https://www.youtube.com/embed/UmnoWQzkuv4"
                        title="Tiki - Nơi Dành Cho Những Người Muốn Tạo Sự Khác Biệt"
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
