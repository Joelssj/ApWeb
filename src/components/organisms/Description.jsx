import Facebook from '../../assets/img/Facebook.svg';
import Correo from '../../assets/img/Correo.svg';
import Joel from '../../assets/img/Joel.svg';
import Skills from '../atoms/Skills';
import Knowledge from '../atoms/Knowledge';
import Contact from '../atoms/Contact';
import { information } from '../../data/information';
import Home from '../../pages/Home';

function Description() {
    return (  
    <header class="container">
        <div class="conetent-cafe">
            <img className='img1' src={Joel} alt="" />
            <div className='content-aboutme'></div>
            <Contact titulo={information.contactTitle[0]} />
            <div class="content-header-cafe">
                <div className='content-data'>
                    <Knowledge/>
                    <Skills/>
                </div>
            </div>
        </div>


        <div class="content-gris">
            <div class="fondo-gris">
                <div class="tile-fil">
                    <h1 className='title-fill-name'>{information.nombreTitle}</h1>
                    <p className='title-fill-description'>{information.Ing}</p>
                </div>
            </div>

            <div class="informa-person">
                <h1> Perfil personal</h1>
                <div class="informa-person-paragraft">
                    <p>Estudiante de 4° cuatrimestre en la carrera de desarrollo de software, con conocimientos basicos de programacion y diseños, participante en dos proyectos integradores, uno echo con programacion orientada a objetos y otro con JavaScript y base de datos.</p>
                </div>
            </div>

            <div class="informa-person">

                <h1> Formación Academica</h1>
                <div class="informa-person-paragraft">

                 <p>Escuela Primaria Valentin Gomez Farías.</p>
                  <p>(Tronco común)</p>

                 <p>Telesecundaria 601</p>
                 <p>(Tronco común).</p>
                    <p>Conalep 170</p>
                     <p>(Tecnico en informatica).</p>

          <p>Actualmente estudiando en la universidad Politecnica de Chiapas.</p>
          <p>(3 de Enero del 2022).</p>

 <head></head>
                </div>
            </div>
        </div>
        </header>
    );
}

export default Description;