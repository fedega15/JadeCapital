import { cn } from "@/lib/utils";
import Image from "next/image";

interface SliderItemProps {
  itemActive: number;
  id: number;
  image: string;
  brand: string;
  name: string;
  description: string;
}

export const SliderItem = ({
  itemActive,
  id,
  brand,
  name,
  image,
  description,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500",
        itemActive === id ? "opacity-100 z-10" : "opacity-0"
      )}
    >
      <div className="relative w-full h-full">
        <Image src={image} alt="Image" fill className="object-cover" />
      </div>
      <div className="space-y-4 absolute left-[10%] top-[20%] w-full max-w-[500px] z-10 ">
        <p
          className={cn(
            "uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0 animation-delay-2",
            itemActive === id && "animate-show-content"
          )}
        >
         <span>  {name} </span>
        </p>
        <h2
          className={cn(
            "text-4xl sm:text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0 animation-delay-1 overflow-ellipsis",
            itemActive === id && "animate-show-content"
          )}
        >
          {brand}
        </h2>
        <p
          className={cn(
            "text-gray-200 translate-y-[300] blur-[20px] opacity-0 animation-delay-2",
            itemActive === id && "animate-show-content"
          )}
        >
          {description}
        </p>
      </div>
    </li>
  );
};
