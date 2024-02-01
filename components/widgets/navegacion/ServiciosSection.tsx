import Image from "next/image";
import React from "react";

const ServiciosSection = () => {
  return (
    <section id="servicios" className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex mt-6 justify-center">
          <div className="w-[100%] h-[0.08px] rounded-full mt-[-30px] bg-yellow-500 inline-flex"></div>
        </div>
        <div className="text-center mb-20">
          <div className="flex mt-[36px] justify-center">
            <div className="w-[100%] h-[0.08px] -mb-[100px] -mt-2 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
          <br />
          <br />
          <div className="w-[210px] h-[100px] inline-flex items-center justify-centermb-5">
            {/* Icono SVG o imagen aquí */}
            <span
              className="bg-yellow-500 -mt-[20px]  text-black W-6 h-[50px] p-2 rounded-md  font-black flex items-center text-4xl uppercase 
         justify-center rounder mr-px"
            >
              SERVICIOS
            </span>
          </div>
        </div>

        <div className="flex flex-wrap -mt-[50px]">
          {/* Tarjeta de ejemplo */}
          {renderCard(
            "Organización de eventos",
            "Nuestros espacios se adaptan fácilmente a diferentes layouts, equipados con tecnología de primera en sonido e iluminación. Estamos preparados para llevar adelante con excelencia cualquier evento de primer nivel. La elegancia y exclusividad de nuestros diferentes ambientes y la comodidad del estacionamiento propio y seguro nos permiten anticipar el éxito de tu evento.",
            "/imgs/a.jpg"
          )}
          {renderCard(
            "Catering",
            "Estamos en constante búsqueda de tendencias en el mercado sumando sabores y experiencias para todo tipo de paladares.Contamos con opciones de servicios que se adaptan a todo tipo de eventos: bodas, reuniones sociales, corporativas, etc. Propuestas a la carta y adaptadas a tus necesidades y preferencias. Garantizamos calidad, sabor y frescura en cada propuesta gourmet.",
            "/imgs/b.jpg"
          )}
          {renderCard(
            "Equipamiento audiovisual",
            "Transformando eventos en experiencias audiovisuales inolvidables. En Jade Fiestas, nos especializamos en llevar la magia del sonido y la imagen a cada rincón de tus eventos. Con una pasión inigualable por la perfección audiovisual, nuestro equipo ofrece soluciones integrales para hacer de cada celebración o reunión profesional un espectáculo sensorial único.",
            "/imgs/c.jpg"
          )}
        </div>
        <div className="flex mt-6 justify-center">
          <div className="w-[100%] h-[0.08px] rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>
    </section>
  );
};

const renderCard = (title: string, description: string, image: string) => (
  <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
    <div className="relative w-40 h-40 mb-5">
      <div className="w-full h-full rounded-full overflow-hidden">
        <Image
          src={image}
          alt="Image"
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
    </div>
    <p
      className="mb-[50px] text-base leading-relaxed xl:w-[350px] lg:w-4/4 mx-auto text-white sm:text-justify"
      style={{
        textAlign: "justify",
        letterSpacing: "-0.08em",
        hyphens: "auto",
      }}
    >
      {description}
    </p>
  </div>
);

export default ServiciosSection;
