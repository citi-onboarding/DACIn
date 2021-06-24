import { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './SobreDA.css';

import {
  SectionCards,
  DescricaoDA,
} from '../../components'

import NextArrow from '../assets/next_arrow.svg'
import PrevArrow from '../assets/prev_arrow.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'relative', width: '10.51px', height: '17.66px' }}
      onClick={onClick}
    >
      <img src={NextArrow} alt="next-arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'relative', width: '10.51px', height: '17.66px' }}
      onClick={onClick}
    >
      <img src={PrevArrow} alt="prev-arrow" />
    </div>
  );
}

function SobreDA() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "-15px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "auto" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          infinite: false,
          initialSlide: 0,
          speed: 500,
          centerMode: true,
          centerPadding: "-5px",
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }

      },

      {
        breakpoint: 440,
        settings: {
          infinite: false,
          initialSlide: 0,
          speed: 500,
          centerMode: true,
          centerPadding: "-5px",
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
    ]
  };

  const [infoDA, setInfoDA] = useState([]);
  const [SobreDATEXT, setSobreDATEXT] = useState([]);
  const [ImagesDA, setImagesDA] = useState([]);

  const loadImagesDA = async () => {
    const res = await axios.get('http://localhost:3001/api/sobreDA');
    setImagesDA(res.data.datacarrosselDA);
  };
  const loadInfoDA = async () => {
    const res = await axios.get('http://localhost:3001/api/sobreDA');
    setInfoDA(res.data.datainformationsDA);
  };
  const loadSobreDATEXT = async () => {
    const res = await axios.get('http://localhost:3001/api/sobreDA');
    setSobreDATEXT(res.data.datasobreDA);
  };

  useEffect(() => {
    loadInfoDA();
    loadSobreDATEXT();
    loadImagesDA();
  }, []);


  return (
    <div id="SobreDA">
      <SectionCards title={SobreDATEXT[0]?.title} description={SobreDATEXT[0]?.text} complement="SobreDA" />
      <div className="detailing">
        <div className="Surgimento">
          <DescricaoDA TitleDA={infoDA[0]?.title} DescriptionDA={infoDA[0]?.text} ImageDA={infoDA[0]?.Image.secure_url} ImageDADescription="puzzle" DAComplement="Surgimento" paragraph="Surgimento" />
        </div>
        <div className="Atualmente">
          <DescricaoDA TitleDA={infoDA[1]?.title} DescriptionDA={infoDA[1]?.text} ImageDA={infoDA[1]?.Image.secure_url} ImageDADescription="info" DAComplement="Atualmente" paragraph="Atualmente" />
        </div>
        <div className="Finalidade">
          <DescricaoDA TitleDA={infoDA[2]?.title} DescriptionDA={infoDA[2]?.text} ImageDA={infoDA[2]?.Image.secure_url} ImageDADescription="lamp" DAComplement="Finalidade" paragraph="Finalidade" />
        </div>
        <div className="Cursos">
          <DescricaoDA TitleDA={infoDA[3]?.title} DescriptionDA={infoDA[3]?.text} ImageDA={infoDA[3]?.Image.secure_url} ImageDADescription="notebook" DAComplement="Cursos" paragraph="Cursos" />
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-content">
          <Slider {...settings}>
            {ImagesDA?.map(({ Image }) =>
              <div>
                <div className="carousel-card">
                  <img src={Image.secure_url} alt={Image.key} width="300px" height="330px" />
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SobreDA;