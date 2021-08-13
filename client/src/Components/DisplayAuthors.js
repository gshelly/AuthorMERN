import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/style.css'
import { Link, navigate } from '@reach/router';
import DeleteAuthor from './DeleteAuthor';

const DisplayAuthors = (props) => {

  const [displayAuthors, setDisplayAuthors] = useState([])
  const [submitAuthorDummy, setSubmitAuthorDummy] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(response => {
        setDisplayAuthors(response.data.allAuthors)
      })
      .catch(error => console.log(error))
  }, [submitAuthorDummy])

  const handleEdit = (e, author) => {

     navigate('/edit/'+author._id)
     props.setEditAuthor(author)
  }

  return (
    <div id="wrapper">
      <h1 style={{margin: '20px auto'}}> Favorite Authors </h1>
      <Link to={'/new'}> Add an Author </Link>

    <table id="result-table">
    <caption className="caption"> we have quotes by:</caption>
      <thead>
        <tr>
          <th>Author</th>
          <th>Action Available</th>
        </tr>
      </thead>
      <tbody>
        {displayAuthors.map((author, index) => {
          return (
            <tr key={index}>
              <td>{author.name}</td>
              <td>
                <button className="edit-delete" onClick={(e) => handleEdit(e, author)}> Edit </button>
                <DeleteAuthor className="edit-delete" authorId={author._id} setSubmitAuthorDummy={setSubmitAuthorDummy} submitAuthorDummy={submitAuthorDummy}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}

export default DisplayAuthors;