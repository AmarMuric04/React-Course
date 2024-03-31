function App() {
  return (
    <>
      <main id="quiz">
        <div id="question">
          <progress value={100} max={150} />
          <h1 id="question-overview">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            harum.
          </h1>
        </div>
        <menu id="answers">
          <div className="answer">
            <button>Lorem ipsum dolor sit amet.</button>
          </div>
          <div className="answer">
            <button className="selected">Lorem ipsum dolor sit amet.</button>
          </div>
          <div className="answer">
            <button>Lorem ipsum dolor sit amet.</button>
          </div>
          <div className="answer">
            <button>Lorem ipsum dolor sit amet.</button>
          </div>
        </menu>
      </main>
    </>
  );
}

export default App;
