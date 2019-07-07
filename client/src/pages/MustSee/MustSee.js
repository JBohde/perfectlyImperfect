import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import NavHeader from '../../components/NavHeader';
import './MustSee.css';

class MustSee extends React.Component {
  state = {};

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <>
        <Container>
          <NavHeader />
          <div className="iframe-container">
            <iframe
              title="mustSeeOne"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5xHi7-2oas8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              modestbranding="1"
            />
          </div>
          <br />
          <Slider {...settings}>
            <div className="iframe-container">
              <iframe
                title="mustSeeTwo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GVG4wgCqeEQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                modestbranding="1"
              />
            </div>
            <div className="iframe-container">
              <iframe
                title="mustSeeThree"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wnHW6o8WMas"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                modestbranding="1"
              />
            </div>
            <div className="iframe-container">
              <iframe
                title="mustSeeFour"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mgmVOuLgFB0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                modestbranding="1"
              />
            </div>
          </Slider>
        </Container>
      </>
    );
  }
}

export default MustSee;
