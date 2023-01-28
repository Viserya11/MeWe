import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Jumbo() {
  return (
    <Jumbotron id="jumbotron">
      <h1>Hello, world!</h1>
      <div className="d-flex">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia
          reprehenderit nisi dignissimos quibusdam, accusamus doloribus
          architecto perferendis tenetur sint maxime rem magni exercitationem
          deserunt voluptates ipsa quisquam nihil iusto!
        </p>
        <p>
          <img src="" alt="img" />
        </p>
      </div>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}
