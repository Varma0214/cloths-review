import React from "react";

function ComparePage({ products, onRemove, onView }) {
  if (products.length === 0) {
    return (
      <section className="compare-section" id="compare">
        <div className="empty-state">
          <h2>Compare Products</h2>
          <p>
            You haven't selected any products to compare yet. Add products
            using the Compare button in the collection.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="compare-section" id="compare">
      <div className="section-heading">
        <span className="eyebrow">MAKE YOUR CHOICE</span>
        <h2>Compare Products</h2>
        <p>Review your selected products side by side.</p>
      </div>

      <div className="compare-grid">
        {products.map((product) => (
          <article className="compare-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="compare-image"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x750?text=Image+Unavailable";
              }}
            />

            <span className="product-category">{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <div className="compare-highlights">
              <h4>Highlights</h4>
              {product.pros?.length ? (
                <ul>
                  {product.pros.map((pro, index) => (
                    <li key={`${product.id}-compare-${index}`}>{pro}</li>
                  ))}
                </ul>
              ) : (
                <p>No highlights available.</p>
              )}
            </div>

            <div className="compare-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => onView(product)}
              >
                Details
              </button>

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Original Listing ↗
              </a>

              <button
                type="button"
                className="remove-compare-button"
                onClick={() => onRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ComparePage;