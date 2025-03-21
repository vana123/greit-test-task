import { useEffect } from "react";
import getData from "./utils/getData";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  useEffect(() => {
    const currentPage = 1;
    getData(currentPage).then((data) => console.log(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
        </header>
        <Layout />
      </div>

    </>
  );
}

export default App;
