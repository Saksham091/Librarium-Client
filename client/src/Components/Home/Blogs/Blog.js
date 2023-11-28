import './blog.css'
import blog_1 from '../../../assets/blog_1.jpg'
import blog_2 from '../../../assets/blog_2.jpg'
import blog_3 from '../../../assets/blog_3.jpg'
import blog_4 from '../../../assets/blog_4.jpg'
import blog_5 from '../../../assets/blog_5.jpg'

function Blog() {

  return (
    <>
      <section class="blogs" id="blogs">

        <h1 class="heading"> <span>Our Blogs</span> </h1>

        <div class="blogs-slider">

          <div class="b_wrapper">

            <div class="box">
              <div class="image">
                <img src={blog_1} alt="blog"/>
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <img src={blog_2} alt="blog"/>
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <img src={blog_3} alt="blog"/>
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <img src={blog_4} alt="blog"/>
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <img src={blog_5} alt="blog"/>
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
              </div>
            </div>

          </div>

        </div>

      </section>

    </>
  )

}

export default Blog;