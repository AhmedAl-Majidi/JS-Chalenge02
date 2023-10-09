document.addEventListener("DOMContentLoaded",()=>{
products.push(getStorage("new product"))

    const loaderDiv = el("#loader");
    const renderHtml2 = ( htmlString ) => {
        htmlString.forEach((component) => {
            loaderDiv.innerHTML += component
        })
    };
    
    const app = el("#app");
        
    const renderHtml = ( htmlString ) => {
        htmlString.forEach((component) => {
            app.innerHTML += component
        })
    };
// ====================================================================================

// Loader
const loader = () =>{
    return`
    <div id="spinner-container" class="container ">
        <div class="spinner-container">
            <div class="spinner-border loading" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</div>
    `;
}  
// const loader = () =>{
//     return`
//     <div id="spinner-container" class="spinner-container text-dark">
//         <span class="loader "></span>
//     </div>
//     `;
// }


    // Total Price
    const totalPriceComponent = () => {
        return `
        <!-- Total Price -->
       <div id="total-price" class="row d-flex justify-content-center">
          <div class="col-md-4 col-sm-8 d-flex justify-content-around p-2 mb-2" style="background-color: #e1f5fe;">
            <h5 class="fw-bold mb-0">Total price:</h5>
            <h5 id="total-price" class="fw-bold mb-0 move-up-down-animation">${getTotalPrice()}$</h5>
          </div>
       </div>
        `
    }
// ====================================================================================
    
// Shop Cards Component 
    // const shopCardsComponent = (cardItems) => {
        
    //     let elements = cardItems.map((item) => {
    //         return `
    //             <div class="row card p-0 m-2 container-fluid " style="max-width: 18rem;">
    //                 <div class="card-body p-0">
    //                      <div id="sale" class="sale-label rounded m-2 px-3 ${item.saled ? "d-none" : ""} "> Sale</div>
    //                     <div>
    //                         <img src="assets/images/image01.jpg" class="card-img-top" alt="..."
    //                             style="max-height: 20rem;">
    //                     </div>
    //                     <p class="d-none" >${item.id}</p>
    //                     <h5 class="card-title text-center mt-3"> ${item.productName}</h5>
    //                      <div class="star-rating text-center text-warning">
    //                         <span class="star">&#9733;</span>
    //                         <span class="star">&#9733;</span>
    //                         <span class="star">&#9733;</span>
    //                         <span class="star">&#9733;</span>
    //                         <span class="star">&#9733;</span>
    //                     </div>
    //                     <div class="text-center">
    //                         <span id="price">${item.price}</span>
    //                     </div>
    //                 </div>
    //                 <div class="d-flex justify-content-center mb-2">
    //                     <a href="#" id="add-to-card-btn" class="btn btn-light border-dark">${item.saled ? "View Options" : "Add to cart"}</a>
    //                 </div>
    //             </div>
    //         `;
    //         }).join('');
    //             return `
    //             <div id="shop-cards" class="container">
    //                 <div class="row d-flex justify-content-around">
    //                 ${elements}
    //                 </div>
    //             </div>
    //             `   
    //          ;
    // }
    
    
    

    

    // loader js
    // Function to show the loader
    function showLoader() {
        var loaderContainer = document.getElementById("spinner-container");
        loaderContainer.style.display = "flex";
  }
  
  // Function to show the content and hide the loader
  function showContent() {
    var loaderContainer = document.getElementById("spinner-container");
    var content = document.getElementById("app");
    
    loaderContainer.style.display = "none";
    content.style.display = "block";
}

// Simulating a delay of 2 seconds before showing the content
setTimeout(showContent, 100);

console.log(products)

//---------------------- Rendering Componenets ---------------------
renderHtml2([loader()]);
renderHtml([navBarComponenet() ,totalPriceComponent(), shopCardsComponent(products), footerComponent()]);
    
// addToCardBtn
const addToCardBtn = el("#add-to-card-btn");

addToCardBtn.addEventListener('click',(e)=> {
    // get the inneer html of the price item
     let price = parseFloat(e.target.parentElement.parentElement.children[0].children[5].children[0].innerHTML);
    //get the id of the product
    // let productId = e.target.parentElement.parentElement.children[0].children[0].innerHTML;
    let productId = e.target.parentElement.parentElement.children[0].children[2].innerHTML;

    // set procduct to saled
    products.find((product) => product.id == productId).saled = true;

    let shopCards = el("#shop-cards");
    let totalPriceElement = el("#total-price");
    let navBar = el("#nav-bar");
    // 
    shopCards.classList.add("d-none");
    totalPriceElement.classList.add("d-none");
    navBar.classList.add("d-none");
    
    console.log(products)
    renderHtml([navBarComponenet(),totalPriceComponent(),shopCardsComponent(products)]);
    console.log(products)
    
    getTotalPrice()
    console.log(products)


})  
}) 