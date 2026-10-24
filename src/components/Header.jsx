
import React from "react";

export default function Header({ page, setPage, compareCount = 0 }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand */}
        <button
          type="button"
          className="brand"
          onClick={() => setPage("home")}
          aria-label="ClothCheck home"
        >
          <span className="brand-name">
            CLOTH<span className="brand-highlight">CHECK</span>
          </span>

          <span className="brand-tagline">
            REAL FINDS. BETTER FITS.
          </span>
        </button>

        {/* Navigation */}
        <nav className="navigation" aria-label="Main navigation">
          <button
            type="button"
            className={page === "home" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("home")}
            aria-current={page === "home" ? "page" : undefined}
          >
            Home
          </button>

          <button
            type="button"
            className={page === "products" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("products")}
            aria-current={page === "products" ? "page" : undefined}
          >
            All products
          </button>

          <button
            type="button"
            className={page === "compare" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("compare")}
            aria-current={page === "compare" ? "page" : undefined}
          >
            Compare

            {compareCount > 0 && (
              <span className="nav-count">{compareCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
