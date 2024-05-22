import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
