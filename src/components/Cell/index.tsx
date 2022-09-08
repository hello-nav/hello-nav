import "./index.css";
import gitHubIcon from "../../assets/images/github.png";

function onCornerClick(e: React.SyntheticEvent, repository: string) {
  e.preventDefault();
  window.open(repository);
  return false;
}

function getImgSrc(fileName: string): string {
  return new URL(`../../assets/icons/${fileName}`, import.meta.url).href;
}

const Cell = ({ homepage, icon, repository, name, darkInvert }: AppItem) => (
  <li className="cell">
    <a className="app" href={homepage} title={name} target="_blank">
      <div className="img-box">
        <img
          src={getImgSrc(icon)}
          className={darkInvert ? "dark-invert" : ""}
          alt={name}
        />
      </div>
      <p className="title">{name}</p>
      {repository && (
        <div
          onKeyDown={() => {}}
          onClick={(e) => onCornerClick(e, repository)}
          className="corner"
        >
          <div className="corner-icon-wrap">
            <img
              className="corner-icon"
              draggable={false}
              src={gitHubIcon}
              alt=""
            />
          </div>
        </div>
      )}
    </a>
  </li>
);

export default Cell;
