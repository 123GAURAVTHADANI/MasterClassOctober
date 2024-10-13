import Card from "../Card/Card";
import "../../index.css";
import { useEffect, useState } from "react";

function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="main__container">
      <h2>What’s Hot</h2>
      <div className="main__section">
        {products &&
          products.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </div>
  );
}
export default Main;
