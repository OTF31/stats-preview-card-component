const App = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#090B1A] font-[Inter]">
        <div className="my-auto w-[1080px] h-[446px] bg-[#1B1938] rounded-2xl">
          <div className="flex h-full">
            {/* Left Side */}
            <div className="w-[540px] text-white">
              <h1>
                Get <span className="text-[#AA5CDB]">insights</span> that help
                your business grow.
              </h1>
              <p className="text-[15px] text-gray-400">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div className="flex justify-around">
                <div>
                  <p className="uppercase">10k+</p>
                  <p className="uppercase text-gray-400">companies</p>
                </div>
                <div>
                  <p className="uppercase">314</p>
                  <p className="uppercase text-gray-400">templates</p>
                </div>
                <div>
                  <p className="uppercase">12m+</p>
                  <p className="uppercase text-gray-400">queries</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-[540px] bg-[url('./assets/image-header-desktop.jpg')] rounded-r-2xl bg-no-repeat">
              <div className="absolute w-[540px] h-[446px] bg-[#AA5CDB] opacity-[0.45] rounded-r-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
