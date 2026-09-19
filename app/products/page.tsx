import Products from "../components/Products";

//Fetching data:
const getProducts = async () => {
  const res = await fetch("http://localhost:3001/products");
  return res.json();
};

const page = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>Products: {products.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        <Products key={products.id} products={products}></Products>
      </div>
    </div>
  );
};

export default page;
