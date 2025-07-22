import styles from "@/styles/Products.module.css";
import ProductCard from "./ProductCard";

export default function Products({ data }) {
  return (
    <div className={styles.mainDiv}>
      <h1> Produtos de API fictícia</h1>

      {data && data.map((item) => <ProductCard data={item}></ProductCard>)}
    </div>
  );
}
