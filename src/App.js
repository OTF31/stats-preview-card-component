import ImageHeaderDesktop from "./assets/image-header-desktop.jpg";

const App = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#090B1A]">
        <div className="my-auto w-[1080px] h-[446px] bg-white">
          <div className="flex h-full">
            <div className="w-[540px]">left</div>
            <div className="w-[540px] bg-[url('./assets/image-header-desktop.jpg')] bg-no-repeat">
              <div className="absolute w-[540px] h-[446px] bg-red-800/25"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
