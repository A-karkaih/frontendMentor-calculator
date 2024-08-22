import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("0");

  const handleEv = (val) => {
    if (['+', '-', '*', '/'].includes(display.slice(-1)) && ['+', '-', '*', '/'].includes(val)) {
      setDisplay(display.slice(0, -1) + val);
    } else {
      if (display === "0" && val !== ".") {
        setDisplay(val);
      } else {
        if (display.length < 16) {
          setDisplay(display.concat(val));
        }
      }
    }
    
  };
  const handleDelete = () => {
    if (display.length === 1 || display === "0") {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };
  const handleReset = () => { 
    setDisplay('0');
  };
  const handleCalc = () => {
    try {
      setDisplay(eval(display).toString())
    } catch (error) {
      setDisplay(eval("error"))
      console.log(error);
      
    }
    
  };
  const [stage, setStage] = useState(0); 

  const handleClick = () => {
    setStage((prevStage) => (prevStage + 1) % 3);
  };
  return (
    <div className="w-[400px] h-[500px] grid grid-rows-12  mt-5 mx-auto ">
      <div className="flex items-center px-2 justify-between row-span-1   ">
        <h1 className="text-lg font-bold text-white ">Calc</h1>
        <div className=" w-28 h-6 flex gap-2 items-end">
          <p className="text-xs text-white cursor-default">theme</p>
          <div className="flex-col flex items-center">
      <div style={{ fontSize: '0.6rem' }} className=" w-13 flex gap-3 px-[6px] text-white font-semibold">
        <p className={`${stage === 0 ? 'text-red-600' : ''}`}>1</p>
        <p className={`${stage === 1 ? 'text-red-600' : ''}`}>2</p>
        <p className={`${stage === 2 ? 'text-red-600' : ''}`}>3</p>
      </div>
      <div
        className="h-4 w-14 rounded-xl bg-[rgb(25,30,50)] flex items-center pl-[6px]  py-[6px] cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`h-[13px] w-[13px] rounded-full bg-red-600 transition-transform duration-300`}
          style={{
            transform: `translateX(${stage * 16}px)`, 
          }}
        />
      </div>
    </div>
        
        </div>
      </div>
      <div className=" row-span-2">
        <input
        defaultValue="00"
          value={display}
          readOnly
          type="text"
          className="bg-[rgb(25,30,50)] rounded-md h-[100%] w-[100%] text-white text-4xl font-bold text-right pr-3 cursor-default focus:outline-none"
        />
      </div>
      <div className="mt-3 rounded-md bg-[rgb(36,45,69)] row-span-9 gap-4 grid-cols-12 grid grid-rows-10 p-6">
        <button
          onClick={() => handleEv("7")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          7
        </button>
        <button
          onClick={() => handleEv("8")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          8
        </button>
        <button
          onClick={() => handleEv("9")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          9
        </button>
        <button
          onClick={handleDelete}
          className=" bg-[rgb(100,112,155)]  text-white col-span-3 row-span-2 rounded-md shadow-lg text-xl font-bold"
        >
          DEL
        </button>
        <button
          onClick={() => handleEv("4")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          4
        </button>
        <button
          onClick={() => handleEv("5")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          5
        </button>
        <button
          onClick={() => handleEv("6")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          6
        </button>
        <button
          onClick={() => handleEv("+")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          +
        </button>
        <button
          onClick={() => handleEv("1")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          1
        </button>
        <button
          onClick={() => handleEv("2")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          2
        </button>
        <button
          onClick={() => handleEv("3")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          3
        </button>
        <button
          onClick={() => handleEv("-")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          -
        </button>
        <button
          onClick={() => handleEv(".")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          .
        </button>
        <button
          onClick={() => handleEv("0")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          0
        </button>
        <button
          onClick={() => handleEv("/")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          /
        </button>
        <button
          onClick={() => handleEv("*")}
          className="bg-[rgb(234,227,219)] col-span-3 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          *
        </button>
        <button
          onClick={handleReset}
          className="bg-[rgb(100,112,155)] text-white col-span-6 row-span-2 rounded-md shadow-lg text-xl font-bold"
        >
          RESET
        </button>
        <button
          onClick={handleCalc}
          className="bg-red-500 text-white col-span-6 row-span-2 rounded-md shadow-lg text-2xl font-bold"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
