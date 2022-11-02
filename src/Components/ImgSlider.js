import styled from "styled-components"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"

const ImgSlider = () => {
    const config = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        autoPlaySpeed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            <Carousel {...config}>
                <Wrap>
                    <a href="#">
                        <img src="/images/slider-1.jpg" alt="slide-1" />
                    </a>
                </Wrap>

                <Wrap>
                    <a href="#">
                        <img src="/images/slider-2.jpg" alt="slide-2" />
                    </a>
                </Wrap>

                <Wrap>
                    <a href="#">
                        <img src="/images/slider-3.jpg" alt="slide-3" />
                    </a>
                </Wrap>

                <Wrap>
                    <a href="#">
                        <img src="/images/slider-4.jpg" alt="slide-4" />
                    </a>
                </Wrap>
            </Carousel>
        </div>
    );
}

const Carousel = styled(Slider)`
    margin: 1em;
    padding-inline: 1em;

    .slick-list{
        overflow: initial;
    }
`;

const Wrap = styled.div`
    z-index: -100;
    cursor: pointer;
    a{
        position: relative;
        display: block;
        padding: .75em;
    }
    & img{
        border-radius: .5em;
        width: 100%;
        cursor: pointer;
    }
`;

export default ImgSlider

