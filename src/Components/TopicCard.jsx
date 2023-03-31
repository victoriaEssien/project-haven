
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faXmark } from '@fortawesome/free-solid-svg-icons'

function TopicCard({ topic }) {
  let color;
  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });
  const [isFilled, setIsFilled] = useState(true)
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const existingData = JSON.parse(localStorage.getItem("bookmarkedData")) || [];


  useEffect(() => {
    if(existingData.findIndex(item => item.id === topic.id) !== -1){
      setIsFilled(true)
    }else {
      setIsFilled(false)
    }
  }, [existingData])

  const handleSaveTopic = (e) => {
    e.preventDefault()
    setIsFilled(!isFilled)
    let bookmarkedDataCopy = [...bookmarkedData]

    let isPresent = bookmarkedData.findIndex(
      (item) => item.id === topic.id
    )
    const existingData = JSON.parse(localStorage.getItem("bookmarkedData")) || [];

    if (isPresent === -1) {
      bookmarkedDataCopy.push(topic)
    }
    setBookmarkedData(bookmarkedDataCopy)
    localStorage.setItem("bookmarkedData", JSON.stringify([...existingData, ...bookmarkedDataCopy]))
  }

  const handleDeleteTopic = (e) => {
    e.preventDefault()
    setIsFilled(!isFilled)
    let bookmarkedDataCopy = [...bookmarkedData]
  
    const isPresent = bookmarkedData.findIndex(
      (item) => item.id === topic.id
    )
    
    if (isPresent !== -1) {
      bookmarkedDataCopy.splice(isPresent, 1)
    }
    setBookmarkedData(bookmarkedDataCopy)
    const existingDataCopy = JSON.parse(localStorage.getItem("bookmarkedData")) || []
    const index = existingDataCopy.findIndex(item => item.id === topic.id);
    existingDataCopy.splice(index, 1)
    localStorage.setItem("bookmarkedData", JSON.stringify([...existingDataCopy]))
  }

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

  const truncatedDescription = topic.description.slice(0, 110).concat("...");

  return (
    <Link className="div-link" to={'/' + topic.id}>
      <div className="topic-card">
        <div className="icon-div">
          <p className="topic-category" style={{color: color}}>{topic.category}</p>
          <FontAwesomeIcon className="icon" onClick={isFilled ? handleDeleteTopic : handleSaveTopic} icon={isFilled ? faXmark : faBookmark } color={isFilled ? '#41be80' : '#0d2040'} />
        </div>
        <h4 className="topic-title">{truncatedTitle}</h4>
        <p className="topic-desc">{truncatedDescription}</p>
      </div>
    </Link>
  )
}

export default TopicCard