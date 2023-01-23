import Mensaje from '../../assets/img/Mensaje.svg';
import Correo from '../../assets/img/Correo.svg';
import Facebook from '../../assets/img/Facebook.svg';
import { information } from '../../data/information';
import '../../assets/styles/index.css'


function Contact({titulo}) {
  return (  
    <>
      <div className='container-conct'>

            <div>
              <h1 className='TitleFull'>{titulo}</h1>
            </div>

            <div className='content-Redes'>
              <h1 className='informa'><img src={Mensaje} alt="" /> {information.phoneNumber}</h1>
            </div>

            <div className='content-Redes'>
              <h1 className='informa'><img src={Correo} alt="" /> {information.myEmail}</h1>
            </div>

            <div className='content-Redes'>
              <h1 className='informa' ><img src={Facebook} alt="" /> {information.myFacebook}</h1>
            </div>

      </div>

    </>
  );
}

export default Contact;