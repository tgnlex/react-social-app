import styles from "./page.module.css";
import Stats from '@/components/dashboard/stats';
import db from '@/data/users'
function Dashboard(props) {
  const user = db.find(1);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <div id="top-row" className="row">
          <div id="mini-profile">
          
          </div>
          <div id="content" className="column">
            <div id="write-post"></div>
            <div id="user-posts"></div>
          </div>
          <Stats className={'stats'} stats={user.stats} />
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
