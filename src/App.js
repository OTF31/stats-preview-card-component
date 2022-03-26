const App = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#090B1A]">
        <div className="my-auto w-[1080px] h-[446px] bg-[#1B1938] rounded-r-2xl">
          <div className="flex h-full">
            <div className="w-[540px] text-white">
              <h1> Get insights that help your business grow.</h1>
              <p>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div className="flex justify-around">
                <div>
                  <p>10k+</p>
                  <p>companies</p>
                </div>
                <div>
                  <p>314</p>
                  <p>templates</p>
                </div>
                <div>
                  <p>12m+</p>
                  <p>queries</p>
                </div>
              </div>
            </div>
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
