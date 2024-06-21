import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      title: "Sample task",
      description:
        " sample description lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      due: "12/4/24 ",
    },
    {
      title: "Sample task",
      description:
        " sample description lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      due: "12/4/24 ",
    },
    {
      title: "Sample task",
      description:
        " sample description lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      due: "12/4/24 ",
    },

    {
      title: "Sample task",
      description:
        " sample description lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      due: "12/4/24 ",
    },
      {
      title: "Sample task",
      description:
        " sample description lorem23 lorem epsunm lorem epsunm lorem lorem23 lorem epsunm lorem epsunm lorem  lorem23 lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm lorem epsunm ",
      due: "12/4/24 ",
    },
  ]);

  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  // console.log(input2);





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
                  <h1 className="p-2  cursor-pointer">
                    {item.title} | Due: {item.due}
                  </h1>
                  <div className="p-2 flex flex-row justify-between gap-4 text-gray-500 ">
                    <span className="font-light  font-mono  cursor-pointer">
                      {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="add  w-1/2 p-12">
            <div className="p-4 py-6 border mt-8 text-xl flex flex-col justify-center items-center gap-6 rounded-md w-full">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-4xl">Add New Task</h1>
                <span className="font-light text-sm">
                  Pls enter details of new task
                </span>
              </div>
              <div className="flex gap-4 justifiy-center items-center  ">
                <span>Title:</span>
                <input
                  type="text"
                  required
                  value={input}
                  placeholder="enter title"
                  className="px-4 py-2 text-sm rounded capitalize text-black"
                  onChange={(e)=>setInput(e.target.value)}
                />
              </div>
              <div className="flex gap-4 justifiy-center items-center ">
                <textarea
                  className="border font-serif active:border-black p-4 text-xs min-h-[80px] text-black"
                  cols="30"
                  value={input2}
                  required
                  placeholder="put up description about task..."
                  onChange={(e)=>setInput2(e.target.value)}
                  // value={input.description}
                ></textarea>
              </div>
                <button className=" border px-6 py-2 w-1/3 active:bg-white active:text-black">
                  Add
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
