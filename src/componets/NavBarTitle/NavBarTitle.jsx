import './NavBarTitle.css'
      import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function NavBarTitle({title}) {
  return (
      <>
          <div className='NavBarTitle'>
              <FaArrowLeft />
              <h5> {title}</h5>
          <FaArrowRight />    
          </div>
      
            
      </>
  )
}

export default NavBarTitle