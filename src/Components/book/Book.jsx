import React from "react";
import book from "../../assets/images/book.jpg";
import "./book.scss";
import { motion } from "framer-motion";

const Book = () => {
  return (
    <div id="book" className="mt-5 text-center">
      <h2>Resource Recycling</h2>
      <p>
        Production and maintenance of scarce resources consumes resources and{" "}
        <br />
        money Combat and labor deplete basic resources Taxes arising from any
        transaction
      </p>
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "smooth", delay: 0.1, duration: 0.5 }}
        id="theBookContainer"
      >
        <img
          className="mt-5"
          id="theBook"
          src={book}
          alt=""
          style={{ borderRadius: 24 }}
        />
      </motion.div>
    </div>
  );
};

export default Book;
