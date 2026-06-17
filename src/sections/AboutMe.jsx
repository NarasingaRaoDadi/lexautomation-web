import aboutMeImg from "../assets/about-me.png";

export default function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2>About Me</h2>

      <img
        src={aboutMeImg}
        alt="Narasinga Rao Dadi"
        className="profile-photo"
      />

      <h3 className="about-name">
        Narasinga Rao Dadi
        
      </h3>
      <h2>Legal Technology Builder | Software Engineer | Law Student</h2>
      <div className="profile-tags">
        <span>11+ Years Software Experience</span>
        <span>Andhra University LLB Student</span>
        <span>Creator of LexStudy</span>
        <span>Creator of LexPetition</span>
        <span>LexAutomation Founder</span>
        <span>Legal Technology Enthusiast</span>
      </div>

      <p className="about-description">
        With over 11 years of software engineering experience, 
        I am currently pursuing an LLB from Andhra University 
        while building legal technology products. Through LexStudy and LexPetition, 
        my goal is to bridge the gap between law and technology by creating practical 
        solutions for students, advocates and legal professionals.
      </p>
    </section>
  );
}