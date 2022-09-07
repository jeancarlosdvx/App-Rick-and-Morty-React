import { Navbar } from "./Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { Charaters } from "./Charaters";
import { Paginacion } from "./Paginacion";

function App() {
  const [character, setCharater] = useState([]);

  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";
  const fetchCharaters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharater(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.error(error));
  };

  const onPrevious = () => {
    fetchCharaters(info.prev);
  };

  const onNext = () => {
    fetchCharaters(info.next);
  };

  useEffect(() => {
    fetchCharaters(url);
  }, []);

  return (
    <>
      <Navbar />
      <Paginacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Charaters charaters={character} />
      <Paginacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}

export default App;
