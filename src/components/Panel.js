import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import generateRandomNum from "../utils/generateRandomNum";
import generateRandomNumberForColor from "../utils/generateRandomNumberForColor";

const Panel = (props) => {
  const [data, setData] = useState(null);
  const [randomNum, setRandomNum] = useState(null);
  const [classesList, setClassesList] = useState(props.initialClassesList);
  const maxNum = data ? data.quotes.length : "there is no data";

  const onButtonClick = () => {
    setData(data);
    setClassesList("quote-class");
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
    <div
      id="quote-box"
      className="bg-[#d6d7da] rounded-[5px] m-10 text-[18px] shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]
    mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-2"
    >
      {data && (
        <div>
          <p className={classesList} id="text">
            "{data.quotes[generateRandomNum(maxNum)].quote}"
          </p>
          {/* got to move this span to the right */}
          <span id="author" className="text-[1em] text-right">
            - {data.quotes[generateRandomNum(maxNum)].author}
          </span>
        </div>
      )}
      <div className="flex flex-row justify-between mt-4 px-4">
        <div>
          <button className="inline-flex items-center rounded-md px-2 py-2 text-xl font-medium text-[rgba(255,255,255,1)] bg-[rgba(1,1,1,0.5)] ring-1 ring-inset ring-gray-500/10 hover:bg-[rgba(1,1,1,0.3)]">
            <a
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes"
            >
              <FaTwitter />
            </a>
          </button>
        </div>
        <div>
          <button
            onClick={onButtonClick}
            id="new-quote"
            className="inline-flex items-center rounded-md px-2 py-1 text-xl font-medium text-[rgba(255,255,255,1)] bg-[rgba(1,1,1,0.5)] ring-1 ring-inset ring-gray-500/10 hover:bg-[rgba(1,1,1,0.3)]"
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;

{
  /* <a id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20mind%20is%20everything.%20What%20you%20think%20you%20become.%22%20Buddha" ></a> */
}
