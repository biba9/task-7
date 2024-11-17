import  './Clients.css'
import client from "./../../assets/images/ctaThumb1_1.webp";
import NavBarTitle from '../NavBarTitle/NavBarTitle';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import clientFeedback from  './../../assets/images/testiThumb3_1.webp';
import clientFeedback2 from "./../../assets/images/testiThumb3_3.webp";

import { RiDoubleQuotesR } from "react-icons/ri";

function Clients() {
  return (
    <>
      <section className="sec-con-cl">
        <div className="conactClients">
          <img src={client} alt="" />
          <div className="contPargraf">
            <NavBarTitle title={"contactUs"} />
            <p>24/7 Expert Hosting Support Our Customers Love</p>
          </div>
          <button>take to speclaist</button>
        </div>
      </section>
      <section className="sec-clientFeedback">
        <NavBarTitle title={"TESTMONIALS"} />
        <p>Our Lastest Client Feedback</p>
        <div className="cardsClient">
          <div className="cardClient ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
            <p>
              adipisicing elit. Ad molestiae itaque iure laborum aperiam. Nihil,
              aliquid. Itaque distinctio, eveniet tenetur nisi accusamus esse
              exercitationem quasi voluptas beatae officia quod ea.
            </p>
            <div className="info-client">
              <img src={clientFeedback} alt="" />
              <div className="info2-client">
                <h5>John Doe</h5>
                <p>CEO</p>
              </div>
              <div className="quot">
                <RiDoubleQuotesR />
              </div>
            </div>
          </div>
          <div className="cardClient blue">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
            <p>
              adipisicing elit. Ad molestiae itaque iure laborum aperiam. Nihil,
              aliquid. Itaque distinctio, eveniet tenetur nisi accusamus esse
              exercitationem quasi voluptas beatae officia quod ea.
            </p>
            <div className="info-client">
              <img src={clientFeedback2} alt="" />
              <div className="info2-client">
                <h5>John Doe</h5>
                <p>CEO</p>
              </div>
              <div className="quot">
                <RiDoubleQuotesR />
              </div>
            </div>
          </div>

          <div className="cardClient">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
            <p>
              adipisicing elit. Ad molestiae itaque iure laborum aperiam. Nihil,
              aliquid. Itaque distinctio, eveniet tenetur nisi accusamus esse
              exercitationem quasi voluptas beatae officia quod ea.
            </p>
            <div className="info-client">
              <img src={clientFeedback2} alt="" />
              <div className="info2-client">
                <h5>John Doe</h5>
                <p>CEO</p>
              </div>
              <div className="quot">
                <RiDoubleQuotesR />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients