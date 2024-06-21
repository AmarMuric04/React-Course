import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are simply the best
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can't go wrong with us :D</p>
                <p>
                  Simply the best Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Quidem, ducimus!
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Highly experienced guides!
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Best guides and trips.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima cupiditate illum possimus dolores optio libero
                  laudantium eos, voluptas sed. Magnam.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
