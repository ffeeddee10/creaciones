import React from "react";
import AboutImg from "../../img/about-img.jpg";
const AboutUsInfo = () => {
  return (
    <section class="about section container">
      <h2 class="breadcrumb__title">Urvana Handmade</h2>
      <h3 class="breadcrumb__subtitle">
        Inicio {`>`} <span>Urvana Handmade</span>
      </h3>
      <div class="about_container grid">
        <img src={AboutImg} alt="" class="about_img" />
        <div class="about_data">
          <h2 class="section__title about_title">
            Articulos completamente hechos a mano<br />
          </h2>
          <p class="about_description">
            Desde ya hace mas de 20 años dedicandole todo el amor y cariño a hacer que cada producto sea unico y original
          </p>
          <p class="about_details-description">
            <i class="bx bxs-check-square about_details-icon"></i> Entregas siempre en tiempo y forma
          </p>
          <p class="about_details-description">
            <i class="bx bxs-check-square about_details-icon"></i> Guia para el cuidado especifico de cada producto
          </p>
          <p class="about_details-description">
            <i class="bx bxs-check-square about_details-icon"></i> Satisfaccion 100% garantizada
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUsInfo;
