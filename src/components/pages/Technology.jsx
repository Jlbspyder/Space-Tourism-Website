import { useState } from "react";

const Technology = ({ technology }) => {
  const [data] = useState(technology);
  const [current, setCurrent] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const length = data.length;
  const handlePrevious = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrevious();
    }

    setTouchPosition(null);
  };

  return (
    <section className="technology">
      <div
        className="flex2 technology"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="head">
          <h3 className="mobile-heading">
            <span className="num">03</span>space launch 101
          </h3>
          {data.map((item, index) => (
            <div key={index} className={index === current ? "head" : ""}>
              {index === current && (
                <picture>
                  <source
                    media="(min-width: 630px)"
                    srcSet={item.images.portrait}
                    className="portrait"
                  />
                  <img
                    src={item.images.landscape}
                    alt={item.name}
                    className="landscape"
                  />
                </picture>
              )}
            </div>
          ))}
        </div>
        <div className="flex3">
          <h3 className="heading">
            <span className="num">03</span>space launch 101
          </h3>
          <div className="content">
            <div className="tech">
              <h6>the terminology...</h6>
              {data.map((item, index) => (
                <div key={index} className={index === current ? "tech" : ""}>
                  {index === current && <h3 className="title">{item.name}</h3>}
                  {index === current && (
                    <p className="info">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="_tech">
              {data.map((item, index) => (
                <button
                  key={index}
                  className={`circle ${index === current && "_active"}`}
                  onClick={() => setCurrent(index)}
                >
                  {" "}
                  {index + 1}{" "}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
