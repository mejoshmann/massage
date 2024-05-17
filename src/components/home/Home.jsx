import "./Home.scss";
import massage from "../../assets/images/back.webp";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__copy">
          <h2 className="home__copy--sub-heading">MOBILE MASSAGE IN SURREY</h2>
          <h1 className="home__copy--heading">Luxury Massage Experience</h1>
          <p className="home__copy--copy">
            Welcome to Relax Massage Surrey, your go-to mobile, at-home Massage
            Therapist. Experience ultimate relaxation and the therapeutic
            benefits of professional massage therapy right in the comfort of
            your home. Get in touch with us and discover the ease and
            convenience of mobile massage. Whether you want to improve your
            mobility, address an injury, or relax and pamper yourself, Relax
            Massage Surrey can help.{" "}
          </p>
        </div>
        <img
          src={massage}
          alt="Woman being massaged"
          className="home__images"
        />
      </div>
    </>
  );
}

export default Home;
