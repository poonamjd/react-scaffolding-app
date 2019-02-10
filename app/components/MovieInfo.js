import React from 'react'
export default function MovieInfo(props) {
    console.log("here")
    return (
        <div className="MovieInfo">
            <div className="MovieInfo-title">
                {props.movie.Title}
            </div>
            <div className="MovieInfo-year">
                {props.movie.Year}
            </div>
            <div className="MovieInfo-type">
                {props.movie.Type}
            </div>
        </div>
    )
  }