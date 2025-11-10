export default function Header(){
    return(
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-white mb-2">English Premier League </h1>
                <p className="text-gray-400">2024/25 Season -Matchday 11th</p>
            </div>
            <div>
                Sort by <select>
                    <option>Won</option>
                    <option>Drawn</option>
                    <option>Lost</option>
                    <option>Points</option>
                </select>
            </div>
        </div>
    )
}