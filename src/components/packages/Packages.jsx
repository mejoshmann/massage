import "./Packages.scss";

function Packages() {
  return (
    <>
      <div id="services" className="pack">
        <h3 className="pack__sub-heading">PRICING</h3>
        <h2 className="pack__heading">Our Massage Therapy Packages</h2>
        <div className="pack__cards">
          <div className="pack__cards--card">
            <h3 className="pack__cards--mins">60 Minute Masage</h3>
            <div className="pack__cards--container">
              <h3 className="pack__cards--price">$65</h3>
              <p className="pack__cards--copy">Targeted relief for specific areas of tension.</p>
              <p className="pack__cards--copy">Introductory massage experience, understand its benefits.</p>
              <p className="pack__cards--copy">No hidden fees, no transport costs.</p>
              <button className="pack__cards--book">
                Book A 60 Minute Massage
              </button>
            </div>
          </div>

          <div className="pack__cards--card">
            <h3 className="pack__cards--mins">90 Minute Massage</h3>
            <div className="pack__cards--container">
              <h3 className="pack__cards--price">$85</h3>
              <p className="pack__cards--copy">Enhanced focus on relaxation techniques.</p>
              <p className="pack__cards--copy">More comprehensive coverage for multiple tension areas.</p>
              <p className="pack__cards--copy">No hidden fees, no transport costs.</p>
              <button className="pack__cards--book">
                Book A 90 Minute Massage
              </button>
            </div>
          </div>

          <div className="pack__cards--card">
            <h3 className="pack__cards--mins">2 Hour Massage</h3>
            <div className="pack__cards--container">
              <h3 className="pack__cards--price">$115</h3>
              <p className="pack__cards--copy">Deeper relaxation of both the body and mind.</p>
              <p className="pack__cards--copy">Longer lasting benefits from pain and tension.</p>
              <p className="pack__cards--copy">No hidden fees, no transport costs.</p>
              <button className="pack__cards--book">
                Book A 2 Hour Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
