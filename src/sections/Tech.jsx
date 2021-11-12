const Tech = ({ content }) => {
  const { skills, expectations } = content;
  return (
    <section className="techSection">
      <div className="techSkills">
        <h3>
          <span>&lt;</span>Tecnologías<span>/&gt;</span>
        </h3>
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
      <div className="techExpectations">
        <h3>
          <span>&lt;</span>Expectativas<span>/&gt;</span>
        </h3>
        {expectations.map((expectation, index) => (
          <p key={index}>{expectation}</p>
        ))}
      </div>
    </section>
  );
};

export default Tech;
