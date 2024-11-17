import   './Blog.css'
import NavBarTitle from "../NavBarTitle/NavBarTitle";
import blogth1 from "./../../assets/images/blogThumb1_2.webp";
import blogth2 from "./../../assets/images/blogThumb1_3.webp";
import blogth3 from "./../../assets/images/blogThumb1_1.webp";

import blog2 from "./../../assets/images/blogProfile1_3.webp";
import blog3 from "./../../assets/images/blogProfile1_1.webp";
import { FaArrowRight } from "react-icons/fa6";

function Blog() {
  return (
    <>
      <section className="sec-blog">
        <NavBarTitle title={"Blog & News"} />
        <div className="imgs-blog">
          <img src={blogth1} alt="" />
          <img src={blogth2} alt="" />
          <img src={blogth3} alt="" />
        </div>
      </section>
      <section className="cardsBlogs">
        <div className="cardblog">
          <div className="date">
            <button className="btn1">Uncategorized</button>
            <p>MARCH 14, 2024</p>
          </div>
          <p className="cb-pargraph">Best and fastes data server ever </p>
          <div className="info-blog">
            <div className="detailes-blog">
              <img src={blog3} alt="" />
              <div className="name-blog">
                <h5>Admin</h5>
                <p>Co ,Foulsd</p>
              </div>
            </div>

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="cardblog">
          <div className="date">
            <button className="btn1">Uncategorized</button>
            <p>MARCH 14, 2024</p>
          </div>
          <p className="cb-pargraph">Best and fastes data server ever </p>
          <div className="info-blog">
            <div className="detailes-blog">
              <img src={blog2} alt="" />
              <div className="name-blog">
                <h5>Admin</h5>
                <p>Co ,Foulsd</p>
              </div>
            </div>

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="cardblog">
          <div className="date">
            <button className="btn1">Uncategorized</button>
            <p>MARCH 14, 2024</p>
          </div>
          <p className="cb-pargraph">Best and fastes data server ever </p>
          <div className="info-blog">
            <div className="detailes-blog">
              <img src={blog2} alt="" />
              <div className="name-blog">
                <h5>Admin</h5>
                <p>Co ,Foulsd</p>
              </div>
            </div>

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog