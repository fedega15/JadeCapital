import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="uppercase font-black text-white flex items-center
         text-4xl"
      >
        <span
          className="bg-white text-black w-6 h-10 flex items-center 
         justify-center rounder mr-px"
        >
          J
        </span>
        ADE
      </Link>
    </div>
  );
};
