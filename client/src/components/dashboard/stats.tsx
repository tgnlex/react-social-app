type StatsProps = { 
  stats?: {
    requests: number; 
    friends: number;
    posts: number;
  }
}

function Stats(props: StatsProps}) {
  const requests = stats.requests || 0;
const friends = stats.friends || 0;
  const posts = stats.posts || 0;
  return (
    <div id="stats">
      <p className="text">Requests<span className="count">{requests}</span></p>
      <p className="text">Friends<span className="count">{friends}</span></p>
      <p className="text">Posts<span className="count">{posts}</span></p>
    </div>
  );
}

export default Stats;
