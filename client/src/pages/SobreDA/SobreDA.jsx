import { useState, useEffect } from 'react';
import axios from 'axios';

import './SobreDA.css';

import {
  SectionCards,
  DescricaoDA,
} from '../../components'

import puzzle from '../assets/puzzle.svg'
import info from '../assets/info.svg'
import lamp from '../assets/lamp.svg'
import notebook from '../assets/notebook.svg'

function SobreDA() {
  return (
    <div className="SobreDA">
      <SectionCards title="Sobre o DA" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ut tincidunt aliquam, faucibus eu amet. Odio nulla enim, nam amet, enim, sodales molestie in sem." bgcolor="linear-gradient(118.63deg, #DB1E2F -0.8%, #4C3B92 72.27%)" padding="4.2em 6em 10.5em 12em" borderDirection="0px 8px 8px 0px"/>
      <div className="detailing">
        <div className="Surgimento">
          <DescricaoDA TitleDA="Surgimento" DescriptionDA="Surgiu em 1974, antes vinculado ao Centro de Ciências Exatas e da Natureza (CCEN) " WidthDA="250px" ImageDA={puzzle} ImageDADescription="puzzle" squarePadding="20px 11px 20px 11px"/>
        </div>
        <div className="Atualmente">
          <DescricaoDA TitleDA="Atualmente" DescriptionDA="Nos dias de hoje, o que era o CCEN, se tornou o Centro de Informatica (CIn)" WidthDA="264px" ImageDA={info} ImageDADescription="info" squarePadding="20px 16px 20px 16px"/>
        </div>
        <div className="Finalidade">
          <DescricaoDA TitleDA="Finalidade" DescriptionDA="Representar estudantes de graduação do centro" WidthDA="280px" ImageDA={lamp} ImageDADescription="lamp" squarePadding="18px"/>
        </div>
        <div className="Cursos">
          <DescricaoDA TitleDA="Cursos" DescriptionDA="O DA representa alunos dos cursos de Ciências da Computação, Engenharia da Computação e Sistemas de Informação" WidthDA="280px" ImageDA={notebook} ImageDADescription="notebook" squarePadding="17px 13px 17px 13px"/>
        </div>
      </div>
    </div>
  );
}

export default SobreDA;