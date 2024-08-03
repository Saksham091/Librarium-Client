import './deal.css'
import deal from '../../../assets/deal_img.jpg'

function Deal() {

  return (
    <>
      <section class="deal">

        <div class="content">
          <h3>Deal of the Day</h3>
          <h1>Up to 50% Off</h1>
          <p>Today's special deal: save up to 50% on a fantastic selection of books! Hurry and grab your books while the deal lasts!</p>
          <a href="#" class="btn">Shop Now</a>
        </div>


        <div class="image">
          <img src={deal} alt="deal" />
        </div>

      </section>
    </>
  )

}

export default Deal;