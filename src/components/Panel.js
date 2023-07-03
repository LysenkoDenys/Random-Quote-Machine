import React, { useEffect, useState } from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import generateRandomNum from "../utils/generateRandomNum";
import generateRandomNumberForColor from "../utils/generateRandomNumberForColor";

const Panel = (props) => {
  const [data, setData] = useState(null);
  const [randomNum, setRandomNum] = useState(null);
  const [classesList, setClassesList] = useState(props.initialClassesList);
  const maxNum = data ? data.quotes.length : "there is no data";
  const randColor = `text-[rgba(${generateRandomNumberForColor()},${generateRandomNumberForColor()},${generateRandomNumberForColor()},1)]`;
  const randNumber = generateRandomNum(maxNum);
  const url = data
    ? "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      '"' +
      data.quotes[randNumber].quote +
      '" - ' +
      data.quotes[randNumber].author
    : "#";
  const textField = `"${randColor} font-medium text-[1.75em] mb-4"`;

  const onButtonClick = () => {
    setData(data);
    setClassesList(randColor);
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
        className="bg-[#d6d7da] rounded-[5px] m-3 text-[18px] shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]
    mx-auto my-auto max-w-xl px-6 py-6"
      >
        {data && (
          <div>
            <p className={textField} id="text">
              <FaQuoteLeft className="text-[25px] content-['\f10d']" />
              {data.quotes[randNumber].quote}
            </p>
            <p
              id="author"
              className="text-[1em] float-right text-[rgba(52,34,36,1)]"
            >
              - {data.quotes[randNumber].author}
            </p>
          </div>
        )}
        <br></br>
        <div className="flex flex-row justify-between mt-8">
          <button className="inline-flex items-center rounded-[3px] px-2 py-2 text-xl font-medium text-[rgba(255,255,255,1)] bg-[rgba(1,1,1,0.5)] ring-1 ring-inset ring-gray-500/10 hover:bg-[rgba(1,1,1,0.3)]">
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
            className="inline-flex items-center rounded-[3px] px-2 py-1 text-xl font-medium text-[rgba(255,255,255,1)] bg-[rgba(1,1,1,0.5)] ring-1 ring-inset ring-gray-500/10 hover:bg-[rgba(1,1,1,0.3)]"
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
