interface ArrowsProps {
    onClickPrev:() => void;
    onClickNext:() => void
}

export const Arrows = ({onClickPrev, onClickNext} : ArrowsProps) =>  {
    return (
        <div className=" absolute bottom-[260px] right-14 z-10 flex items-center gap-1">
            <button onClick={onClickPrev} className="    font-mono w-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg text-lg transition duration-500 fill-white hover:fill-black  translate-y-[500px] blur[20px] opacity-0 animate-show-content">

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m70.143 97.5-44.71-44.711a3.943 3.943 0 0 1 0-5.578l44.71-44.711 5.579 5.579-41.922 41.921 41.922 41.922z"/></svg>

            </button>
            <button onClick={onClickNext} className="font-mono w-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg text-lg transition duration-500  fill-white hover:fill-black translate-y-[500px] blur[20px] opacity-0 animate-show-content">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m29.857 97.5-5.579-5.578 41.922-41.922-41.921-41.921 5.578-5.579 44.71 44.711a3.943 3.943 0 0 1 0 5.578z"/></svg></button>
        </div>
    )

}