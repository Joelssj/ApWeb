import { information } from '../../data/information';

function Skills() {
  return (  
    <>
      <div>
        <h1>{information.contactTitle[2]}</h1>
        <div className='fullDescription'>
          <li>Mente abierta</li>
          <li>Creativo</li>
          <li>Trabajo en equipo</li>
          <li>Capacidad de adaptacion</li>
          <li>Resolucion de problemas</li>
        </div>
      </div>
    </>
  );
}

export default Skills;