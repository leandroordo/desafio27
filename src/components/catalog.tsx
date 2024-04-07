import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./movieCard";
import { useEffect, useState } from "react";
import movieService from "../lib/movieService";
import { MovieResponse } from "../lib/api/movieResponse";

function Catalog() {
  const [movies, setMovies] = useState<MovieResponse[] | null>();

  useEffect(() => {
    async function getData() {
      const result = await movieService.getMovies();
      setMovies(result);
    }

    if (!movies) getData();
  }, [movies]);

  return (
    <Container>
      <h1>Nuestro catálogo de películas</h1>
      <Row lg={3} md={2} sm={2} xs={1}>
        {movies &&
          movies.map((movie) => (
            <Col className="d-flex" key={movie.id}>
              <MovieCard {...movie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Catalog;
