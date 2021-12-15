import React,{useState, useEffect, useRef} from 'react';

// import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){

	// const movies = [
	// 	{
	// 		"Title": "Parchís",
	// 		"Year": "1983",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Brigada en acción",
	// 		"Year": "1977",
	// 		"Poster": "N/A"
	// 	},
	// ];

	const [movies, setMovies] = useState([]);
	const [keyword, setKeyWord] = useState('Mickey');

	useEffect( () => {
		fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + "&s=" + keyword)
		.then(result => result.json())
		.then(data => {
			setMovies(data.Search);
		}) 
	},[keyword])

	// const keyword = '';

	const title = useRef();//Para acceder usamos title.current

	const searchMovie = async e => {
		e.preventDefault(e);
		const titleMovie = title.current.value;
		setKeyWord(titleMovie);
		title.current.value = '';
	}

	// Credenciales de API
	const apiKey = '1e0d5e6'; // Intenta poner cualquier cosa antes para probar

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchMovie}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={title} type="text" className="form-control" />
								</div>
								<button type="submit" className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
