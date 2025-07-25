const BannerImage = () => {
    return (
      <div className="relative w-full">
        {/* Banner Image */}
        <img
          src="/assets/home.jpg"
          alt="Home Banner"
          className="w-full h-auto object-contain"
        />
  
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
            Coach. Care. Connect.
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white bg-black/40 px-4 py-2 rounded">
            Virtual workouts. Health Coaching Advice. Community.
          </p>
        </div>
      </div>
    )
  }
  
  export default BannerImage
  