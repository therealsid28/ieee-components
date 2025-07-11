export default function StatsSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 py-16 bg-white text-center">
      <div>
        <h2 className="text-4xl font-semibold text-gray-900">44 million</h2>
        <p className="text-gray-500 mt-2">Transactions every 24 hours</p>
      </div>

      <div>
        <h2 className="text-4xl font-semibold text-gray-900">$119 trillion</h2>
        <p className="text-gray-500 mt-2">Assets under holding</p>
      </div>

      <div>
        <h2 className="text-4xl font-semibold text-gray-900">46,000</h2>
        <p className="text-gray-500 mt-2">New users annually</p>
      </div>
    </div>
  );
}
