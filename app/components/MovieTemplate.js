import React from 'react'
import {Movies} from '../sample-data'
import MovieInfo from './MovieInfo'
//import {Movies} from './FetchMovieInfo'

export default class MovieTemplate extends React.Component {
	constructor(props) {
        super(props)
	}

	render() {
        console.log(Movies)
		return (
			<section className="movieTemplate text-center">
				<div className="container">
                    <div className="upperContainer">
                        <div className="lead text-muted">
                            <h2>React & Redux</h2>
                            <h5>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                        </div>
                    </div>
                    <div className="lowerContainer">
                        <h2>Movies</h2>
                        <div className="MovieList">
                        {
                            Movies.map((movie, i)=>{
                                console.log("in movielist")
                                return <MovieInfo key={i} movie={movie} />
                            })
                        }
                        </div>
                    </div>
				</div>
			</section>
		)
    }
}
