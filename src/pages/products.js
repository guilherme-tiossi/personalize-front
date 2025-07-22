import Products from "@/components/Products";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { data } };
}

export default function ProductPage({ data }) {
  return <Products data={data}></Products>;
}
