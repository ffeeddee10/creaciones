import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import CartContext from "../../context/CartContext";
const SwiperProduct = () => {
  const { addItems } = useContext(CartContext);
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="MySwiper"
      >
        <div>
          <div>
            {addItems.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <div class="home_content grid">
                    <div class="home_group">
                      <img src={product.img} alt="" class="home_img" />
                    </div>
                    <div class="home_data">
                      <h3 class="home_subtitle">{product.subtitle}</h3>
                      <h1 class="home_title">{product.title}</h1>
                      <p class="home_description">{product.description}</p>
                      <div class="home_buttons">
                        <Link to={"/Tienda"} class="button_home">
                          Comprar
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </div>
      </Swiper>
    </>
  );
};
export default SwiperProduct;
