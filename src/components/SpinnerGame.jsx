import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
const data = [
  { option: "0₽" },
  { option: "40₽" },
  { option: "100₽" },
  { option: "200₽" },
  { option: "300₽" },
  { option: "400₽" },
  { option: "500₽" },
  { option: "1000₽" },
  { option: "2000₽" },
  { option: "3000₽" },
  { option: "4000₽" },
  { option: "5000₽" },
];

const backgroundColors = ["#a0e805", "#a0e805"];
const textColors = ["#000000"];
const outerBorderColor = "#000000";
const outerBorderWidth = 13;
const innerBorderColor = "#a0e80";
const innerBorderWidth = 20;
const innerRadius = 0;
const radiusLineColor = "#74786b";
const radiusLineWidth = 2;
const fontFamily = "Arial";
const fontWeight = "bold";
const fontSize = 25;
const fontStyle = "normal";
const textDistance = 70;
const spinDuration = 1.0;

export default function SpinnerGame() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [tickets, setTickets] = useState(10);
  const [result, setResult] = useState("");

  const handleSpinClick = () => {
    if (!mustSpin && tickets > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setTickets((prev) => prev - 1);
    }
  };

  return (
    <div className=" h-full bg-gradient-to-r from-teal-500 to-yellow-300 shadow-2xl mx-auto">
      <div className="flex max-w-md mx-auto w-full main_bg_img bg-cover shadow-2xl shadow-indigo-500/100 bg-center flex-col items-center justify-center min-h-screen p-4">
        <div className="relative">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            startingOptionIndex={2}
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              setResult(data[prizeNumber].option);
            }}
          />
        </div>
        <div
          className={`text-center max-w-[300px] h-full min-w-[300px]  result_img bg-cover rounded-t-2xl bg-no-repeat  mt-4 mb-4 flex flex-col items-center gap-y-2 p-4 shadow-md`}
        >
          <p className="text-lg font-semibold text-gray-700">Ваши билеты:</p>
          <p className="text-2xl font-semibold text-white bg-black w-16 rounded-md">
            {tickets}
          </p>
        </div>
        {result && (
          <div className="text-center max-w-[300px] h-full min-w-[300px] mb-4 bg-yellow-100 rounded-lg p-4 shadow-md">
            <p className="text-lg font-semibold text-yellow-700">Результат:</p>
            <p className="text-3xl font-bold text-yellow-600">{result}</p>
          </div>
        )}
        <button
          className="bg-black text-white font-bold max-w-[300px] h-full min-w-[300px] py-3 px-6 hover:bg-gray-800 transition duration-300"
          onClick={handleSpinClick}
          disabled={mustSpin || tickets === 0}
        >
          Крутить рулетку
        </button>
      </div>
    </div>
  );
}
