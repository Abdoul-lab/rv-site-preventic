import React from "react";

const Document = () => {
  const documents = [
    {
      title: "Fiche d'adhésion (SST PME)",
      file: "assets/img/slide/Fiche d'adhésion (SST PME).pdf",
    },
    {
      title: "Fiche d'adhésion (CME PREVENTIC)",
      file: "assets/img/slide/Fiche d'adhésion (CME PREVENTIC).pdf",
    },
    {
      title: "FICHE D'INSCRIPTION AUX FORMATIONS",
      file: "assets/img/slide/FICHE D'INSCRIPTION AUX FORMATIONS (1).pdf",
    },
  ];

  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section
        id="breadcrumbs"
        className="breadcrumbs"
        style={{ backgroundColor: "#fff" }}
      >
        <div style={{ width: "100%" }}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ width: "100%", flexDirection: "column" }}
          >
            <img
              src="assets/img/slide/5.jpg"
              className="img-fluid"
              alt=""
              style={{ width: "30%" }}
            />
            <div
              className="container-fluid"
              style={{ backgroundColor: "#d94261", height: "15vh" }}
            >
              <div>
                <h2
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Documents utiles
                </h2>
              </div>
            </div>

            <div
              className="container about"
              id="about"
              style={{
                backgroundColor: "#fff",
                marginTop: "-2%",
                borderRadius: "15px",
              }}
            >
              {documents.map((doc, index) => (
                <div className="row content" key={index}>
                  <div className="col-lg-6">
                    <h1>{doc.title}</h1>
                    <a href={doc.file} download={doc.title}>
                      Télécharger le document
                    </a>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequa
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in
                      </li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumbs */}
    </main>
  );
};

export default Document;
