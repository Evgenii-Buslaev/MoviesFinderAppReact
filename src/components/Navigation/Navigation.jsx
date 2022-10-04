import NavBar from "../NavBar/NavBar";
import NavBarMob from "../NavBarMob/NavBarMob";
import OptionsBar from "../OptionsBar/OptionsBar";

function Navigation({ screen }) {
  return screen > 800 ? (
    <NavBar />
  ) : (
    <>
      <NavBarMob />
      <OptionsBar />
    </>
  );
}

export default Navigation;
