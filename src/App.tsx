import './styles/app.scss'
import Dropdown from "./components/Dropdown/Dropdown";
import data from './data/mockdata.json';

const App = () => (
  <>
    <Dropdown placeholder="Choose an animal" data={data} />
  </>
);

export default App;
