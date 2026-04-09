import Welcome from '@/components/text/welcome';
import Login from '@/components/forms/login';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Welcome className={styles.welcome} />
        <Login className={styles.login} />
      </main>
    </div>
  );
}
