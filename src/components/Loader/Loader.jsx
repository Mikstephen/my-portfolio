import "./Loader.css";
import logo from "../../assets/logodark.png";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">
        <img src={logo} alt="Stephen Lawal" />

        <h2>Stephen<span>.</span></h2>

        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;