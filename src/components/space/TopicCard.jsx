import { Link } from "react-router-dom";

export default function TopicCard({ topic, chapterId }) {

  return (

    <div className="topic-card">

      <h3>{topic.title}</h3>

      <p>{topic.duration}</p>

      <Link
        className="chapter-button"
        to={`/space/chapter/${chapterId}/topic/${topic.id}`}
      >
        Study →
      </Link>

    </div>

  );

}