import './TitleCards.css'

import Cards from '../Cards/Cards'
import imgcard1 from './../../assets/images/04.webp'
import imgcard2 from './../../assets/images/06.webp'
import imgcard4 from './../../assets/images/07.webp'

function TitleCards() {
  return (
<section className='title2' >
          <div className='TEAMMEBER'> 
                        TEAMMEBER
          </div>
          <div className="navbaritem">
                  <h3>our dedicated team members</h3>
           <button>AllMebers</button>
          </div>
          <div className="Cards-fx">
              <Cards
                  imgcard ={imgcard1}
                  title={'Masirul Islam'}
                  des={'Web Designer'} />

              <Cards
                imgcard ={imgcard1}

                  title={'Masirul Islam'}
                  des={'Web Designer'} />
             
              <Cards
               imgcard ={imgcard2}

                  title={' Arnold Hemigway'}
                  des={'Web Expert'} />
              
              <Cards
                  imgcard ={imgcard4}

                  title={' Shikon Hoque'}
                  des={'Data Analyst'} />


          </div>

      </section>
  
  )
}

export default TitleCards   
