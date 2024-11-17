import './ServicesHome.css'
import logo1 from './../../assets/images/brandLogo1_1.svg';
import logo2 from './../../assets/images/brandLogo1_2.svg';
import logo3 from './../../assets/images/brandLogo1_3.svg';
import logo4 from './../../assets/images/brandLogo1_4.svg';
import NavBarTitle from '../NavBarTitle/NavBarTitle';
import imgsrv1 from  './../../assets/images/serviceIcon1_2.svg';
import imgsrv2 from  './../../assets/images/serviceIcon1_3.svg';
import imgsrv3 from  './../../assets/images/serviceIcon1_4.svg';
import imgsrv4 from  './../../assets/images/serviceIcon1_1.svg';

function ServicesHome() {
  return (
    <>
      <section>
        <div className=" con-sev">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
        <div className="line5"></div>
        <NavBarTitle title={"our services"} />
        <div className="titelsvrice">
          <h2> elvating busninesses with IT ingenuoty</h2>
        </div>

        <div className="cards-srv">
          <div className="card-srv">
            <div className="img-srv">
              <img src={imgsrv1} alt="" />
            </div>
            <h5>Woo Commerce</h5>
            <p>
              elit. provident odio, magnam est blanditiis ipsum cumque corporis
              impedit distinctio non praesentium arch
            </p>
            <button>Read More </button>
          </div>
          <div className="card-srv">
            <div className="img-srv">
              <img src={imgsrv2} alt="" />
            </div>
            <h5>CRM Soultion </h5>
            <p>
              elit. provident odio, magnam est blanditiis ipsum cumque corporis
              impedit distinctio non praesentium arch
            </p>
            <button>Read More </button>
          </div>
          <div className="card-srv">
            <div className="img-srv">
              <img src={imgsrv3} alt="" />
            </div>
            <h5>Web Design</h5>
            <p>
              elit. provident odio, magnam est blanditiis ipsum cumque corporis
              impedit distinctio non praesentium arch
            </p>
            <button>Read More </button>
          </div>
          <div className="card-srv">
            <div className="img-srv">
              <img src={imgsrv4} alt="" />
            </div>
            <h5>Data Guard Sentinel</h5>
            <p>
              elit. provident odio, magnam est blanditiis ipsum cumque corporis
              impedit distinctio non praesentium arch
            </p>
            <button>Read More </button>
          </div>
        </div>
      </section>

      <div className="vedio-srv">
        <iframe
          width="900"
          height="315"
          src="https://www.youtube.com/embed/CMS728YNHmo?si=LN_DvMEIUJJk_3hM"
          title="YouTube video player"
          allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <section className="infos-srv">
        <div className="info-srv">
          <h1>01</h1>
          <h4>Requirment</h4>
          <p>
            {" "}
            laudantium ea sunt distinctio aliquid, similique provident amet,
            maxime consequatur doloremque aspernatur.
          </p>
        </div>
        <div className="info-srv">
          <h1>02</h1>
          <h4>UI/UX Design</h4>
          <p>
            {" "}
            laudantium ea sunt distinctio aliquid, similique provident amet,
            maxime consequatur doloremque aspernatur.
          </p>
        </div>
        <div className="info-srv">
          <h1>03</h1>
          <h4>Protitype</h4>
          <p>
            laudantium ea sunt distinctio aliquid, similique provident amet,
            maxime consequatur doloremque aspernatur.
          </p>
        </div>
        <div className="info-srv">
          <h1>04</h1>
          <h4>Development</h4>
          <p>
            laudantium ea sunt distinctio aliquid, similique provident amet,
            maxime consequatur doloremque aspernatur.
          </p>
        </div>
      </section>
    </>
  );
}

export default ServicesHome