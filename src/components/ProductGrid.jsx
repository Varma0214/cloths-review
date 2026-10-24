import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  onView,
  savedProducts,
  onToggleSave,
  comparedProducts,
  onToggleCompare,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const categories = useMemo(
    () => ["All", ...new Set(products.map((product) => product.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const searchTerm = search.trim().toLowerCase();

    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (showSavedOnly) {
      result = result.filter((product) =>
        savedProducts.includes(product.id)
      );
    }

    if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "category") {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [
    products,
    search,
    category,
    sortBy,
    showSavedOnly,
    savedProducts,
  ]);

  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <span className="eyebrow">THE COLLECTION</span>
        <h2>Find your next favorite</h2>
        <p>Explore products, save your favorites, and compare your picks.</p>
      </div>

      <div className="product-toolbar">
        <input
          type="search"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "All" ? "All Categories" : item}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort products"
        >
          <option value="default">Default Order</option>
          <option value="name-asc">Name: A–Z</option>
          <option value="name-desc">Name: Z–A</option>
          <option value="category">Category</option>
        </select>

        <button
          type="button"
          className={`saved-filter ${showSavedOnly ? "active" : ""}`}
          onClick={() => setShowSavedOnly((previous) => !previous)}
        >
          {showSavedOnly ? "♥ Saved Only" : "♡ Saved"}
        </button>
      </div>

      <div className="results-count">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={onView}
              isSaved={savedProducts.includes(product.id)}
              onToggleSave={onToggleSave}
              isCompared={comparedProducts.includes(product.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try another search or change your filters.</p>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setSortBy("default");
              setShowSavedOnly(false);
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;