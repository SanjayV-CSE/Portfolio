function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
        <div className="relative cursor-pointer top-3">
          <i
            className="fab fa-linkedin fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-40 left-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-html5 fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-80 left-40 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-css3-alt fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[50px] right-[420px] animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-github fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-[180px] right-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-figma fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-20 left-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-reddit-alien fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[480px] left-[400px] animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-square-js fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[480px] right-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-node fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-[450px] right-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-stripe fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[250px] right-40 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-react fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-6 left-[460px] animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-npm fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-[480px] left-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-git fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-10 right-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
        </div>
        <div className="flex flex-col justify-center items-center p-12 text-center text-black">
          <img className="w-4/12" src="src\assets\Images\sanjay.png" alt="" />
          <div className="balls relative">
            <div className="bg-white p-3 rounded-full absolute -top-[195px] left-[36px]">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <div className="bg-white p-3 rounded-full absolute -top-[195px] left-[1px]">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
          </div>
          <h1 className="text-7xl tracking-[1rem] font-SuperMario256">
            <p>HELLO, MY</p>
            <p>BEST FRIEND</p>
          </h1>
        </div>
      </div>
      {/* second page */}
      <div className="px-12 h-screen bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
        <h1 className="text-3xl font-PallyBold">ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fugit
          excepturi commodi ullam eius expedita voluptatibus adipisci assumenda
          doloribus. Commodi illo et repudiandae tenetur nobis repellendus
          ipsam. Earum, at laborum saepe, consequatur doloremque dolore
          voluptate eius necessitatibus impedit incidunt beatae similique,
          aliquid quas! Eligendi accusamus, perferendis amet dolorum ipsa a
          doloribus debitis nemo modi. Debitis cum placeat saepe? Quo deserunt
          nesciunt velit debitis minus ad dolor culpa officiis earum? Nihil esse
          consequuntur inventore molestiae libero temporibus, magnam vitae
          alias, reiciendis perferendis pariatur consectetur doloremque
          aspernatur provident eius, et est officia? Adipisci optio illo
          praesentium reprehenderit qui quaerat. Eligendi, eius nostrum.
        </p>
      </div>
    </>
  );
}
export default App;
