import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
// import Dabbe from './Components/Dabbe';
import { SliderData } from "./Components/SliderData";
import BackgroundImage from './Components/BackgroundImage';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Components/Product';
import { productData , responsive } from './Components/ProductData';
import Proteins from './Components/Proteins';
// import { proteinData} from './Components/ProteinData';
import Footer from './Components/Footer';
import Navbar1 from './Components/Navbar1';
import Chat from './Components/Chat';

function App() {
  

  const product= productData.map((item) =>{
    return <Product url={item.imageurl} star={item.ratingStar} starphoto={item.starImg} review={item.ratingReview} icon={item.vegNonVegIcon} name={item.variantName} price={item.price} ogprice={item.originalPrice} discount={item.discount} offer={item.offer} premium={item.premiumPrice} />
  });

  // const proCategories= proteinData.map((items)=>{
  //   return <Proteins img={items.img} heading={items.heading} para={items.para} />
  // })

  return (
    <>
      <Navbar1/>
      <Navbar/>  
      <ImageSlider slides={SliderData} /> 
      <BackgroundImage/>
      <ImageSlider slides={SliderData} /> 
      <div className='new'>
        <div className="newprice">
          <div className="newpp">
            <div className="fresh">fresh</div>
            <div className="viewall">
              <a className='viewall-list' href="https://www.healthkart.com/sale/special-sale?itracker=w:home|price-slash-alert|view-all|;c:view-all|;">view all</a>            
            </div>
          </div>
        </div>
      <Carousel showDots={true} responsive={responsive}>
      {product}
      </Carousel>
      </div>
      {/* <Dabbe/> */}
      <Proteins> 
        {/* {proCategories} */}
      </Proteins>
      <Footer/>
      <Chat/>
    </>
  );
}

export default App;
