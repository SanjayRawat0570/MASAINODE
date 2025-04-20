import PostList from "./components/postlist";

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Blog</h1>
      <PostList />
    </div>
  );
}

export default App;
