import React from "react";
import book from "../../assets/images/book.webp";
import "./book.scss";

const Book = () => {
  return (
    <div id="book" className="mt-5 text-center">
      <h2>The Crabada NFT</h2>
      <p>
        Each Crabada has unique strengths and skillsets which are inherited
        through breeding. <br />
        Breed from 8 classes of Crabada, 64 unique Breed Types, and infinite
        possibilities!
      </p>
      <div id="theBookContainer">
        <img className="mt-5" id="theBook" src={book} alt="" />
      </div>
    </div>
  );
};

export default Book;
