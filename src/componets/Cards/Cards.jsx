import './Cards.css'
import { FaShareAlt } from "react-icons/fa";
// import imgcard1 from './../../assets/images/04.webp'
// import imgcard2 from './../../assets/images/06.webp'
// import imgcard4 from './../../assets/images/07.webp'

function Cards( {imgcard, title,des}) {
  return (
    <>
  
      <section>
        <div className="card2">
              <img src={imgcard} alt="image" />
              <div className="info2">
                <div className="icone2">
                  <FaShareAlt />
                </div>
                <h3>{title}</h3>
                <p>{des}</p>
              </div>
            </div>
         
     
      </section>
    </>
  )
}

export default Cards