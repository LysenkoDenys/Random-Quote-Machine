import React, { useEffect, useState } from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import generateRandomNum from "../utils/generateRandomNum";
import generateRandomNumberForColor from "../utils/generateRandomNumberForColor";

const Panel = (props) => {
  const [data, setData] = useState(null);
  const [randomNum, setRandomNum] = useState(null);
  const [classesList, setClassesList] = useState(props.initialClassesList);
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

  // ======================================================================
  let textField;
  let bgColor;
  console.log(randColor); //
  switch (randColor) {
    case "stone":
      textField = "text-stone-400";
      bgColor = "bg-stone-400";
      break;
    case "red":
      textField = "text-[red]";
      bgColor = "bg-[red]";
      break;
    case "orange":
      textField = "text-[orange]";
      bgColor = "bg-[orange]";
      break;
    case "amber":
      textField = "text-amber-700";
      bgColor = "bg-amber-700";
      break;
    case "yellow":
      textField = "text-yellow-400";
      bgColor = "bg-yellow-400";
      break;
    case "lime":
      textField = "text-[lime]";
      bgColor = "bg-[lime]";
      break;
    case "green":
      textField = "text-[green]";
      bgColor = "bg-[green]";
      break;
    case "emerald":
      textField = "text-emerald-400";
      bgColor = "bg-emerald-400";
      break;
    case "teal":
      textField = "text-[teal]";
      bgColor = "bg-[teal]";
      break;
    case "indigo":
      textField = "text-indigo-700";
      bgColor = "bg-indigo-700";
      break;
    case "sky":
      textField = "text-sky-400";
      bgColor = "bg-sky-400";
      break;
    case "blue":
      textField = "text-blue-400";
      bgColor = "bg-blue-400";
      break;
    default:
      textField = "text-[red]";
      bgColor = "bg-[red]";
  }
  // ======================================================================

  const onButtonClick = () => {
    setData(data);
    setClassesList(textField);
    console.log(textField); //
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
        className="bg-white rounded-[5px] m-3 text-[18px] shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]
    mx-auto my-auto max-w-xl px-6 py-6"
      >
        {data && (
          <>
            <div className="flex ">
              <div>
                <FaQuoteLeft className={`${textField} mr-2 mt-2`} />
              </div>
              <p
                className={`${textField} font-medium text-[1.75em] mb-4`}
                id="text"
              >
                {data.quotes[randNumber].quote}
              </p>
            </div>
            <div>
              <p
                id="author"
                className={`${textField} text-[1em] float-right text-[rgba(52,34,36,1)]`}
              >
                - {data.quotes[randNumber].author}
              </p>
            </div>
          </>
        )}
        <br></br>
        <div className="flex flex-row justify-between mt-8">
          <button
            className={`inline-flex items-center rounded-[3px] px-2 py-1 text-xl font-medium text-white ${bgColor} hover:opacity-80`}
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
            className={`inline-flex items-center rounded-[3px] px-2 py-1 text-xl font-medium text-white ${bgColor} hover:opacity-80`}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
