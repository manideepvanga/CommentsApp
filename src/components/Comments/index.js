import {v4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentlist: [], islike: false, number: 0}

  nameAdd = event => {
    this.setState({name: event.target.value})
  }

  commentAdd = event => {
    this.setState({comment: event.target.value})
  }

  commentSubmit = event => {
    event.preventDefault()
    const {commentlist, comment, name, islike, number} = this.state
    const objecter = {
      name,
      comment,
      id: v4(),
      islike,
      number,
    }
    const indexcolor = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )

    this.setState(prevState => ({
      commentlist: [...prevState.commentlist, objecter],
      name: '',
      comment: '',
      number: indexcolor,
    }))
  }

  LikeChange = ids => {
    const {commentlist, islike} = this.state
    this.setState(prevState => ({
      commentlist: prevState.commentlist.map(each => {
        if (each.id === ids) {
          return {...each, islike: !each.islike}
        }
        return each
      }),
    }))
  }

  Deleted = ider => {
    this.setState(prevState => ({
      commentlist: prevState.commentlist.filter(each => each.id !== ider),
    }))
  }

  render() {
    const {commentlist, comment, name} = this.state

    return (
      <div className="container">
        <div className="content">
          <div className="topcontainer">
            <div className="side1">
              <h1>Comments</h1>
              <form type="form">
                <p>Say something about 4.0 Technologies</p>
                <input
                  value={name}
                  placeholder="Your Name"
                  onChange={this.nameAdd}
                  type="text"
                />
                <textarea
                  value={comment}
                  placeholder="Your Comment"
                  onChange={this.commentAdd}
                  cols={21}
                  rows={5}
                />
                <button
                  className="Addbutton"
                  onClick={this.commentSubmit}
                  type="submit"
                >
                  Add Comment
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="bottomcontainer">
            <p>
              <span>{commentlist.length}</span>Comments
            </p>
            <ul className="unorder">
              {commentlist.map(each => (
                <CommentItem
                  key={each.id}
                  item={each}
                  LikeChange={this.LikeChange}
                  Deleted={this.Deleted}
                  ClassNames={initialContainerBackgroundClassNames}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
