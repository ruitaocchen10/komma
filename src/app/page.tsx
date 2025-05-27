export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-red-500">
          🥊 KOMMA Fantasy MMA
        </h1>
        <p className="text-xl mb-8">
          The ultimate fantasy platform for MMA fans
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Draft Fighters</h2>
            <p>Build your dream team from the entire UFC roster</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Score Points</h2>
            <p>Earn points for strikes, takedowns, and finishes</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Compete</h2>
            <p>Create leagues and dominate your friends</p>
          </div>
        </div>
      </div>
    </main>
  )
}