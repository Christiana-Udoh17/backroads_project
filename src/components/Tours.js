import Title from "../components/Title";
import { toursContent } from "../data";
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="Tours" />

        <div className="section-center featured-center">
          {toursContent.map((content) => {
            const { date, title, location, id, img, cost, duration, text } =
              content;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>from {cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;
