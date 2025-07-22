import styles from "@/styles/Products.module.css";

export default function ProductCard(data) {
  console.log(data.data.title);
  return (
    <>
      <div className={styles.productCard}>
        <img
          className={styles.productImage}
          src={data.data.image}
          alt={data.data.title || "Product image"}
        />
        <p className={styles.productText}> {data.data.title} </p>
      </div>
    </>
  );
}
