"use client";
import { SliderItem } from "@/components/widgets/slider-item";
import { Arrows } from "@/components/widgets/arrows";
import { useState } from "react";
import { SliderThumbnailsItem } from "@/components/widgets/slider-thumbnail-item";
import NosotrosSection from "@/components/widgets/navegacion/NosotrosSection";
import ContactoSection from "@/components/widgets/navegacion/ContactoSection";
import Script from "next/script"; // Importar el componente Script

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onPrev = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(5);
    }
  };

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  return (
    <>
      <div className="h-screen container" id="inicio">
        <ul>
          <SliderItem
            itemActive={itemActive}
            id={1}
            image="/imgs/2.webp"
            brand="EVENTO SOCIAL"
            name="Jade Fiestas"
            description="¡Cotizá tu evento social!"
          />
          <SliderItem
            itemActive={itemActive}
            id={2}
            image="/imgs/1.webp"
            brand="EVENTO CORPORATIVO"
            name="Jade Fiestas"
            description="¡Cotizá tu evento corporativo!"
          />
          <SliderItem
            itemActive={itemActive}
            id={3}
            image="/imgs/3.webp"
            brand="CATERING"
            name="Jade Fiestas"
            description="¡Cotizá tu catering!"
          />
          <SliderItem
            itemActive={itemActive}
            id={4}
            image="/imgs/4.webp"
            brand="PLANIFICACIÓN COORDINACIÓN"
            name="Jade Fiestas"
            description="¡Cotizá tu planifiacón y coordinación!"
          />
          <SliderItem
            itemActive={itemActive}
            id={5}
            image="/imgs/5.webp"
            brand="EQUIPAMIENTO AUDIOVISUAL"
            name="Jade Fiestas"
            description="¡Cotizá tu Equipamiento Audiovisual!"
          />
        </ul>
        <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()} />
        <ul className="absolute bottom-0 z-5 flex sm:justify-end gap-3 w-full h-[230px] sm:h-[250px] px-14 overflow-y-hidden overflow-x-auto mb-10">
          <SliderThumbnailsItem
            itemActive={itemActive}
            image="/imgs/2.webp"
            id={1}
            brand="Evento Social"
            onClick={() => setItemActive(1)}
          />
          <SliderThumbnailsItem
            itemActive={itemActive}
            image="/imgs/1.webp"
            id={2}
            brand="Evento Corporativo"
            onClick={() => setItemActive(2)}
          />
          <SliderThumbnailsItem
            itemActive={itemActive}
            image="/imgs/3.webp"
            id={3}
            brand="Catering"
            onClick={() => setItemActive(3)}
          />
          <SliderThumbnailsItem
            itemActive={itemActive}
            image="/imgs/4.webp"
            id={4}
            brand="Planificación Coordinación"
            onClick={() => setItemActive(4)}
          />
          <SliderThumbnailsItem
            itemActive={itemActive}
            image="/imgs/5.webp"
            id={5}
            brand="Equipamiento Audiovisual"
            onClick={() => setItemActive(5)}
          />
        </ul>
      </div>
      <div>
        <NosotrosSection />
        <ContactoSection />
      </div>

      {/* Agregar el script de Chatwoot */}
      <Script
        src="https://vibeline.io/packs/js/sdk.js"
        strategy="lazyOnload" // Carga el script después de que la página se haya cargado
        onLoad={() => {
          window.chatwootSDK.run({
            websiteToken: 'GywMLxFwiPBH4qozALBQgo65',
            baseUrl: "https://vibeline.io"
          });
        }}
      />
    </>
  );
}
