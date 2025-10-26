function Display({secondCount, minuteCount, hourCount}) {
    return ( 
        <div className="flex justify-center text-[100px]">
            <h1 className="font-mono">{hourCount<10 ? ('0'+hourCount) : hourCount}:{minuteCount<10 ? ('0'+minuteCount) : minuteCount}:{secondCount<10 ? ('0'+secondCount) : secondCount}</h1>
        </div>
    );
}
export default Display;