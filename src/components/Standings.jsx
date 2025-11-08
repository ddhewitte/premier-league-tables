export default function Standings(){
    return(
        <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-900 border-b border-gray-800">
                        <th className="px-4 py-4 text-left text-white">Position</th>
                        <th className="px-4 py-4 text-left text-white">Team</th>
                        <th className="px-4 py-4 text-left text-white">Played</th>
                        <th className="px-4 py-4 text-left text-white">Win</th>
                        <th className="px-4 py-4 text-left text-white">Draw</th>
                        <th className="px-4 py-4 text-left text-white">Lost</th>
                        <th className="px-4 py-4 text-left text-white">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <td className="px-4 py-4 text-left text-white">1</td>
                    <td className="px-4 py-4 text-left text-white">Semur Zengkol FC</td>
                    <td className="px-4 py-4 text-left text-white">1</td>
                    <td className="px-4 py-4 text-left text-white">3</td>
                    <td className="px-4 py-4 text-left text-white">0</td>
                    <td className="px-4 py-4 text-left text-white">0</td>
                    <td className="px-4 py-4 text-left text-white">3</td>
                </tbody>
            </table>
        </div>
    )
}