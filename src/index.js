import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const ulElement = document.querySelector(".posts-list");
// const arr = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     return posts;
//   });

// const myPosts = async () => {
//   try {
//     const posts2 = await arr;
//     let result = posts2.map(function (elements) {
//       return elements;
//     });
//     result.forEach((elem) => {
//       ulElement.insertAdjacentHTML(
//         "afterbegin",
//         `<li class="posts-list-item"><span class="post-index">${
//           elem.id
//         }</span><h4 class="post-title">${elem.title}</h4><p class="post-text">${
//           elem.body
//         }</p><a href="#" class="post-link">${"Read more"}</a></li>`
//       );
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// myPosts();
