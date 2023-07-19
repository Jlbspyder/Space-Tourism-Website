import { useState, Fragment } from "react";

const Destination = ({ destination }) => {
  const [data] = useState(destination);
  const [current, setCurrent] = useState(0);

  const { name, description, distance, travel } = data[current];

  return (
    <section className="destination">
      <div className="flex2">
        <div className="head">
          <h3 className="heading">
            <span className="num">01</span> Pick your destination
          </h3>
          {data.map((item, index) => (
            <div key={index} className={index === current ? "head" : ""}>
              {index === current && (
                <img src={item.images.png} alt="planet" className="moon" />
              )}
            </div>
          ))}
        </div>
        <div className="content">
          {data.map((item, index) => (
            <Fragment key={index}>
              <button
                className="list"
                style={{
                  borderBottom:
                    index === current ? "2px solid rgb(255 255 255)" : "",
                  color: index === current ? "rgb(255 255 255)" : "",
                  transition: index === current ? "all 350ms cubic-bezier(0.16, 1, 0.3, 1)" : "",
                }}
                onClick={() => setCurrent(index)}
              >
                {item.name}
              </button>
            </Fragment>
          ))}
          <h1 className="title">{name}</h1>
          <p className="info">{description}</p>
          <div className="border-line"></div>
          <div className="planet-info">
            <div>
              <h6>avg. distance</h6>
              <h2>{distance}</h2>
            </div>
            <div>
              <h6>est. travel time</h6>
              <h2>{travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
