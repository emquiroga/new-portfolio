const About = ({ content }) => {
  const { description, work, studies } = content;
  return (
    <section className="aboutSection">
      <h2 className="aboutTitle">
        <span>&lt;</span>Sobre mí<span>/&gt;</span>
      </h2>
      <p className="aboutDescription">{description}</p>
      <div className="aboutWork">
        <h3>
          <span>&lt;</span>Experiencia laboral<span>/&gt;</span>
        </h3>
        <p>{work}</p>
      </div>
      <div className="aboutStudies">
        <h3>
          <span>&lt;</span>Estudios<span>/&gt;</span>
        </h3>
        <p>{studies}</p>
      </div>
    </section>
  );
};

export default About;
