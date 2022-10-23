import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideBar = () => {
  const { providerLogin, setUser } = useContext(AuthContext);
  const providerGoogle = new GoogleAuthProvider();

  const handleGoogle = () => {
    providerLogin(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="position-fixed overflow-hidden">
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogle}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login via Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login via Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2" action href="#facebook">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border" action href="#linkedin">
            <FaLinkedin></FaLinkedin> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border" action href="#twitter">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border" action href="#whatsapp">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border" action href="#terms">
            Terms and Conditions
          </ListGroup.Item>
        </ListGroup>
      </div>
      <>
        <BrandCarousel></BrandCarousel>
      </>
    </div>
  );
};

export default RightSideBar;
