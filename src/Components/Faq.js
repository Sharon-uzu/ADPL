import React, { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import pix from "../Assets/Rectangle 8.png";

const Faqs = [
  {
    id: 1,
    ques: "How does Daypal ensure helpers are trustworthy?",
    ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, corrupti rerum. Animi tempora cupiditate eligendi possimus, cum quaerat laborum officia eaque delectus, fuga ut quae. Illo necessitatibus architecto quis eligendi.",
  },
  {
    id: 2,
    ques: "What payment methods are supported?",
    ans: "AI chatbots work by leveraging natural language processing (NLP) and machine learning algorithms. They analyze and understand user inputs, interpret the intent behind the queries, and generate appropriate responses.",
  },
  {
    id: 3,
    ques: "How does Daypal ensure helpers are trustworthy?",
    ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, corrupti rerum. Animi tempora cupiditate eligendi possimus, cum quaerat laborum officia eaque delectus, fuga ut quae. Illo necessitatibus architecto quis eligendi.",
  },
  {
    id: 4,
    ques: "How does Daypal ensure helpers are trustworthy?",
    ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, corrupti rerum. Animi tempora cupiditate eligendi possimus, cum quaerat laborum officia eaque delectus, fuga ut quae. Illo necessitatibus architecto quis eligendi.",
  },
];

const Faq = () => {

  const [activeIds, setActiveIds] = useState([1, 3]);

  const toggleFaq = (id) => {
    setActiveIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]
    );
  };

  return (
    <div className="faq" id="faq">
      <div className="faq-c">
        <div className="f-img">
          <img src={pix} alt="" />
        </div>
        
        <div className="faq-r">
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
          <p>
            We hope this FAQ section has addressed some of your common
            questions. If you have any further queries, please don't hesitate
            to reach out to us.
          </p>

          {Faqs.map((faq) => (
            <div className="ques-ans" key={faq.id}>
              <div className="qa-c">
                <h2>
                  <span className="quess">{faq.id}. {faq.ques}{" "}</span>
                  <span
                    className="toggle-icon"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {activeIds.includes(faq.id) ? (
                      <GoDash className="t-i" />
                    ) : (
                      <GoPlus className="t-i" />
                    )}
                  </span>
                </h2>
                {activeIds.includes(faq.id) && <p>{faq.ans}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
