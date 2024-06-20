import "./App.css";

function App() {
  const data = [
    {
      title: "Website",
      description:
        " lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      deadline:
        "lorem epsunm text-white font-sanstext-white font-sanstext-white font-sanstext-white font-sanstext-white font-sanstext-white font-sans",
    },
    {
      title: "Website",
      description:
        " lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      deadline:
        "lorem epsunm text-white font-sanstext-white font-sanstext-white font-sanstext-white font-sanstext-white font-sanstext-white font-sans",
    },
  ];

  return (
    <>
      <div className="bg-black min-h-screen p-8 flex flex-col items-center gap-8 text-white font-sans w-full">
        <h1 className=" text-4xl font-semibold ">
          Task Management Application
        </h1>
        <div className="flex justify-evenly ">
          <div className="tasks flex flex-col gap-8  justify-center p-4  text-2xl font-semibold w-1/2 ">
            <h1 className="flex-start"> Pending Tasks :- </h1>
            {data.map((item, ind) => {
              return (
                <div
                  className="tasks-box  relative flex flex-col justify-center gap-4 p-8 border hover:shadow-xl hover:shadow-white rounded-lg  "
                  key={ind}
                >
                  <div className="absolute right-4 top-4  cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      fill="white"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </div>
                  <h1 className="p-2  cursor-pointer">{item.title}</h1>
                  <div className="p-2 flex flex-row justify-between gap-4 text-gray-500 ">
                    <span className="font-light  cursor-pointer">
                      {item.description}
                    </span>
                    <div className="flex  justify-center p-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2em"
                        fill="white"
                        viewBox="0 0 256 512"
                      >
                        <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
