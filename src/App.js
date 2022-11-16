import { MovieHero, PageLoader } from "components/molecules";
import { Modal, Navbar, ListMovies } from "components/organisms";
import Context from "context";
import Theme from "./theme"

function App() {
  return (
    <Context>
      <Theme>
        <PageLoader/>
        <Navbar />
        <MovieHero />
        <ListMovies />
        <Modal />
      </Theme>
    </Context>
  );
}

export default App;
