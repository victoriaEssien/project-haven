

import { useContext } from "react"
import { topicTitleContext } from "../Context/TopicTitleProvider"
import { Link } from "react-router-dom"

function CategoryCard({icon, number }) {

  return (
    <Link className="div-link" to={'/all'}>
        <div className="category-card">
        <img className='category-icon' src={icon} alt="" />
        <h4 className='category-title'>{topicTitle}</h4>
        <p className='topics-number'>{number}</p>
      </div>
    </Link>
  )
}

export default CategoryCard