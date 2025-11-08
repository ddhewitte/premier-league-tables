export default function Standings(){
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
                    <tr className="border border-gray-800 hover:bg-gray-900/50 transition-colors bg-blue-950/40">
                        <td className="px-4 py-4 text-left text-white">1</td>
                        <td className="px-4 py-4 text-left text-white">Semur Zengkol FC</td>
                        <td className="px-4 py-4 text-left text-white">1</td>
                        <td className="px-4 py-4 text-left text-white">3</td>
                        <td className="px-4 py-4 text-left text-white">0</td>
                        <td className="px-4 py-4 text-left text-white">0</td>
                        <td className="px-4 py-4 text-left text-white">3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}