import scss from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h5>Welcome</h5>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
