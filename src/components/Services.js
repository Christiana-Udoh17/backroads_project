import Title from "../components/Title";

import { serviceContent } from "../data";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="Our" subTitle="Services" />
        <div className="section-center services-center">
          {serviceContent.map((content) => {
            return (
              <article className="service" key={content.id}>
                <span className="service-icon">
                  <i className={content.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{content.title}</h4>
                  <p className="service-text">{content.text}</p>
                </div>
              </article>
            );
          })}

          {/* <article className="service">
            <span className="service-icon">
              <i className="fas fa-tree fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">endless hiking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i className="fas fa-socks fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article> */}
        </div>
      </section>
    </>
  );
};
export default Services;
