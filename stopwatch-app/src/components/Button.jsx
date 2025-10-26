function Button({startClicked, setStartClicked, buttonStyle, setHourCount,setMinuteCount, setSecondCount}) {
    const startClick = () => {
        setStartClicked(!startClicked);
    }
    const resetClicked = () => {
        setSecondCount(0)
        setMinuteCount(0)
        setHourCount(0)
        setStartClicked(false)
    }
    const buttonStyle = startClicked ? 
        'bg-[#00009C] text-[#ffffff]  px-6 py-3  rounded-md text-xl  mr-20 cursor-pointer hover:bg-[#00009C]/90 active:border-[#00009C] active:border-solid active:border-2 active:bg-blue-200 active:text-[#00009C]'
         : 
        'bg-[#008000] text-[#ffffff] px-6 py-3 mr-20 rounded-md text-xl cursor-pointer hover:bg-[#008000]/90 active:border-[#008000] active:border-solid active:border-2 active:bg-blue-200 active:text-[#008000]'
        const buttonText = startClicked ?'Stop' : 'Start'

    return(
        <div className="flex justify-center mt-3">
            <button className={buttonStyle} onClick={startClick}>{buttonText}</button>

            <button className="
            bg-[#FF3800] 
            text-[#ffffff] 
            px-6 py-3 
            rounded-md
            text-xl
            cursor-pointer
            hover:bg-[#FF3800]/90
            active:border-[#FF3800]
            active:border-solid
            active:border-2
            active:bg-blue-200
            active:text-[#FF3800]" onClick={resetClicked}>Reset</button>
        </div>
    )
}
export default Button