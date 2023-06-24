import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";

// const text = document.getElementsById("text");
// console.log(text); //
// fetch(`https://dummyjson.com/quotes/${numRun}`)
//   .then((res) => res.json())
//   .then(console.log);
// text.innerHTML = "133";
const Panel = () => {
  const [data, setData] = useState(null);
  const numRand = Math.round(Math.random() * 30);

  useEffect(() => {
    async function quotesAPI() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        console.log(data.quotes.length); //
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
        alert("Failed to fetch data");
      }
    }
    quotesAPI();
  }, []);
  // const quotesAPI = fetch("https://dummyjson.com/quotes")
  //   .then((response) => response.json())
  //   .then((quotes) => {
  //     console.log(quotes.quotes.length); //
  //     console.log(quotes.quotes[numRand].quote); //
  //     console.log(quotes.quotes[numRand].author); //
  //   });
  // // console.log(quoteRand); // object

  // const quotes2 = async () => {
  //   try {
  //     const quoteOrigin = await quotesAPI;
  //     console.log(quoteOrigin); //
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // quotes2();

  return (
    <div
      id="quote-box"
      className="bg-[#d6d7da] rounded-[5px] m-10 text-[18px] shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]
    mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-2"
    >
      <p id="text">{"data"}</p>
      <p id="author">author {numRand}</p>
      <div>
        <a
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
          href="https://twitter.com/intent/tweet?hashtags=quotes"
        >
          <FaTwitter />
        </a>
        <button
          onClick={() => numRand}
          id="new-quote"
          className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xl font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 hover:bg-purple-50"
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Panel;

{
  /* <a id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20mind%20is%20everything.%20What%20you%20think%20you%20become.%22%20Buddha" ></a> */
}
