import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import movieService from "../lib/movieService";
import { MovieResponse } from "../lib/api/movieResponse";

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieResponse | null>();

  useEffect(() => {
    async function getMovieData(id: number) {
      const result = await movieService.getMovieById(id);
      setMovie(result);
    }

    if (movieId) {
      const id: number = Number.parseInt(movieId);
      if (id) getMovieData(id);
    }
  }, [movieId]);

  return (
    <Container className="py-5 h-100">
      <Row className="justify-content-center align-items-center">
        <Col md="10" lg="8" xl="6">
          <Card className="rounded-2 shadow">
            <Card.Header className="p-4 fs-3 fw-bold bg-black text-red">
              {movie?.name}
            </Card.Header>
            <Card.Body className="p-4">
              <Card.Img variant="top" src={movie?.picture} />
              <p className="fw-medium fs-small">
                Duración:
                <span className="fw-light"> {movie?.duration}</span>
              </p>
              <Badge bg="info py-2">{movie?.genre}</Badge>

              {/* <p className="fw-medium fs-small">
                Género:
                <span className="fw-light"> {movie?.genre}</span>
              </p> */}
              <div>{movie?.synopsis}</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
