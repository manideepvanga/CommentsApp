// Write your code here

import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {item, LikeChange, Deleted, classnameforletter, ClassNames} = props
  const {name, comment, id, islike, number} = item
  const likeimg = islike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeclass = islike ? 'like' : 'dislike'

  const clickLike = () => {
    LikeChange(id)
  }

  const DeleteInitate = () => {
    Deleted(id)
  }

  return (
    <li className="listitem">
      <div className="content1">
        <p className={ClassNames[number]}>{name[0].toUpperCase()}</p>
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <div className="paragraph">
        <p className="comment">{comment}</p>
      </div>

      <div className="buttoncontainer">
        <button onClick={clickLike} className={likeclass}>
          <img src={likeimg} />
          like
        </button>
        <button onClick={DeleteInitate}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
