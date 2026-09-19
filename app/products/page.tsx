import { cache } from "next/dist/server/use-cache/use-cache-wrapper";
import Products from "../components/Products";

//Fetching data:
const getProducts = async () => {
  const res = await fetch("http://localhost:3001/products");
//   const res = await fetch("http://localhost:3001/products", { cache: "force-cache" });
//   const res = await fetch("http://localhost:3001/products", { cache: "no-store" });
  return res.json();
};

const page = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>Products: {products.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default page;
