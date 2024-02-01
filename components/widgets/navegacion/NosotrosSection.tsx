import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const NosotrosSection = () => {
  return (
    <section id="nosotros" className="text-gray-600 body-font mt-[100px] ">
      <hr className="z-10" />
      <div className="mb-[100px] container px-0 py-2 mx-auto">
        <div className="text-center mb-20">
          <div className="w-[222px] h-[100px] inline-flex items-center justify-center mb-5">
            {/* Icono SVG o imagen aquí */}
            <span
              className="bg-yellow-500 mt-[31px] text-black w-[220px] h-[50px] p-2 rounded-md  font-black flex items-center text-4xl uppercase 
              justify-center rounder mr-px"
            >
              NOSOTROS
            </span>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap -mt-[131px]">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">
                    Somos{" "}
                    <strong className="title-font font-medium text-xl mb-2 text-yellow-500">
                      JADE FIESTAS{" "}
                    </strong>
                    contamos con 30 años de experiencia para brindarte la mejor
                    atencion
                  </span>
                </span>
              </h1>
              <div className="leading-relaxed  text-white">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">
                    Contamos con dos salones climatizados y equipados para que
                    tu fiesta sea exitosa y tus invitados tengan el confort que
                    buscas. Jade Capital con capacidad de 300 personas y Jade
                    con capacidad de 500 personas
                  </span>
                </span>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">2</span>
                </span>
              </h2>
              <p className="leading-relaxed">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">Salones</span>
                </span>
              </p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">+400</span>
                </span>
              </h2>
              <p className="leading-relaxed">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">Eventos</span>
                </span>
              </p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">+10.000</span>
                </span>
              </h2>
              <p className="leading-relaxed">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">Invitados</span>
                </span>
              </p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">+100</span>
                </span>
              </h2>
              <p className="leading-relaxed">
                <span className="vertical-align: inherit;">
                  <span className="vertical-align: inherit;">Corporativos</span>
                </span>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Image
              className="object-cover object-center w-full h-full"
              src="/imgs/ab.jpg"
              alt="estadísticas"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <hr id="servicios" className="z-10" />
      <div className="text-center mb-10">
        <div className="w-[222px] h-[100px] inline-flex items-center justify-center mb-5">
          {/* Icono SVG o imagen aquí */}
          <span
            className="bg-yellow-500 mt-[45px] text-black w-[220px] h-[50px] p-2 rounded-md  font-black flex items-center text-4xl uppercase 
              justify-center rounder mr-px"
          >
            SERVICIOS
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center -mt-10 mb-10">
        {/* Tarjeta de ejemplo */}
        {renderCard({
          title: "Organización de eventos",
          description:
            "Nuestros espacios se adaptan fácilmente a diferentes layouts, equipados con tecnología de primera en sonido e iluminación. Estamos preparados para llevar adelante con excelencia cualquier evento de primer nivel. La elegancia y exclusividad de nuestros diferentes ambientes y la comodidad del estacionamiento propio y seguro nos permiten anticipar el éxito de tu evento.",
          image: "/imgs/a.jpg",
        })}

        {/* Otras tarjetas */}
        {renderCard({
          title: "Catering",
          description:
            "Estamos en constante búsqueda de tendencias en el mercado sumando sabores y experiencias para todo tipo de paladares. Contamos con opciones de servicios que se adaptan a todo tipo de eventos: bodas, reuniones sociales, corporativas, etc. Propuestas a la carta y adaptadas a tus necesidades y preferencias. Garantizamos calidad, sabor y frescura en cada propuesta gourmet.",
          image: "/imgs/b.jpg",
        })}

        {renderCard({
          title: "Equipamiento audiovisual",
          description:
            "Transformando Eventos en Experiencias Audiovisuales Inolvidables. En Jade Fiestas, nos especializamos en llevar la magia del sonido y la imagen a cada rincón de tus eventos. Con una pasión inigualable por la perfección audiovisual, nuestro equipo ofrece soluciones integrales para hacer de cada celebración o reunión profesional un espectáculo sensorial único.",
          image: "/imgs/c.jpg",
        })}
      </div>

      <div
        className="fixed left-4 bottom-4 flex items-center cursor-pointer z-10"
        onClick={() => {
          // Agrega aquí la lógica para abrir el enlace de WhatsApp
          window.open("https://wa.me/xxxxxxxxxx", "_blank");
        }}
      >
        <Image src="/imgs/wp.png" alt="WhatsApp Logo" width={50} height={50} />
        <span className="ml-2"></span>
      </div>
    </section>
  );
};

const renderCard = ({ title, description, image }: CardProps) => (
  <div className="p-8 w-full sm:w-1/2 lg:w-1/3">
    <div className="relative w-40 h-40 mb-5 mx-auto">
      <div className="w-full h-full rounded-full overflow-hidden">
        <Image
          src={image}
          alt="Image"
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
    </div>
    <div className="text-center">
      <h2 className="text-yellow-500 text-lg font-medium mb-3">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

export default NosotrosSection;
