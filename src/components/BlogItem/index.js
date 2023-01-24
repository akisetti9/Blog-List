// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog, blogsList} = props
  const {id, title, description, publishedDate} = eachBlog
  return (
    <li className="blog-list-container">
      <div className="title-and-date">
        <h1 className="blog-title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p>{description}</p>
      {id !== blogsList[blogsList.length - 1].id && (
        <hr className="break-line" />
      )}
    </li>
  )
}

export default BlogItem
