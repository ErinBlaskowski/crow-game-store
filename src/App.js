import './App.css';
import test from ".components/test";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <h1>HIIIIIII</h1>
      <h2>This here is a custom message! Yeehaw.</h2>
      <h3>Did you know that fennec foxes burrow underground to stay cool in the desert? They're nocturnal because it's too hot to hunt during the daytime!</h3>
      <test />
    </BrowserRouter>
  );
}

export default App;
