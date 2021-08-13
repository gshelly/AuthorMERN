import DisplayAuthors from '../Components/DisplayAuthors';
import React, {useEffect, useState } from 'react';

const Main = (props) => {
  const [editAuthor, setEditAuthor ] = useState("")
  

  useEffect(() => {
    props.setEditAuthor(editAuthor)
  })

  return (
    <div>
      <DisplayAuthors setEditAuthor={setEditAuthor} />
    </div>
  )
}

export default Main;