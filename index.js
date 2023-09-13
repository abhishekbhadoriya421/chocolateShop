const chocolateData = [
  {
    src: "https://th.bing.com/th/id/OIP.m9lV0Bg7ld_17l4cmMCnCQHaDS?w=341&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Dairy Milk",
    price: 100,
  },
  {
    src: "https://th.bing.com/th/id/OIP.qUbI0Ndkgy8F1rww4brd4QHaHa?pid=ImgDet&rs=1",
    name: "Maltesers",
    price: 243,
  },
  {
    src: "https://4.bp.blogspot.com/-Fqwu95QnSys/WeAPCmEXsiI/AAAAAAAAmHc/BH9NzqvJ7xc57Zb7U-Akj09dfj_z5vcEACLcBGAs/s1600/Kit%2BKat.jpg",
    name: "KitKat",
    price: 80,
  },
  {
    src: "https://th.bing.com/th/id/OIP.uD-0eSsmbPYeypYu6ewL-wHaE8?pid=ImgDet&rs=1",
    name: "Snickers",
    price: 40,
  },
  {
    src: "https://th.bing.com/th/id/OIP.3aI6JqduDDn189VSgd_H4gHaHa?pid=ImgDet&rs=1",
    name: "Drinking Chocolate",
    price: 179,
  },
  {
    src: "https://manofmany.com/wp-content/uploads/2020/01/23-Best-Australian-Chocolate-Brands-Daintree-Estates.jpg",
    name: "Daintree Estates",
    price: 559,
  },
  {
    src: "https://th.bing.com/th/id/OIP.OE_a5bEnhFDKxPR9djfOdQHaI4?pid=ImgDet&rs=1",
    name: "Boggi's",
    price: 276,
  },
  {
    src: "https://i.pinimg.com/736x/59/c5/44/59c544f037e69590203019e4934a461a.jpg",
    name: "Valrhona",
    price: 876,
  },
  {
    src: "https://th.bing.com/th/id/OIP.c3k1k57L5oueopjr4c4nNAHaHW?pid=ImgDet&rs=1",
    name: "Russell Stover",
    price: 1200,
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71tVjo4e7QL._AC_SL1500_.jpg",
    name: "RED",
    price: 99,
  },
];

const chocolateContainer =
  document.getElementsByClassName("chocolateContainer");
chocolateData.forEach((chocolate) => {
  chocolateContainer[0].innerHTML += `<div class="chocolateItem">
                                        <div class="image">
                                            <img src=${chocolate.src} alt="loading...">
                                        </div>
                                        <div class="details">
                                            <p class="itmeName">${chocolate.name}</p>
                                            <p class="itemPrice">&#X20B9;${chocolate.price}</p>
                                        </div>
                                        <button id="buyItem" addItem=false price=${chocolate.price} >Add-Item</button>
                                    </div> `;
});

let price = 0;
let itemCount = 0;
const selectedItemCount = document.getElementById("selectedItemCount");
const totalPrice = document.getElementById("totalPrice");

function handleAddItemToCart(targetElement, itemPrice) {
  // item should be range between 0 to 8
  if (itemCount < 8) {
    targetElement.setAttribute("addItem", "true");
    price += itemPrice;
    itemCount++;
    targetElement.style.backgroundColor = "#9f0b01";
    targetElement.style.color = "white";
    targetElement.textContent = "Remove-Item";
  } else {
    alert("Sorry cannot add more than 8 item in a cart :(");
  }
}

function handleRemoveItemFromCart(targetElement, itemPrice) {
  targetElement.setAttribute("addItem", "false");
  price -= itemPrice;
  itemCount--;
  targetElement.style.backgroundColor = "white";
  targetElement.style.color = "#9f0b01";
  targetElement.textContent = "Add-Item";
}

// handleBuyChocolate event
document.addEventListener("click", (e) => {
  if (e.target.id === "buyItem") {
    let chocolatePrice = e.target.getAttribute("price");
    // isAddItem will let us know do we have to add the item or remove it
    let isAddItem = e.target.getAttribute("addItem");
    if (isAddItem === "false") {
      handleAddItemToCart(e.target, parseInt(chocolatePrice));
    } else {
      handleRemoveItemFromCart(e.target, parseInt(chocolatePrice));
    }
    // update the count of items in cart and total amount to pay
    selectedItemCount.textContent = itemCount;
    totalPrice.textContent = price;
  }
});
