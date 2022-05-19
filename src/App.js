function Food({ fav }) {
  console.log(fav);
  return <h3>{fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="sam" />
    </div>
  );
}

export default App;
