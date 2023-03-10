import React, { useState } from "react";

const Section = ({ title, discription, visible, setVisible }) => {
  return (
    <>
      <div className="border border-black p-5 m-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        {visible ? (
          <button
            className="border border-gray-300 p-2 rounded-xl"
            onClick={() => setVisible("null")}
          >
            hide
          </button>
        ) : (
          <button
            className="border border-gray-300 p-2 rounded-xl"
            onClick={() => setVisible(title)}
          >
            show
          </button>
        )}

        <h2>{visible && discription}</h2>
      </div>
    </>
  );
};

function About() {
  const [visible, setVisible] = useState("about");

  const data =
    "The sun rises over the horizon, casting a warm glow over the bustling city. People hurry to work, cars honk, and the aroma of fresh coffee fills the air. Birds chirp as they fly overhead, searching for their next meal. Meanwhile, in a nearby park, children laugh and play on the swings, chased by barking dogs. As the day goes on, the city continues to pulse with energy, each person caught up in their own busy lives. Yet despite the chaos, there's a sense of community, of people coming together to make this city thrive sun rises over the horizon, casting a warm glow over the bustling city. People hurry to work, cars honk, and the aroma of fresh coffee fills the air. Birds chirp as they fly overhead, searching for their next meal. Meanwhile, in a nearby park, children laugh and play on the swings, chased by barking dogs. As the day goes on, the city continues to pulse with energy, each person caught up in their own busy lives. Yet despite the chaos, there's a sense of community, of people coming together to make this city thrive.";

  return (
    <>
      <Section
        title="About"
        discription={data}
        visible={"About" === visible}
        setVisible={(e) => setVisible(e)}
      />
      <Section
        title="Detail"
        discription={data}
        visible={"Detail" === visible}
        setVisible={(e) => setVisible(e)}

      />
      <Section
        title="Summary"
        discription={data}
        visible={"Summary" === visible}
        setVisible={(e) => setVisible(e)}

      />
    </>
  );
}

export default About;
