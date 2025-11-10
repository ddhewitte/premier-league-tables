export default function Standings({data}){

    const sortedData = data.sort((a,b) => a.position-b.position);
    return(
        <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-900 border-b border-gray-800">
                        <th className="px-4 py-4 text-left text-white">Position</th>
                        <th className="px-4 py-4 text-left text-white">Team</th>
                        <th className="px-4 py-4 text-left text-white">Played</th>
                        <th className="px-4 py-4 text-left text-green-800">Win</th>
                        <th className="px-4 py-4 text-left text-gray-500">Draw</th>
                        <th className="px-4 py-4 text-left text-red-800">Lost</th>
                        <th className="px-4 py-4 text-left text-white">Points</th>
                    </tr>
                </thead>
                <tbody>
                    { sortedData.map((item) => ( 
                        <tr className="border border-gray-800 hover:bg-gray-900/50 transition-colors bg-blue-950/40" key={item.name}>
                            <td className="px-4 py-4 text-left text-white">{item.position}</td>
                            <td className="px-4 py-4 text-left text-white">{item.name}</td>
                            <td className="px-4 py-4 text-left text-white">{item.played}</td>
                            <td className="px-4 py-4 text-left text-white">{item.wins}</td>
                            <td className="px-4 py-4 text-left text-white">{item.draws}</td>
                            <td className="px-4 py-4 text-left text-white">{item.losses}</td>
                            <td className="px-4 py-4 text-left text-white">{item.points}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}