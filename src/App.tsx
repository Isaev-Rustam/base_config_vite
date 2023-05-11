import './App.css';

function App() {
  const handlerBnt = () => console.log('btn');
  return (
    <>
      <button type="button" onClick={handlerBnt}>
        btn
      </button>
      <p className="read-the-docs">Click</p>
    </>
  );
}

export default App;
