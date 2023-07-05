import React, { useEffect, useState } from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import generateRandomNum from "../utils/generateRandomNum";
import generateRandomNumberForColor from "../utils/generateRandomNumberForColor";

const Panel = () => {
  const [data, setData] = useState(null);
  const [randomNum, setRandomNum] = useState(null);
  const [classesList, setClassesList] = useState(null);
  const maxNum = data ? data.quotes.length : "there is no data";
  const randNumber = generateRandomNum(maxNum);
  const randColor = generateRandomNumberForColor();
  const url = data
    ? "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      '"' +
      data.quotes[randNumber].quote +
      '" - ' +
      data.quotes[randNumber].author
    : "#";

  // COLORS================================================================
  let textField;
  let bgColor;
  let bodyColor;
  switch (randColor) {
    case "stone":
      textField = "text-stone-400";
      bgColor = "bg-stone-400";
      bodyColor = "#94a3b8";
      break;
    case "red":
      textField = "text-red-500";
      bgColor = "bg-red-500";
      bodyColor = "#ef4444";
      break;
    case "orange":
      textField = "text-orange-500";
      bgColor = "bg-orange-500";
      bodyColor = "#f97316";
      break;
    case "amber":
      textField = "text-amber-700";
      bgColor = "bg-amber-700";
      bodyColor = "#b45309";
      break;
    case "yellow":
      textField = "text-yellow-400";
      bgColor = "bg-yellow-400";
      bodyColor = "#facc15";
      break;
    case "lime":
      textField = "text-lime-500";
      bgColor = "bg-lime-500";
      bodyColor = "#84cc16";
      break;
    case "green":
      textField = "text-green-500";
      bgColor = "bg-green-500";
      bodyColor = "#22c55e";
      break;
    case "emerald":
      textField = "text-emerald-400";
      bgColor = "bg-emerald-400";
      bodyColor = "#34d399";
      break;
    case "teal":
      textField = "text-teal-500";
      bgColor = "bg-teal-500";
      bodyColor = "#14b8a6";
      break;
    case "indigo":
      textField = "text-indigo-700";
      bgColor = "bg-indigo-700";
      bodyColor = "#4338ca";
      break;
    case "sky":
      textField = "text-sky-400";
      bgColor = "bg-sky-400";
      bodyColor = "#38bdf8";
      break;
    case "blue":
      textField = "text-blue-400";
      bgColor = "bg-blue-400";
      bodyColor = "#60a5fa";
      break;
    default:
      textField = "text-red-700";
      bgColor = "bg-red-700";
      bodyColor = "#b91c1c";
  }
  // ======================================================================

  // BODY==================================================================
  function setColor() {
    document.documentElement.style.setProperty("--color-body", bodyColor);
  }
  setColor();
  // ======================================================================

  const onButtonClick = () => {
    setData(data);
    setClassesList(textField);
    setRandomNum(generateRandomNum(maxNum));
  };

  useEffect(() => {
    async function quotesAPI() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
        alert("Failed to fetch data");
      }
    }
    quotesAPI();
  }, []);

  return (
    <div id="wrapper">
      <div
        id="quote-box"
        className="bg-white rounded-[5px] m-3 shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]
    mx-auto my-auto max-w-xl px-6 py-6"
      >
        {data && (
          <>
            <div className="flex ">
              <div>
                <FaQuoteLeft className={`${textField} mr-2 mt-2`} />
              </div>
              <p
                className={`${textField} font-medium mb-4 text-[1em] lg:text-[1.75em]`}
                id="text"
              >
                {data.quotes[randNumber].quote}
              </p>
            </div>
            <div>
              <p
                id="author"
                className={`${textField} text-[0.75em] float-right lg:text-[1em]`}
              >
                - {data.quotes[randNumber].author}
              </p>
            </div>
          </>
        )}
        <br></br>
        <div className="flex flex-row justify-between mt-8">
          <button
            className={`inline-flex items-center rounded-[3px] px-1 py-0.5 text-sm font-medium text-white ${bgColor} hover:opacity-80 lg:px-2 lg:py-1 lg:text-xl`}
          >
            <a
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              rel="noopener noreferrer"
              href={url}
            >
              <FaTwitter />
            </a>
          </button>
          <button
            onClick={onButtonClick}
            id="new-quote"
            className={`inline-flex items-center rounded-[3px] px-1 py-0.5 text-sm font-medium text-white ${bgColor} hover:opacity-80 lg:px-2 lg:py-1 lg:text-xl`}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
