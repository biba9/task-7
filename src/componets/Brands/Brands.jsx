import './Brands.css'
import imgcBrand from './../../assets/images/photo_2024-11-13_11-42-04.jpg'

function Brands() {
  return (
      <>
         <section  >
              <div className="title-brands">
                  <div className="line"></div>
<h4>1K + Brands Trust Us</h4>
                <div className="line"></div>

              </div>
              <div className="brands">
                 <img className='img-gray' src={imgcBrand} alt="" />
                  <img className='img-gray' src={imgcBrand} alt="" />

                  <img src={imgcBrand} alt="" />
                  <img className='img-gray' src={imgcBrand} alt="" />
                    <img className='img-gray' src={imgcBrand} alt="" />


              </div>
      </section>
          {/* <div className="brands">
          </div>   */}
          </>
  )
}

export default Brands
