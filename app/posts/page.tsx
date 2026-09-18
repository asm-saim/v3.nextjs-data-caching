/**
 * GET
 * POST
 * UPDATE
 * DELETE
 */

//Fetching data: process 1 (recommended) we can reuse it 
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

//Fetching data: process 3 !ok
const getPosts3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
};

//Fetching data: process 2 try , catch
const getPosts2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

const Page = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();

  const postsData = await getPosts();

  return (
    <div>
      <h1>Total Data: {postsData.length}</h1>
    </div>
  );
};

export default Page;
