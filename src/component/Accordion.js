import React, { useState } from "react";

const Accordion = ({ items }) => {
  // items property destructured from prop object

  const [activeIndex, setActiveIndex] = useState(null); //array destructuring
  const onTitleClick = (index) => {
    // console.log("Title clicked", index);
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`} //string templating
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
