import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../../component/Slider/Slider"
import banner1 from "../../image/banner_1.jpg" ;
import banner2 from "../../image/banner_2.jpg";
import banner3 from "../../image/banner_3.jpg";
import MenuFind from "../../component/MenuFind/MenuFind"
import Product from "../../component/Product/Product";
import { thongbao } from "../../data/data";

import { khuyenmai } from './../../data/data';
function Home() {
  return (
    <div className="Frames">
      <Slider />
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="banner_item align-items-center"  style={{backgroundImage:`url(${banner1})`}}>
                  <div className="banner_category">
                    <a href="categories.html">women's</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_item align-items-center" style={{backgroundImage:`url(${banner2})`}}>
                  <div className="banner_category">
                    <a href="categories.html">accessories's</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_item align-items-center" style={{backgroundImage:`url(${banner3})`}}>
                  <div className="banner_category">
                    <a href="categories.html">men's</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="menusus_1">
         <MenuFind/>
         <p className="title-p" style={{marginTop:"0px"}}>Trending Products</p>
			 	<p className="content-p">Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
           <div className="sp_moi">
               <div className="row">
                  {
                    khuyenmai.map((item) =>(
                      <Product
                      img={item.img}
                      title={item.title}
                      tien={item.tien}
                      khuyenmai={item.khuyenmai}
                      giam={item.giam}
                    />

                    ))
                  }
                 

               </div>
               
           </div>     
           <p className="title-p" style={{marginTop:"0px"}}>From Our Blog</p>
			 	<p className="content-p">Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
         <div className="sp_moi">
               <div className="row" style={{justifyContent:"space-between"}}>
                  {
                    thongbao.map((item) =>(
                      <Product
                      witbh="product-30"
                      img={item.img}
                      title={item.title}
                      tien={item.tien}
                      khuyenmai={item.khuyenmai}
                      giam={item.giam}
                    />

                    ))
                  }
                 

               </div>
               
           </div>    
       </div>

    </div>
  );
}

export default Home;
