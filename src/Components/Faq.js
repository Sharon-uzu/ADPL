import React, { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import pix from "../Assets/Rectangle 8.png";
import LazyLoad from 'react-lazyload';

const Faqs = [
  {
    id: 1,
    ques: "What you should expect?",
    ans: `
    1. Sports and wellbeing centre
2. Children playground
3. Gym centre
4. Cinema
5. Mini Park for picnics and relaxations
6. Streetlights with CCTV
7. Solar Light (on request)
8. Estate close security system
9. Good road networks and drainages
10. Trees and shades of green areas.
11. Waste management system to keep estate clean.
    `,
  },
  {
    id: 2,
    ques: "What we want you to do?",
    ans: `1. Pick the house of your choice from the multiple options.
2. Pay your deposit of 20% with 12 months and split the payment balance of 80% over
8 years (T&amp;C Apply).
3. Monthly payment of at least 100 USD monthly direct debit or 1200 USD annually until
you are ready to conclude payment. This is for the 80% balance.`,
  },
  {
    id: 3,
    ques: "What we will do for you?",
    ans: `1. Give you your document of land with C of O after payment 20%. House plan you
picked, survey and approval.
2. Instant allocation of your plot after payment of 20%
3. Monthly video update of the project.
4. Account statement monthly to know what you paid and what was done.`,
  },
  {
    id: 4,
    ques: "What about investors?",
    ans: "You are welcome to invest with agreed return of investment you will love. This can be discussed with our finance team when you email of call.",
  },
  {
    id: 5,
    ques: "Locations?",
    ans: `Currently we have development of our Diaspora Estate at the following locations.
1. Benin city
2. Ibadan
3. Abeokuta
4. Akure
5. Enugu`},
];

const Faq = () => {

  const [activeIds, setActiveIds] = useState([1, 4]);

  const toggleFaq = (id) => {
    setActiveIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]
    );
  };

  return (
    <div className="faq" id="faq">
      <div className="faq-c">
        <div className="f-img">
          <LazyLoad>
            <img src={pix} alt="" />
          </LazyLoad>
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
