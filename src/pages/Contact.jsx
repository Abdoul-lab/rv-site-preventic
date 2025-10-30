import React from 'react';

const Contact = () => {
  const sectionContainerStyle = {
    backgroundColor: '#fff',
    marginTop: '-2%',
    borderRadius: '15px',
    padding: '20px'
  };

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: '#fff' }}>
        <div style={{ width: '100%' }}>
          <div className="d-flex justify-content-between align-items-center flex-column" style={{ width: '100%' }}>
            {/* <img
              src=""
              className="img-fluid"
              alt=""
              style={{ width: '30%' }}
            /> */}
            <div
  className="container-fluid"
  style={{
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // palette bleu → bleu foncé → orange
    height: "15vh",
  }}
>
  <div>
    <h2
      style={{
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        marginTop: "25px",
      }}
    >
      CONTACTEZ-NOUS
    </h2>
  </div>
</div>


            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <iframe
                    style={{ border: 0, width: '100%', height: '270px' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.7695385589946!2d-4.0025275262774604!3d5.2986168361868415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebe2643863db%3A0x4516aeaa1002278b!2sAIBEF!5e0!3m2!1sfr!2sci!4v1749640033127!5m2!1sfr!2sci"
                    frameBorder="0"
                    allowFullScreen
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>Abidjan Treichville, zone 3 Immeuble AIBEF</p>
                    </div>

                    <div className="email">
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p> info@preventic-afric.com</p>
                    </div>

                    <div className="phone">
                      <i className="bi bi-phone"></i>
                      <h4>Tél:</h4>
                      <p>25 21 00 63 22</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 mt-5 mt-lg-0">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom  ou celui de Votre entreprise" required />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" required />
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" rows="5" placeholder="Veuillez saisir votre message ici" required></textarea>
                    </div>
                    
                    <div className="text-center"><button
  type="submit"
  style={{
    padding: "12px 28px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // dégradé bleu → bleu foncé → orange
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  Envoyer un message
</button>
</div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
