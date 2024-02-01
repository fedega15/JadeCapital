import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const NosotrosSection = () => {
  return (
    <section id="nosotros" className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto mt-10">
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-md font-black text-4xl uppercase mb-5">
            NOSOTROS
          </div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white mb-10">
            Somos un equipo de profesionales especializados en la organización de eventos exclusivos. Además, y sobre todas las cosas, somos artífices de grandes sueños, un grupo humano que entiende que vale la pena celebrar la vida y ofrece un escenario para que todos los anhelos se conviertan en realidad. Desde 2009 hasta la actualidad hemos hecho posible más de 800 experiencias únicas que perdurarán para siempre en la memoria de quienes nos elijen. Evolucionamos en nuestras propuestas y servicios, siempre desde un espacio privilegiado tanto para reuniones sociales como corporativas.
          </p>
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-md mt-10 font-black text-4xl uppercase mb-5">
            SERVICIOS
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mt-10 mb-10">
          {/* Tarjeta de ejemplo */}
          {renderCard({
  title: "Organización de eventos",
  description: "Nuestros espacios se adaptan fácilmente a diferentes layouts, equipados con tecnología de primera en sonido e iluminación. Estamos preparados para llevar adelante con excelencia cualquier evento de primer nivel. La elegancia y exclusividad de nuestros diferentes ambientes y la comodidad del estacionamiento propio y seguro nos permiten anticipar el éxito de tu evento.",
  image: "/imgs/a.jpg"
})}

{/* Otras tarjetas */}
{renderCard({
  title: "Catering",
  description: "Estamos en constante búsqueda de tendencias en el mercado sumando sabores y experiencias para todo tipo de paladares. Contamos con opciones de servicios que se adaptan a todo tipo de eventos: bodas, reuniones sociales, corporativas, etc. Propuestas a la carta y adaptadas a tus necesidades y preferencias. Garantizamos calidad, sabor y frescura en cada propuesta gourmet.",
  image: "/imgs/b.jpg"
})}

{renderCard({
  title: "Equipamiento audiovisual",
  description: "Transformando Eventos en Experiencias Audiovisuales Inolvidables. En Jade Fiestas, nos especializamos en llevar la magia del sonido y la imagen a cada rincón de tus eventos. Con una pasión inigualable por la perfección audiovisual, nuestro equipo ofrece soluciones integrales para hacer de cada celebración o reunión profesional un espectáculo sensorial único.",
  image: "/imgs/c.jpg"
})}
         
        </div>

        <div
        className="fixed left-4 bottom-4 flex items-center cursor-pointer z-10"
        onClick={() => {
          // Agrega aquí la lógica para abrir el enlace de WhatsApp
          window.open("https://wa.me/xxxxxxxxxx", "_blank");
        }}
      >
        <Image
          src="/imgs/wp.png"
          alt="WhatsApp Logo"
          width={30}
          height={30}
        />
        <span className="ml-2">¡Contáctanos por WhatsApp!</span>
      </div>
      </div>
    </section>
  );
};

const renderCard = ({ title, description, image }: CardProps) => (
  <div className="p-8 w-full sm:w-1/2 lg:w-1/3">
    <div className="relative w-40 h-40 mb-5 mx-auto">
      <div className="w-full h-full rounded-full overflow-hidden">
        <Image src={image} alt="Image" layout="fill" className="object-cover rounded-full" />
      </div>
    </div>
    <div className="text-center">
      <h2 className="text-yellow-500 text-lg font-medium mb-3">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

export default NosotrosSection;
