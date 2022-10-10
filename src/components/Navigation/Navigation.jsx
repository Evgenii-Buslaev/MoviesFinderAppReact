import NavBar from "../NavBar/NavBar";
import NavBarMob from "../NavBarMob/NavBarMob";
import OptionsBar from "../OptionsBar/OptionsBar";

function Navigation({ changeCategory, screen }) {
  return screen > 800 ? (
    <NavBar change={changeCategory} />
  ) : (
    <>
      <NavBarMob />
      <OptionsBar change={changeCategory} />
    </>
  );
}

export default Navigation;
