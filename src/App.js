import { Container } from "./Container";
import { hello } from "./utils";

const App = () => {
  hello();

  return (
    <Container>
      <h1>Hello World!</h1>
      <p>Don't panic it's just a simple test.</p>
    </Container>
  );
};

export default App;
