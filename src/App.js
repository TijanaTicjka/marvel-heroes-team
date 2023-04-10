import { Layout } from './components/Layout/Layout';
import { Routes, Route } from "react-router";
import { MainContent } from './components/MainContent/MainContent';
import { SingleCharacter } from './components/SingleCharacter/SingleCharacter';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route path={'/'} element={<MainContent/>}/>
        <Route path={'characters/:id'} element={<SingleCharacter/>}/>
      </Route>
    </Routes>
  )
}

export default App;
