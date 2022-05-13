import React from "react";

import Accordion from "./component/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "What is JSX",
    content:
      "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).",
  },
  {
    title: "What is useState() in React?",
    content:
      "The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
