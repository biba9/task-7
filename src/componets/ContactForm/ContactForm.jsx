import { MdAttachEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import './ContactForm.css';
import imgcall from './../../assets/images/AboutHero.webp'
import { FaArrowRight } from "react-icons/fa6";

function ContactForm() {
  return (
      <>
          <div className="container">
              <div className="left">
            <div className="info4">
              <div className="icone4">
                <MdAddCall />
              </div>
              <div className="info-conaction">
                <h6>Call Us 7/24</h6>
                <p>+88 0123 654 99</p>
                      </div>
                                        <div className="line4"></div>

            </div>
                
            
            <div className="info4">
              <div className="icone4">
                <MdAttachEmail />
              </div>
              <div className="info-conaction">
                <h6>Make a Quote</h6>
                <p>infotech@example.com</p>
              </div>
                                        <div className="line4"></div>

                  </div>

            <div className="info4">
              <div className="icone4">
                  <MdLocationOn />
              </div>
              <div className="info-conaction">
                <h6>Location</h6>
                <p>4517 Washington ave.</p>
              </div>
                  </div>
                 
                 <img className="imgcall" src={imgcall} alt="" />

                 </div>
              <div className="right">
                  <h4>Ready to Get Started</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat sequi maxime, voluptatum deleniti fugiat officiis quis asperiores eaque, veniam velit nisi voluptas laborum? Exerci
                  </p>
                  <form action="">
                      <div className="dfs">
                           <div className="df">
                             <label htmlFor="">YourName*</label>
                      <input type="text" />
                      </div>
                      <div className="df">
                             <label htmlFor="">YourEmail*</label>
                                            <input type="email" />

                          </div>
                     
                   </div>
                    
                       <label htmlFor="">WriteMessage*</label>
                      <textarea name="" id=" " rows={4} cols={6}></textarea>
                      <button className="contactButton">Send Message
                                            <FaArrowRight />

                      </button>
                      
                  </form>
            </div>
          </div>
    </>
  )
}

export default ContactForm