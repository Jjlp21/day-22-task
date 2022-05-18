import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Rate from './components/Rate';
import { useState } from "react";

function App() {
  const items = [
    {
      product: "Fancy Product",
      price1: "$40.00",
      price2: "$80.00",
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: "",
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      product: "Fancy Product",
      price1: "$123.00",
      price2: "$280.00",
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: "",
    },
  ];
  const [cart, setCart] = useState(0);
  const addtocart = () => {
    setCart(cart + 1);
  };
  const removefromcart = () => {
    setCart(cart - 1);
  };



  return (
    <div className="App">
    <Navbar cart={cart}/>
    <Header/>
    <Distributer
      items={items}
      addtocart={addtocart}
      removefromcart={removefromcart}
    />    <Footer/>
    </div>
  );
}



function Distributer({ items, addtocart, removefromcart }) {
  return (
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {items.map((item) => {
          return (
            <Items
              product={item.product}
              price1={item.price1}
              price2={item.price2}
              addtocart={addtocart}
              removefromcart={removefromcart}
            />
          );
        })}
      </div>
    </div>
  );
}

function Items({ product, price1, price2, addtocart, removefromcart }) {
  const [add, setAdd] = useState(true);
  const sale = product == "Sale Item" || product == "Special Item" ? true : false;
  const style = { visibility: sale ? "block" : "hidden" };
  const added = () => {
    add ? setAdd(false) : setAdd(true);
  };
  function rate_one(){
    document.getElementById("rating").value =  <div class="bi-star-fill">&#11088;</div>

  }

  return (
    <div class="col mb-5">
      <div class="card h-100">
        <div class="badge bg-dark text-white position-absolute" style={style}>
          Sale
        </div>
        <div id="img">
          <img
            class="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
        </div>
        <div class="card-body p-4">
          <div class="text-center">
            {/* <!-- Product name--> */}
            <h5 class="fw-bolder">{product}</h5>

            {/* <!-- Product reviews--> */}
            <Rate/>

            {/* <!-- Product price--> */}
            {sale ? (
              <>
                <span style={{ textDecoration: "line-through" }}>{price1}</span>
                - {price2}
              </>
            ) : (
              `${price1} - ${price2}`
            )}
          </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a
              class="btn btn-outline-dark mt-auto"
              onClick={
                add
                  ? () => {
                      addtocart();
                      added();
                    }
                  : () => {
                      removefromcart();
                      added();
                    }
              }
            >
              {add ? "Add to cart" : "Remove from cart"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
