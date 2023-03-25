
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function TopicCard({ topic }) {
  let color;
  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });

  switch (topic.category) {
    case 'Web Development':
      color = '#2252AA';
      break;
    case 'Mobile App Development':
      color = '#349866';
      break;
    case 'Artificial Intelligence':
      color = '#CC0000';
      break;
    case 'Networking':
      color = '#8A0DBF';
      break;
    case 'Machine Learning':
      color = '#CC0000';
      break;
    case 'Cyber Security':
      color = "#8A0DBF";
    default:
      color = 'black';
  }

  let truncatedTitle = isMobileDevice ? topic.title.slice(0, 20).concat("...") : topic.title;

  const truncatedDescription = topic.description.slice(0, 120).concat("...");

  return (
    <Link className="div-link" to={'/' + topic.id}>
      <div className="topic-card">
        <p className="topic-category" style={{color: color}}>{topic.category}</p>
        <h4 className="topic-title">{truncatedTitle}</h4>
        <p className="topic-desc">{truncatedDescription}</p>
      </div>
    </Link>
  )
}

export default TopicCard