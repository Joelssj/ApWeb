import { information } from '../../data/information';

function Knowledge() {
  return (  
    <>
      <div>
        <h1>{information.contactTitle[1]}</h1>
        <div className='fullDescription'>
          <li>C#</li>
          <li>C++</li>
          <li>Javascript</li>
          <li>Base de datos</li>
        </div>
      </div>
    </>
  );
}

export default Knowledge;