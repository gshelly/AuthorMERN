import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate, Link } from "@reach/router";

const AddEditAuthor = (props) => {

  const { editAuthor } = props
  const [authors, setAuthor] = useState("")
  const [errors, setErrors] = useState([])

  const [isUniqueError, setUniqueError] = useState(false)

  useEffect(() => {
    if (editAuthor) {
      setAuthor(editAuthor.name)
    }
  }, [editAuthor])

  const addAuthor = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/authors', {
      name: authors
    })
      .then(res => {
        console.log(res)
        // setAuthor("")
        navigate('/')
      })
      .catch(err => {

        if (err.response.data.name === 'MongoError' && err.response.data.code === 11000) {
          setErrors("Author name must be unique")
          console.log(err.response.data.name);
          setUniqueError(true)
        } else {
          setErrors(err.response.data.errors)
          setUniqueError(false)
        }
      })
  }

  const handleEditAuthor = (e) => {
    e.preventDefault()

    axios.put('http://localhost:8000/api/authors/edit/' + editAuthor._id, {
      name: authors
    })
      .then(res => {
        console.log(res)
        // setAuthor("")
        navigate('/')
      })
      .catch(err => {
        if (err.response.data.name === 'MongoError' && err.response.data.code === 11000) {
          setErrors("Author name must be unique")
          console.log(err.response.data.name);
          setUniqueError(true)
        } else {
          setErrors(err.response.data.errors)
          setUniqueError(false)
        }
      })
  }

  const handleCancel = () => {
    setAuthor("")
    setErrors([])
  }

  return (
    <div id="form-container">
      <h1 style={{margin: '20px auto'}}> Favorite Authors </h1>
      <Link to={'/'}> Home </Link>
      <fieldset style={{ border: "1px solid black", padding: '10px 30px 10px 30px'}}>
        {editAuthor ? <legend className="caption"> Edit this Author: </legend> : <legend className="caption"> Add a new Author: </legend>}
        <form onSubmit={editAuthor ? handleEditAuthor : addAuthor}>
          <div>
            <label style={{display:'block'}}> Name: </label>
            <input className='contentInput' type="text" onChange={(e) => setAuthor(e.target.value)} value={authors} />
            {isUniqueError ? <p className="error-style"> {errors}</p> : errors.name ? <p className="error-style"> {errors.name.message} </p> : null}
            {console.log(isUniqueError)}
          </div>
          <button className='cancel_submit' onClick={handleCancel}> Cancel </button>
          <input className='cancel_submit' type="submit" value="Submit" />
        </form>
      </fieldset>
    </div>
  )
}

export default AddEditAuthor;