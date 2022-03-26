const App = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#090B1A]">
        <div className="my-auto w-[1080px] h-[446px] bg-[#1B1938] rounded-r-2xl">
          <div className="flex h-full">
            <div className="w-[540px] text-white">left</div>
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
