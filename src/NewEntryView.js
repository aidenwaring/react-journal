import React from 'react'

export default function NewEntryView(props) {
  //
  const { cat_id } = props.match.params
  return (
    <div>
      <h1>New Entry</h1>
      <h5>Category: {props.match.params.cat_id}</h5>
    </div>
  )
}
