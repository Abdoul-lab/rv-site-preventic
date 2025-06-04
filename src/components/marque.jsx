import React from "react";
import logoStrip from "../assets/img/slide/logo-partners.svg"; // ton SVG avec tous les logos

function LogoMarquee() {
  return (
    <div style={{ backgroundColor: "#fff", padding: "40px 0" }}>
      
      <div className="multi-line-marquee">
        {[0, 1].map((i) => (
          <div className="logo-marquee-container" key={i}>
            <div
              className={`logo-marquee-track ${i === 1 ? "reverse" : ""}`}
              style={{ animationDelay: `${i * 2}s` }}
            >
              <img src={logoStrip} alt="Logos partenaires" className="logo-strip" />
              <img src={logoStrip} alt="Logos partenaires" className="logo-strip" />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .multi-line-marquee {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .logo-marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .logo-marquee-track {
          display: flex;
          animation: scroll-left 25s linear infinite;
        }

        .logo-marquee-track.reverse {
          animation: scroll-right 25s linear infinite;
        }

        .logo-strip {
          height: 36px;
          margin-right: 50px;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .logo-strip {
            height: 28px;
            margin-right: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;
