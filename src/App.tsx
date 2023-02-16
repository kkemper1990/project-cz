import './styles/app.scss'
import Dropdown from "./components/Dropdown/Dropdown";
import data from './data/mockdata.json';

const App = () => (  
  <>
    <Dropdown placeholder="Choose an animal" options={data} value={data[1]} onChange={(e:any) => console.log(e)} />
  </>
);

export default App;
