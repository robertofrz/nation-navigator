function Skeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center my-4">
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <h1 className="text-4xl sm:text-5xl mb-2">
          <strong className="text-[#FFC107]">N</strong>ation{" "}
          <strong className="text-[#FFC107]">N</strong>avigator
        </h1>
        <p className="text-lg sm:text-xl opacity-70">
          Explore the world, one country at a time
        </p>

        {/* Skeleton input */}
        <input
          type="text"
          className="mt-4 px-3 py-3 w-[90vw] sm:w-100 rounded-lg bg-gray-700 text-gray-400 animate-pulse text-left"
          placeholder="Loading countries..."
          disabled
        />
      </div>
    </div>
  );
}

export default Skeleton;
