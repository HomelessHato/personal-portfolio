import "./productList.css";
import Product from "../product/product.jsx";
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          This is a collection of the projects that I have been working on
          either through my Thinkful Software Engineering Bootcamp, or personal
          project that have been completed.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
