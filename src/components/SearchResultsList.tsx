function SearchResultsList() {
  return (
    <div className="flex flex-col items-center justify-center px-2 lg:px-4 xl:px-6">
      <h2 className="text-2xl text-gray-600 mx-auto my-3 border-b border-b-border-main w-full py-4 lg:text-3xl font-semibold">
        Search Results
      </h2>

      <ul className="flex flex-col gap-2 space-between w-full">
        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md h-full transition-all duration-200 ease-in">
          <div className="w-2/8">
            <img src="https://placehold.co/92x138" alt="" />
          </div>
          <div className="flex flex-col gap-2 w-4/8 px-6">
            <p className="font-bold text-2xl lg:text-3xl">Inception</p>
            <p className="text-gray-500">2010</p>
          </div>
          <div className="italic text-wrap w-2/8">
            {/*<span>Loading...</span>*/}
            {/*<span>Error</span>*/}
            <span className="text-xl lg:text-2xl">Genres, Genres, Genres</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SearchResultsList;
