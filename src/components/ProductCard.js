import styles from "@/styles/Products.module.css";

export default function ProductCard(data) {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.cardBar}>
          <h2> {data.data.title}</h2>
        </div>
        <div className={styles.internalContent}>
          <img
            className={styles.productImage}
            src={data.data.image}
            alt={data.data.title || "Product image"}
          />
          <div className={styles.productInfo}>
            <p className={styles.productPrice}>R$ {data.data.price}</p>
            <p className={styles.productDescription}>{data.data.description}</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
