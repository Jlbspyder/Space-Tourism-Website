import { useState } from "react";
import { BsCircle } from "react-icons/bs";

const Crew = ({ crew }) => {
  const [data] = useState(crew);
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
    <section className="crew">
      <div
        className="flex2 crew"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="head">
          <h3 className="mobile-heading">
            <span className="num">02</span>meet your crew
          </h3>
          {data.map((item, index) => (
            <div key={index} className={index === current ? "head" : ""}>
              {index === current && (
                <img src={item.images.png} alt={item.name} className="_crew" />
              )}
            </div>
          ))}
        </div>
        <div className="content">
          <h3 className="heading">
            <span className="num">02</span>meet your crew
          </h3>
          {data.map((item, index) => (
            <div key={index} className={index === current ? "content" : ""}>
              {index === current && <h3 className="name">{item.role}</h3>}
              {index === current && <h3 className="title">{item.name}</h3>}
              {index === current && <p className="info">{item.bio}</p>}
            </div>
          ))}

          {data.map((item, index) => (
            <button
              key={index}
              className="list"
              onClick={() => setCurrent(index)}
            >
              <BsCircle
                className={`circle ${index === current && "_active"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;
