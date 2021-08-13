import React from 'react'
import axios from 'axios'
import '../style/style.css'

const DeleteAuthor = (props) => {

  const { authorId } = props

  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
      .then(res => {
        props.setSubmitAuthorDummy(!props.submitAuthorDummy)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div style= {{ display: 'inline-block'}}>
      <button className="edit-delete" onClick={(e) => handleDelete(e)}>  Delete </button>
    </div>
  )

}

export default DeleteAuthor;