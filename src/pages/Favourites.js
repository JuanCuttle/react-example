import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  const favouritesContext = useContext(FavouritesContext);

  let content;

  if (favouritesContext.totalFavourites === 0) {
    content = <p>You haven't added any favourites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouritesContext.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
