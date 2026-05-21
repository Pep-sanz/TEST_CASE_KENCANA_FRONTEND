import Image from "next/image";
import styles from "./page.module.css";

const images = [
  {
    id: 1,
    title: "Mountain View",
    author: "Rahman Studio",
    image:
      "https://plus.unsplash.com/premium_photo-1676571232331-787a2c679aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW91bnRhaW4lMjBWaWV3fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Ocean Breeze",
    author: "Rahman Studio",
    image:
      "https://plus.unsplash.com/premium_photo-1667149988137-e53dcafd38e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8T2NlYW4lMjBCcmVlemV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "City Lights",
    author: "Rahman Studio",
    image:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2l0eSUyMExpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Forest Path",
    author: "Rahman Studio",
    image:
      "https://plus.unsplash.com/premium_photo-1665311552973-53cdaeaa52c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9yZXN0JTIwUGF0aHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default async function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroChip}>Gallery</div>
        <h1 className={styles.heroTitle}>Discover Beautiful Moments</h1>
        <p className={styles.heroDesc}>
          Explore curated gallery collections with modern UI design.
        </p>
      </div>

      <div className={styles.grid}>
        {images.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.author}>By {item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
