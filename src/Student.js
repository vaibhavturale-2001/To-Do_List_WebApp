import React from 'react'

const Student = (props) => {
  return (
    <div>
        <p>StudentList</p>
        <h1> My name is {props.name} </h1>
        <p>My last_name is {props.surname}</p>
        <h2>My College name is {props.college}</h2>
    </div>
  )
}
export default Student