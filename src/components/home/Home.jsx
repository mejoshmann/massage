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
            Therapist.
          </p>
          <p className="home__copy--copy">
            Indulge in the ultimate relaxation and therapeutic benefits of
            professional massage therapy, all in the comfort of your own home.
          </p>
          <p className="home__copy--copy">
            <a href="#" className="home__copy--link">
              Contact us
            </a>{" "}
            to experience the ease and convenience of mobile massage. Whether
            you're looking to enhance your mobility, address an injury, or
            simply relax and pamper yourself, Relax Massage Surrey is here to
            help.{" "}
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
