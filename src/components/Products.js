import styles from "@/styles/Products.module.css";
import ProductCard from "./ProductCard";

export default function Products({ data }) {
  console.log(data);
  return (
    <>
      <h1> Produtos de API fictícia</h1>

      {data && data.map((item) => <ProductCard data={item}></ProductCard>)}
    </>
  );
}
