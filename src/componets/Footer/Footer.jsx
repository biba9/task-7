import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import imgLogo2 from "./../../assets/images/imglogo2.png";
import imgfooter1 from "./../../assets/images/footerThumb1_1.webp";
import imgfooter2 from "./../../assets/images/footerThumb1_2.webp";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="info3">
          <div className="address">
            <div className="info3">
              <div className="icone3">
                <MdLocationOn />
              </div>
              <div className="info-conaction">
                <h6>Adress</h6>
                <p>43-34 Rocky Road philadephia PA</p>
              </div>
              <div className="line3"></div>
            </div>
          </div>

          <div className="email">
            <div className="info3">
              <div className="icone3">
                <MdAttachEmail />
              </div>
              <div className="info-conaction">
                <h6>SendEmail</h6>
                <p>info@example.com</p>
              </div>
              <div className="line3"></div>
            </div>
          </div>
          <div className="call">
            <div className="info3">
              <div className="icone3">
                <MdAddCall />
              </div>
              <div className="info-conaction">
                <h6>CallEmnrgency</h6>
                <p>+88 0123 654 99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="detailes">
          <div className="about3">
            <img src={imgLogo2} alt="" />
            <p>
              sectetur adipisicing elit. Quam sequi iusto blanditiis sit id
              totam ipsam architecto ducimus recusandae excepturi dolore sunt
              nesciunt,
            </p>
            <div className="icones4">
              <a href="">   <FaFacebookF /></a>
              <a href=""><FaTwitter /> </a>
              <a href="">
                <FaYoutube />

              </a>
              <a href="">
                <FaInstagram />  

              </a>
            </div>


          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <a href="">Extech About</a>
            <a href="">Extech About</a>
            <a href="">Our Services</a>
            <a href="">Our Blogs</a>
            <a href="">FAQS</a>
            <a href="">Contact Us</a>
          </div>

          <div className="post">
            <h3>Recent Posts</h3>
            <div className="container">
              <img src={imgfooter1} alt="" />
              <div className="post-info">
                <div className="date">
                    <BsCalendar2Date />

                <h5>15h April ,2024</h5>
                </div>
              
                <p>Top 5 Most Famouse Tecnology Trend in 2024</p>
              </div>
            </div>
            <div className="container">
              <img src={imgfooter2} alt="" />
              <div className="post-info">
                <div className="date">
                <BsCalendar2Date />
                <h5>15h April ,2024</h5>

                </div>

                <p>Top 5 Most Famouse Tecnology Trend in 2024</p>
              </div>
            </div>
          </div>
          <div className="container-call">
            <h3>Contact Us</h3>
            <div className="call-info">
              <div className="call">
                <MdAttachEmail />
                <p>info@example.com</p>
              </div>
              <div className="call">
                <MdAddCall />
                <p>+88 0123 654 99</p>
              </div>
              <form action="">

                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email address" className="email"
                />
                <button>
                  <FaArrowRight />
                </button>
                <div className="check">
                  <input type="checkbox" name="" id="" />
                  <p>
                    I agree to the <span>privacy policy</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
          
        </div>
    
      </section>
          <section className="copyRights">
          <p  className="">&copy; All CopyRight 2024 by Extech</p>
          <div className="terms">
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
        </div>
        </section>
    </>
  );
}

export default Footer;
