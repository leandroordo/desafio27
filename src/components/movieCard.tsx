import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ picture }: { picture: string }) {
  return (
    <Card className="mb-4 card-effect card-hover">
      <Link to={"./details"}>
        <Card.Img variant="top" src={picture} />
      </Link>
    </Card>
  );
}

export default MovieCard;
