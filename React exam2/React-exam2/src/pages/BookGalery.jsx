import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function BookGalery() {
  const [kitaptar, setKitaptar] = useState([]);

  useEffect(() => {
    axios
     .get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
     .then((response) => {
        setKitaptar(response.data);
        console.log(response.data);
      })
     .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="book-list">
        {kitaptar.length > 0? (
          kitaptar.map((kitap) => {
            return (
              <Link to={`/book/${kitap.id}`}>
                <div className="book-card"> 
                  <img src={kitap.image =="N/A"?  'https://img.freepik.com/free-vector/cinema-elements-set_74855-15362.jpg?semt=ais_hybrid'
                  :
                  kitap.image }
                   alt={kitap.title} />
                  <h3>{kitap.title}</h3>
                  <div>
                      <p>{kitap.author}</p>
                      
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>Book not found. Please try again.</p>
        )}
      </div>
    </div>
  );
}

export default BookGalery;        
    