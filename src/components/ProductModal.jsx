import React, { useEffect } from "react";

function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="modal-content">
          <div className="modal-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="modal-image"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x750?text=Image+Unavailable";
              }}
            />
          </div>

          <div className="modal-details">
            <span className="eyebrow">{product.category}</span>

            <h2 id="modal-product-title">{product.name}</h2>

            <p className="modal-description">{product.description}</p>

            <div className="pros-section">
              <h3>Highlights</h3>

              {product.pros?.length > 0 ? (
                <ul>
                  {product.pros.map((pro, index) => (
                    <li key={`${product.id}-pro-${index}`}>
                      <span aria-hidden="true">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No highlights have been added yet.</p>
              )}
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button external-product-link"
            >
              View Original Listing ↗
            </a>

            <p className="external-link-note">
              You will be redirected to the third-party product listing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;