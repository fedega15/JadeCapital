import { cn } from "@/lib/utils";
import Image from "next/image";

interface SliderThumbnailItemProps {
  itemActive: number;
  id: number;
  image: string;
  brand: string;
  onClick: () => void;
}

export const SliderThumbnailsItem = ({
  itemActive,
  id,
  image,
  brand,
  onClick,
}: SliderThumbnailItemProps) => {
  return (
    <li
      role="button"
      onClick={onClick}
      className={cn(
         "relative h-[170px] sm:h-[250px] sm:w-[50px] w-[20px] shrink-0 transition-all duration-300 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150",
        itemActive === id
          ? "w-[115px] sm:w-[220px] brightness-150"
          : "w-[25px] sm:w-[30px] brightness-50"
      )}
    >
      <div className="relative w-full h-full rounded-lg">
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div
        className={cn(
          "absolute top-auto right-[10px] bottom-[5px] left-[10px] z-10 translate-y-[30px] blur-[20px] opacity-0 animation-delay-1",
          itemActive === id && "animate-show-content"
        )}
        translate="no"
      >
        <h2 className="line-clamp-0 sm:text-sm">{brand}</h2>
      </div>
    </li>
  );
};
