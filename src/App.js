import { Layout } from "./Component/Layout/Layout";
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className  ="App">
      <Layout/>
    </div>
    </Router>
  );
}



export default App;
