import Image from 'next/image';
import React from 'react';

const NosotrosSection = () => {
  return (
    <section   className="text-gray-600 body-font">
      
      <div   className="container px-5 py-24 mx-auto">
        
      <div  id="nosotros" className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full mt-[70px] bg-yellow-500 inline-flex"></div>
          </div>
        <div  className="text-center mb-20">
          <br />
          <br /> 
          <div   className="w-[222px] h-[100px] inline-flex items-center justify-centermb-5">
      {/* Icono SVG o imagen aquí */}
      <span
          className="bg-yellow-500 text-black W-6 h-[50px] p-2 rounded-md  font-black flex items-center text-4xl uppercase 
         justify-center rounder mr-px"
        >
      NOSOTROS
        </span>
    </div>
         {/*  <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
          Viví tu experiencia Jade Fiestas.
          </h1> */}
          <p  className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
          Somos un equipo de profesionales especializados en la organización de eventos exclusivos. Además, y sobre todas las cosas, somos artífices de grandes sueños, un grupo humano que entiende que vale la pena celebrar la vida y ofrece un escenario para que todos los anhelos se conviertan en realidad. Desde 2009 hasta la actualidad hemos hecho posible más de 800 experiencias únicas que perdurarán para siempre en la memoria de quienes nos elijen. Evolucionamos en nuestras propuestas y servicios, siempre desde un espacio privilegiado tanto para reuniones sociales como corporativas.
          </p>
          <br id="servicios"   />
          <br />
          <div  className="flex mt-6 justify-center">
            <div  className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
          <br />
          <br />
          <div   className="w-[210px] h-[100px] inline-flex items-center justify-centermb-5">
      {/* Icono SVG o imagen aquí */}
      <span
          className="bg-yellow-500 text-black W-6 h-[50px] p-2 rounded-md  font-black flex items-center text-4xl uppercase 
         justify-center rounder mr-px"
        >
      SERVICIOS
        </span>
    </div>
        </div>

        <div   className="flex flex-wrap -mt-[50px]">
          {/* Tarjeta de ejemplo */}
          {renderCard("Organización de eventos", "Nuestros espacios se adaptan fácilmente a diferentes layouts, equipados con tecnología de primera en sonido e iluminación. Estamos preparados para llevar adelante con excelencia cualquier evento de primer nivel. La elegancia y exclusividad de nuestros diferentes ambientes y la comodidad del estacionamiento propio y seguro nos permiten anticipar el éxito de tu evento.","/imgs/a.jpg")}
          {renderCard("Catering", "Estamos en constante búsqueda de tendencias en el mercado sumando sabores y experiencias para todo tipo de paladares.Contamos con opciones de servicios que se adaptan a todo tipo de eventos: bodas, reuniones sociales, corporativas, etc.Propuestas a la carta y adaptadas a tus necesidades y preferencias.Garantizamos calidad, sabor y frescura en cada propuesta gourmet.","/imgs/b.jpg")}
          {renderCard("Equipamiento audiovisual", "Transformando Eventos en Experiencias Audiovisuales Inolvidables. En Jade Fiestas, nos especializamos en llevar la magia del sonido y la imagen a cada rincón de tus eventos. Con una pasión inigualable por la perfección audiovisual, nuestro equipo ofrece soluciones integrales para hacer de cada celebración o reunión profesional un espectáculo sensorial único.","/imgs/c.jpg")}
        </div>
        <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
          Botón
        </button>
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
    <div className="flex-grow">
      <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
        {title}
      </h2>
      <p className="leading-relaxed text-white">
        {description}
      </p>
    </div>
  </div>
);

export default NosotrosSection;
