import React from 'react';

const Team = () => {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Notre Equipe</h2>
            <ol>
              <li><a href="index.html">Accueil</a></li>
              <li>Notre Equipe</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End Breadcrumbs */}

      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="src/assets/img/team/team-1.jpg" className="img-fluid" alt="Walter White" />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat</p>
                  <div className="social">
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="src/assets/img/team/team-2.jpg" className="img-fluid" alt="Sarah Jhonson" />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Aut maiores voluptates amet et quis</p>
                  <div className="social">
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="src/assets/img/team/team-3.jpg" className="img-fluid" alt="William Anderson" />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Quisquam facilis cum velit laborum corrupti</p>
                  <div className="social">
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="src/assets/img/team/team-4.jpg" className="img-fluid" alt="Amanda Jepson" />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Dolorum tempora officiis odit laborum officiis</p>
                  <div className="social">
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* End Team Section */}
    </main>
  );
}

export default Team;
