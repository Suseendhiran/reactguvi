import React, { useState } from "react";

function Index({ product, setCartCount }) {
  //console.log(product, setCartCount);
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div class="col mb-5" style={{ height: "fit-content" }}>
      <div class="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          class="badge bg-dark text-white position-absolute"
          // style="top: 0.5rem; right: 0.5rem"
        >
          Sale
        </div>
        {/* <!-- Product image--> */}
        <img
          class="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* <!-- Product name--> */}
            <h5 class="fw-bolder">{product.name}</h5>
            {/* <!-- Product reviews--> */}
            <div
              class="
                          d-flex
                          justify-content-center
                          small
                          text-warning
                          mb-2
                        "
            >
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
            </div>
            {/* <!-- Product price--> */}
            <span class="text-muted text-decoration-line-through">
              {product.oldPrice}
            </span>
            {product.newPrice}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <button
              disabled={addedToCart}
              class="btn"
              onClick={() => {
                setAddedToCart(!addedToCart ? true : false);
                setCartCount((prev) => prev + 1);
              }}
            >
              <a class="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </button>
            {addedToCart && (
              <button
                class="btn"
                onClick={() => {
                  setAddedToCart(false);

                  setCartCount((prev) => prev - 1);
                }}
              >
                <a class="btn btn-outline-dark mt-auto" href="#">
                  Remove item
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
