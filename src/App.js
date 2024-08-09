import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${page}`);
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <>
      <div className="hello_div_one">
        {products &&
          products.map((item) => {
            return (
              <span className="hello_div_two" key={item.id}>
                <img src={item.thumbnail} />
                <span>{item.title}</span>
              </span>
            );
          })}
      </div>

      <div className="pageNumber_div">
        <span>prev</span>
        <span onClick={() => setPage(1)}>1</span>
        <span onClick={() => setPage(2)}>2</span>
        <span onClick={() => setPage(3)}>3</span>
        <span>next</span>
      </div>
    </>
  );
}

export default App;
