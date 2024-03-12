import mainImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";

const reactDescriptions = ["boss", "npc", "lider"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const licnost = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={mainImage} alt="Stylized atom" />
      <h1>Murgin React Website</h1>
      <p>
        Sve sto treba da znate jeste da sam ja {licnost} i nemojte da mnjaucete
        laga
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function Main() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Vreme je da pocnemo!</h2>
        <ul>
          <CoreConcept
            title="Concepts"
            description="Counter Strike 2"
            image={componentsImage}
          />
          <CoreConcept
            title="Ferrari"
            description="Maximillian Robespierre"
            image={componentsImage}
          />
          <CoreConcept
            title="Lamborghini"
            description="Badass dog"
            image={componentsImage}
          />
          <CoreConcept
            title="Ford "
            description="Mustang goes wroom"
            image={componentsImage}
          />
        </ul>
      </section>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
