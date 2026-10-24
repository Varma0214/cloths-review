
import React, { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import ComparePage from "./components/ComparePage";
import Footer from "./components/Footer";

import { products } from "./data/products";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);

  // Save or unsave a product
  const toggleSaved = (productId) => {
    setSavedProducts((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  // Add or remove products from comparison
  const toggleCompared = (productId) => {
    setComparedProducts((previous) => {
      if (previous.includes(productId)) {
        return previous.filter((id) => id !== productId);
      }

      if (previous.length >= 4) {
        window.alert("You can compare up to 4 products at a time.");
        return previous;
      }

      return [...previous, productId];
    });
  };

  // Products selected for comparison
  const selectedForComparison = products.filter((product) =>
    comparedProducts.includes(product.id)
  );

  // Navigate between pages
  const navigateTo = (page) => {
    setActivePage(page);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <Header
        page={activePage}
        setPage={navigateTo}
        compareCount={comparedProducts.length}
      />

      <main>
        {/* Home page */}
        {activePage === "home" && (
          <>
            <Hero onExplore={() => navigateTo("products")} />

            <ProductGrid
              products={products}
              onView={setSelectedProduct}
              savedProducts={savedProducts}
              onToggleSave={toggleSaved}
              comparedProducts={comparedProducts}
              onToggleCompare={toggleCompared}
            />
          </>
        )}

        {/* All products page */}
        {activePage === "products" && (
          <ProductGrid
            products={products}
            onView={setSelectedProduct}
            savedProducts={savedProducts}
            onToggleSave={toggleSaved}
            comparedProducts={comparedProducts}
            onToggleCompare={toggleCompared}
          />
        )}

        {/* Compare page */}
        {activePage === "compare" && (
          <ComparePage
            products={selectedForComparison}
            onRemove={toggleCompared}
            onView={setSelectedProduct}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Product details modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;
