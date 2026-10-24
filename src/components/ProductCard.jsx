import React from "react";

function ProductCard({
  product,
  onView,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare,
}) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x750?text=Image+Unavailable";
          }}
        />

        <span className="product-category">{product.category}</span>

        <button
          type="button"
          className={`save-button ${isSaved ? "saved" : ""}`}
          onClick={() => onToggleSave(product.id)}
          aria-label={isSaved ? "Remove from saved" : "Save product"}
          title={isSaved ? "Remove from saved" : "Save product"}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onView(product)}
          >
            View Details
          </button>

          <button
            type="button"
            className={`compare-button ${isCompared ? "active" : ""}`}
            onClick={() => onToggleCompare(product.id)}
          >
            {isCompared ? "✓ Compared" : "+ Compare"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;