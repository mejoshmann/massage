import "./Home.scss";
import massage from "../../assets/images/back.webp";

function Home() {
  return (
    <>
      <div id="home" className="home">
        <div className="home__copy">
          <h2 className="home__copy--sub-heading">MOBILE MASSAGE IN SURREY</h2>
          <h1 className="home__copy--heading">Luxury Massage Experience</h1>
          <p className="home__copy--copy">
            Welcome to Relax Massage Surrey, your go-to mobile, at-home Massage
            Therapist.
          </p>
          <p className="home__copy--copy">
            Indulge in the ultimate relaxation and therapeutic benefits of
            professional massage therapy, all in the comfort of your own home,
            or at our serene Surrey location.
          </p>
          <p className="home__copy--copy">
            <a href="#contact" className="home__copy--link">
              Contact us
            </a>{" "}
            Our expert massage therapists specialize in a variety of
            techniques to help you relax, recover from injury, and enhance your
            mobility. Book your in-home massage therapy session today and
            discover why we are the top choice for mobile massage services in
            Surrey.
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
