import "./index.css";

const Footer = () => (
  <div className="footer__wrap">
    <div>本页为转载，原版链接：</div>
    <a
      href="https://github.com/hello-nav/hello-nav"
      className="logo vertical-center"
      target="_blank"
    >
      hello-nav github
    </a>
    <div className="footer__copyright">
      <span className="vertical-center">
        Made by
        <a
          className="bener-link"
          href="https://github.com/Heroor"
          target="_blank"
        >
          <b> Bener </b>
        </a>
        with
        <span className="heart"> ❤</span>
      </span>
      <p>
        &copy;2018-
        {new Date().getFullYear()}
      </p>
    </div>
  </div>
);

export default Footer;
