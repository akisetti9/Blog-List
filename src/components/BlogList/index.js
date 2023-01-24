// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-container">
      {blogsList.map(each => (
        <BlogItem eachBlog={each} blogsList={blogsList} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
