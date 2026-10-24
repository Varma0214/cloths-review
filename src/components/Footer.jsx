import React from "react";

export default function Footer({ setPage }) {
  const navigate = (page) => {
    if (setPage) {
      setPage(page);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <button
              className="footer-logo"
              onClick={() => navigate("home")}
              aria-label="ClothCheck home"
            >
              CLOTH<span>CHECK</span>
            </button>

            <p className="footer-tagline">
              Explore the details. Make your own call.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <button onClick={() => navigate("home")}>Home</button>
            <button onClick={() => navigate("products")}>
              Products
            </button>
            <button onClick={() => navigate("compare")}>
              Compare
            </button>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            ClothCheck is an independent product discovery website. Brand
            names belong to their respective owners. Product links lead to
            third-party listings.
          </p>

          <p className="footer-copyright">
            © {new Date().getFullYear()} ClothCheck
          </p>
        </div>
      </div>
    </footer>
  );
}