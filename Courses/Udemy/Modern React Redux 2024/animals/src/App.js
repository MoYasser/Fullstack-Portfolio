const App = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
    </div>
  );
};

export default App;
