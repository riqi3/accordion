import React from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Data } from "./Data";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <div class="accordion-container">
        <h2>Questions And Answers About Login</h2>
        <IconContext.Provider value={{ color: "#000", size: "25px" }}>
          <div class="accordion-section">
            <div class="container">
              {Data.map((item, index) => {
                return (
                  <>
                    <div class="wrap" onClick={() => toggle(index)} key={index}>
                      <div class="tab-container">
                        <h4>
                          {item.question}
                          <button class="icon">
                            {clicked === index ? <FiMinus /> : <FiPlus />}
                          </button>
                        </h4>
                      </div>
                      {clicked === index ? (
                        <div class="dropdown">
                          <p>{item.answer}</p>
                        </div>
                      ) : null}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Accordion;
