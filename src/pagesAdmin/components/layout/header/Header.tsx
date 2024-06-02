import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h3>Header</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
