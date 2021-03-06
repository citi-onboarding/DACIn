import { useState, useEffect } from 'react';
import axios from 'axios';
import {DescricaoCarrossel} from "../../components"
import url from '../../apiURL'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './DaDepoimentos.css';

import vector1 from '../DaDepoimentos/assets/Vectordireita.png'
import vector2 from '../DaDepoimentos/assets/Vectoresquerda.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"block", position:"relative",  width:"10.51px", 
      height: "17.66px" }}
      onClick={onClick}
    >
      <img src={vector1} alt="Vectordireita.png"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"block", position:"relative", width:"10.51px" , 
      height: "17.66px"  }}
      onClick={onClick}
    >
      <img src={vector2} alt="Vectoresquerda.png"/>
    </div>
  );
}

function DaDepoimentos() {

  const [DepoimentosCarrossel, setDepoimentosCarrossel] = useState([]);
  const [DepoimentosInformacoes, setDepoimentosInformacoes] = useState([]);
  
  const loadDepoimentosCarrossel = async () => {
    const res = await axios.get(`${url.url}/api/depoimentos`);
    setDepoimentosCarrossel(res.data.dataCaixaDepoimentos);
    
  };
  const loadDepoimentosInformacoes = async () => {
    const res = await axios.get(`${url.url}/api/depoimentos`);
    setDepoimentosInformacoes(res.data.dataDepoimentos);
    
  };
 

  useEffect(() => {
    loadDepoimentosCarrossel();
    loadDepoimentosInformacoes();
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [

      {
        breakpoint: 1140,
          settings: {
          seepd:500,
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 770,
          settings: {
          seepd:500,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 440,
          settings: {
          centerMode: true,
          seepd:500,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "110px"
        }
      },

      {
        breakpoint: 390,
          settings: {
          centerMode: true,
          seepd:500,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "100px"
        }
      },
      
      {
        breakpoint: 375,
          settings: {
          centerMode: true,
          seepd:500,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "90px"
        }
      },

      {
        breakpoint: 350,
          settings: {
          centerMode: true,
          seepd:500,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "70px"
        }
      }
    ]
  };


  return (
    <div id="depoimentos">
      <div className="descri????o2">
        <div className="barrinha"></div>
        <div className="titulo">
          <h1> Depoimentos</h1>
        </div>
        <div>
          <p className="texto">{DepoimentosInformacoes[0]?.text}</p>
        </div>
      </div>
      <div className="carrosseldepoimentos">
        <div className="carrosselfilhodepoimentos">
          <Slider {...settings}>
          {DepoimentosCarrossel?.map(({ image, text, name }) => (
            <div>
                <DescricaoCarrossel linkImage={image.secure_url}  text={text} nome={name}/>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default DaDepoimentos;
