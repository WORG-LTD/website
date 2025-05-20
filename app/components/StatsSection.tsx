const StatsSection = () => {
  return (
    <div className="bg-[#032616] text-white py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-8">
          Discover the Power of a<br />
          Nation-First Agricultural<br />
          Movement.
        </h2>
        
        <p className="mb-12 max-w-2xl text-gray-300">
          We are transforming agriculture into a structured engine for national security, prosperity, and global relevance.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">1M+</h3>
            <p className="text-sm text-gray-300 mt-2">Hectares targeted for cultivation</p>
          </div>
          
          <div className="stat-item">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">100,000+</h3>
            <p className="text-sm text-gray-300 mt-2">Farmers empowered</p>
          </div>
          
          <div className="stat-item">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">10+</h3>
            <p className="text-sm text-gray-300 mt-2">Ecosystem Tools<br/>(equipment, tech, finance, logistics)</p>
          </div>
          
          <div className="stat-item">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">National +</h3>
            <p className="text-sm text-gray-300 mt-2">Global Scale vertical uniformity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
