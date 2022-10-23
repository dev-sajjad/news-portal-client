import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
  const {
    total_view,
    thumbnail_url,
    title,
    details,
    rating,
    image_url,
    author,
    _id,
  } = news;

  return (
    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center' as="h5">
        <div className="d-flex">
                  <Image
                      className="me-2"
            src={author?.img}
            roundedCircle
            style={{ height: "70px" }}
          ></Image>
          <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details?.length > 250 ? (
            <>
              {" "}
              <p>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            </>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;
