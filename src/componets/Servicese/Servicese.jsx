import imgAsterisk from './../../assets/images/asterisk.svg'
import  './Servicese.css'
function Servicese() {
  return (
      <section>
          <ul className='serv'>
              <li>
                  <img src={imgAsterisk} alt="" />
                  Cyber Security 
              </li>
                    <li>
                  <img src={imgAsterisk} alt="" />
                  IT Solution 
              </li>
                        <li>
                  <img src={imgAsterisk} alt="" />
                  Technology  
              </li>
                        <li>
                  <img src={imgAsterisk} alt="" />
                  Data Security 
          </li>
          </ul> 
    </section>
  )
}

export default Servicese