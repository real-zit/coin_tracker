import styles from "./coin.module.css";
const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  image,
  priceChange,
  id,
  volume,
}) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coin_img} />
          <h1 className={styles.coin_h1}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>{price.toLocaleString("en-IN")}</p>
          <p className={styles.coin_volume}>{volume.toLocaleString("en-IN")}</p>
          {priceChange < 0 ? (
            <p className={(styles.coin_percent, styles.red)}>
              {" "}
              {priceChange.toFixed(2)}{" "}
            </p>
          ) : (
            <p className={(styles.coin_percent, styles.green)}>
              {priceChange.toFixed(2)}
            </p>
          )}
          <p className={styles.coin_marketcap}>
            {marketcap.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
