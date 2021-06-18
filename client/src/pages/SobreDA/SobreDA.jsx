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
import puzzle from '../assets/puzzle.svg'
import info from '../assets/info.svg'
import lamp from '../assets/lamp.svg'
import notebook from '../assets/notebook.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', position: 'relative', width: '10.51px', height: '17.66px'}}
      onClick={onClick}
    >
      <img src={NextArrow} alt="next-arrow"/>
      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', position: 'relative', width: '10.51px', height: '17.66px'}}
      onClick={onClick}
    >
      <img src={PrevArrow} alt="prev-arrow"/>
      </div>
  );
}

function SobreDA() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="SobreDA">
      <SectionCards title="Sobre o DA" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ut tincidunt aliquam, faucibus eu amet. Odio nulla enim, nam amet, enim, sodales molestie in sem." complement="SobreDA" />
      <div className="detailing">
        <div className="Surgimento">
          <DescricaoDA TitleDA="Surgimento" DescriptionDA="Surgiu em 1974, antes vinculado ao Centro de Ciências Exatas e da Natureza (CCEN) " WidthDA="250px" ImageDA={puzzle} ImageDADescription="puzzle" squarePadding="20px 11px 20px 11px" />
        </div>
        <div className="Atualmente">
          <DescricaoDA TitleDA="Atualmente" DescriptionDA="Nos dias de hoje, o que era o CCEN, se tornou o Centro de Informatica (CIn)" WidthDA="264px" ImageDA={info} ImageDADescription="info" squarePadding="20px 16px 20px 16px" />
        </div>
        <div className="Finalidade">
          <DescricaoDA TitleDA="Finalidade" DescriptionDA="Representar estudantes de graduação do centro" WidthDA="280px" ImageDA={lamp} ImageDADescription="lamp" squarePadding="18px" />
        </div>
        <div className="Cursos">
          <DescricaoDA TitleDA="Cursos" DescriptionDA="O DA representa alunos dos cursos de Ciências da Computação, Engenharia da Computação e Sistemas de Informação" WidthDA="280px" ImageDA={notebook} ImageDADescription="notebook" squarePadding="17px 13px 17px 13px" />
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-content">
          <h2>Carrossel</h2>
          <Slider {...settings}>
            <div>
              <div className="carousel-card">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida amet in neque pretium, ut id vestibulum tempus sagittis.</h3>
              </div>
            </div>
            <div>
              <div className="carousel-card">
                <h3>1</h3>
              </div>
            </div>
            <div>
              <div className="carousel-card">
                <h3>1</h3>
              </div>
            </div>
            <div>
              <div className="carousel-card">
                <h3>1</h3>
              </div>
            </div>
            <div>
              <div className="carousel-card">
                <h3>1</h3>
              </div>
            </div>
            <div>
              <div className="carousel-card">
                <h3>1</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SobreDA;