//Fetching data:
const getProducts = async () => {
  const res = await fetch("http://localhost:3001/products");
  return res.json();
};

const page = async () => {
  const products = await getProducts();
  return <div>
    
  </div>;
};

export default page;
