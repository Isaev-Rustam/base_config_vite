import './App.css';

function App() {
  const handlerBnt = () => console.log('btn');
  return (
    <>
      <button type="button" onClick={handlerBnt}>
        btn
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
