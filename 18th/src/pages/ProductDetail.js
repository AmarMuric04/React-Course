import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const product = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{product.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetail;
