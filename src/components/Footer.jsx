export default function Footer(){
    return(
        <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600/50 border-l-4 border-l-blue-500"></div>
                <span>UEFA Champions League (Top 4)</span>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-600/50 border-l-4 border-l-orange-500"></div>
                <span>UEFA Europe League (5th)</span>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600/50 border-l-4 border-l-red-500"></div>
                <span>Relegation (Bottom 3)</span>
            </div>
        </div>
    )
}