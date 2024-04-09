import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ picture, id }: { picture: string; id: number }) {
  return (
    <Card className="mb-4 card-effect card-hover">
      <Link to={`./details/${id}`}>
        <Card.Img variant="top" src={picture} />
      </Link>
    </Card>
  );
}

export default MovieCard;
