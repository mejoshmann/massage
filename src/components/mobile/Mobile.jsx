import './Mobile.scss';
import car from "../../assets/icons/car.png";
import lotus from "../../assets/icons/lotus.png";
import time from "../../assets/icons/clock.png";
import health from "../../assets/icons/health.png";

function Mobile() {
  return (
    <>
      <div className="mobile">
        <h2 className="mobile__heading">Why Choose Mobile Massage?</h2>

        <div className="mobile__cards">
          <div className="mobile__card">
            <img src={car} alt="Car Icon" className="mobile__card--icon" />
            <h3 className="mobile__card--heading">Skip the Commute!</h3>
            <p className="mobile__card--copy">
              Experience top-tier massage therapy in the comfort of your own
              home, saving you time and avoiding the hassle of traffic!
            </p>
          </div>
          <div className="mobile__card">
            <img src={lotus} alt="Lotus leaf Icon" className="mobile__card--icon" />
            <h3 className="mobile__card--heading">Your Oasis At Home</h3>
            <p className="mobile__card--copy">
              Experience therapeutic massage in a familiar, personalized
              setting, where you can fully relax and unwind
            </p>
          </div>
          <div className="mobile__card">
            <img src={time} alt="Clock Icon" className="mobile__card--icon" />
            <h3 className="mobile__card--heading">Your Time, Your Comfort</h3>
            <p className="mobile__card--copy">
              Book your sessions at your convenience, whether you prefer
              mornings or evenings. Enjoy the flexibility to choose the perfect
              time that fits your schedule and lifestyle.
            </p>
          </div>
          <div className="mobile__card">
            <img src={health} alt="Health Icon" className="mobile__card--icon" />
            <h3 className="mobile__card--heading">Health Benefits</h3>
            <p className="mobile__card--copy">
              Regular massage therapy can improve circulation, enhance lymphatic
              drainage, reduce muscle tension, and promote better sleep. In-home
              sessions make it easier to maintain a consistent schedule.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
