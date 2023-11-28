import './loader.css'
import loader from '../../assets/loader_img.gif'

function App() {

  return (
    <>
      <div class="loader-container">
        <img src={loader} alt="loader"/>
      </div>

      <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    </>
  )

}

export default App;