import askImg from "../assets/lexstudy-ask.jpg";
import aibeImg from "../assets/lexstudy-aibe.jpg";
import lpForm from "../assets/lexpetition-form.jpg";
import lpPreview from "../assets/lexpetition-preview.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">

      <h2>Products Built by LexAutomation</h2>

      <p className="portfolio-intro">
        Real legal technology solutions developed for law students,
        citizens and legal professionals.
      </p>

      <div className="portfolio-grid">

        {/* LexStudy */}
        <div className="portfolio-card">

          <h3>LexStudy</h3>

          <span className="badge">
            📱 Live on Google Play
          </span>

          <p>
            Android learning platform built for Andhra University LLB
            students. Semester-wise syllabus, question banks,
            solved papers and AIBE preparation.
          </p>

          <p className="product-stats">
            🎓 AU LLB Platform • 📚 1000+ Questions • ⚖️ AIBE Preparation
          </p>

          <div className="screenshots">
            <img src={askImg} alt="LexStudy Ask Screen" />
            <img src={aibeImg} alt="LexStudy AIBE Screen" />
          </div>

          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.lexstudybase",
                "_blank"
              )
            }
          >
            📱 View on Google Play
          </button>

        </div>

        {/* LexPetition */}
        <div className="portfolio-card">

          <h3>LexPetition</h3>

          <span className="badge">
            📱 Live on Google Play
          </span>

          <p>
            Legal document automation platform for generating petitions,
            legal notices and court drafts through guided forms.
          </p>

          <p className="product-stats">
            ⚖️ Draft Automation • 📝 Petitions • 📄 Legal Documents
          </p>

          <div className="screenshots">
            <img src={lpForm} alt="LexPetition Form" />
            <img src={lpPreview} alt="Generated Petition" />
          </div>

          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.lexpetition",
                "_blank"
              )
            }
          >
            📱 View on Google Play
          </button>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;