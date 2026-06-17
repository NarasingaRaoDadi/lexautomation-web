function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Products</h2>

      <div className="portfolio-grid">

        <div className="portfolio-card">
          <h3>LexStudy</h3>
          <p>
            Exam-oriented learning platform for Andhra University
            LLB students with syllabus, questions, answers, 
            previous papers, solved papers and AIBE exam preparation.
          </p>
          <button>View Project</button>
        </div>

        <div className="portfolio-card">
          <h3>LexPetition</h3>
          <p>
            Legal document automation system that helps generate
            petitions and legal drafts efficiently.
          </p>
          <button>View Project</button>
        </div>

        <div className="portfolio-card">
          <h3>Legal Automation</h3>
          <p>
            Custom legal workflow automation and software solutions
            for law firms and legal professionals.
          </p>
          <button>View Project</button>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;