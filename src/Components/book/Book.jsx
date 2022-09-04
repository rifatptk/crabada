import React from "react";
import book from "../../assets/images/book.webp";
import "./book.scss";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "smooth", delay: 0.1, duration: 0.5 }}
        id="theBookContainer"
      >
        <img className="mt-5" id="theBook" src={book} alt="" />
      </motion.div>
    </div>
  );
};

export default Book;
