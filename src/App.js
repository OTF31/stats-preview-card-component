const App = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#090B1A]">
        <div className="my-auto w-[1010px] h-[446px] bg-[#1B1938] rounded-lg">
          <div className="flex h-full">
            {/* Left Side */}
            <div className="w-[570px] text-white flex flex-col justify-evenly pl-[72px] pr-[108px]">
              <h1 className="font-bold text-4xl font-[Inter] mt-[16.5px]">
                Get <span className="text-[#AA5CDB]">insights</span> that help
                your business grow.
              </h1>
              <p className="text-[15px] text-[#FFFFFFC0] font-[Inter] relative bottom-[26px]">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div className="flex gap-[69px] relative bottom-[7px]">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold font-[Inter]">10k+</p>
                  <p className="uppercase text-[#FFFFFFC0] text-[12.5px] font-lexendDeca">
                    companies
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="uppercase text-2xl font-bold font-[Inter]">
                    314
                  </p>
                  <p className="uppercase text-[#FFFFFFC0] text-[12.5px] font-lexendDeca">
                    templates
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="uppercase text-2xl font-bold font-[Inter]">
                    12m+
                  </p>
                  <p className="uppercase text-[#FFFFFFC0] text-[12.5px] font-lexendDeca">
                    queries
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="rounded-r-lg">
              <div className="bg-[url('./assets/image-header-desktop.jpg')] w-[540px] h-[446px] absolute rounded-r-lg"></div>
              <div className="absolute w-[540px] h-[446px] bg-[#AA5CDB] opacity-[0.45] rounded-r-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
