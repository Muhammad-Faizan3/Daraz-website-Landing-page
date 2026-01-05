function Button() {
    return (
        <div className="w-full py-6 sm:py-8 md:py-10 flex justify-center items-center">
            <button 
                className="
                    w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw]
                    h-10 sm:h-11 md:h-12 lg:h-12
                    border border-blue-600
                    text-blue-600
                    cursor-pointer
                    hover:bg-blue-500
                    hover:text-white
                    active:bg-blue-600
                    active:scale-[0.98]
                    transition-all
                    duration-200
                    ease-in-out
                    rounded
                    sm:rounded-md
                    md:rounded-lg
                    text-sm
                    sm:text-base
                    md:text-lg
                    font-medium
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-300
                    focus:ring-opacity-50
                "
            >
                LOAD MORE
            </button>
        </div>
    );
}

export default Button;