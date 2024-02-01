import Image from "next/image";
import React from "react";

const ContactoSection = () => {
  return (
    <section id="contacto" className="text-gray-600 body-font relative ">
      <hr />
      <div className=" mb-[200px] container px-0 py-2 mx-auto">
        <div className="text-center mb-20">
          <div className="w-[222px] h-[100px] inline-flex items-center justify-center mb-5">
            {/* Icono SVG o imagen aquí */}
            <span
              className="bg-yellow-500 mt-[31px] text-black w-[220px] h-[50px] p-2 rounded-md  font-black flex items-center text-4xl uppercase 
              justify-center rounder mr-px"
            >
              CONTACTO
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-[100%] w-[98%] mt-[200px] md:h-[100%] h-[30%] absolute m-1 inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13327.789254884743!2d-60.208147!3d-33.3724415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b75df70753aaa1%3A0xbd6a9d2f0e3129bb!2sJade%20Salon%20De%20Fiestas!5e0!3m2!1ses-419!2sar!4v1706738163636!5m2!1ses-419!2sar"
          style={{ filter: "grayscale(0.3   ) contrast(0.8) opacity(0.6)" }}
        ></iframe>
      </div>
      <div className="container md:w-[1080px] w-[70%] mt-[380px] md:mt-[-180px] md:h-[500px] px-1 py-0 mx-auto flex">
        <div className="mb-[40px] lg:w-1/3 md:w-8 border border-white bg-black rounded-lg p-4 flex flex-col md:ml-auto w-full mt-5 md:mt-0 relative z-5 shadow-md">
          <h2 className="text-yellow-500 text-lg mb-1 font-medium title-font">
            <span className="vertical-align: inherit;">
              <span className="vertical-align: inherit;">Comentario</span>
            </span>
          </h2>
          <p className="leading-relaxed mb-1 text-gray-600">
            <span className="vertical-align: inherit;">
              <span className="vertical-align: inherit;">
                ¡Dejanos tu comentario y nos pondremos en contacto contigo!
              </span>
            </span>
          </p>
          <div className="relative mb-1">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              <span className="vertical-align: inherit;">
                <span className="vertical-align: inherit;">
                  Correo electrónico
                </span>
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-1">
            <label htmlFor="number" className="leading-4 text-sm text-gray-600">
              <span className="vertical-align: inherit;">
                <span className="vertical-align: inherit;">
                  Numero Telefónico
                </span>
              </span>
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-1">
            <label
              htmlFor="message"
              className="leading-4 text-sm text-gray-600"
            >
              <span className="vertical-align: inherit;">
                <span className="vertical-align: inherit;">Mensaje</span>
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-[90px] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-yellow-500  border-0 py-2 px-12 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            <span className="vertical-align: inherit;">
              <span className="vertical-align: inherit;">Enviar</span>
            </span>
          </button>
          <p className="text-xs text-gray-500 mt-3">
            <span className="vertical-align: inherit;">
              <span className="vertical-align: inherit;">
                Recuerda revisar si tus datos de contacto son correctos
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
