// import { getStorage } from 'firebase/storage';
const addProduct = el("#addProduct");

const renderHtml = ( htmlString ) => {
    htmlString.forEach((component) => {
        addProduct.innerHTML += component
    })
};
// ====================================================================================

// ###################### add product #################

const addProductComponent = () => {
    return `
    <h3 class="text-center p-2 ">Add a new Product</h3>
        <form class="d-flex justify-content-center flex-column align-items-center" action="index.html" method="GET"
            enctype="multipart/form-data">
            <div class="col-md-6 mb-3">
                <label for="product-name" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="product-name">
            </div>
            <div class="col-md-6 mb-3">
                <label for="Description" class="form-label">Description</label>
                <input type="text" class="form-control" id="Description">
            </div>
            <div class="col-md-6 mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price">
            </div>
            <div class="col-md-6 mb-3">
                <label for="img" class="form-label">Image</label>
                <input type="file" class="form-control" id="img">
            </div>
            <!-- <input class="btn btn-primary" type="submit" value="Upload"> -->
            <button type="button" class="btn btn-primary" onclick="addNewProduct()">Submit</button>
        </form>
    `
}

// Add Product Function

function addNewProduct(){
    let productName = el("#product-name").value;
    let description = el("#Description").value;
    let price = el("#price").value;

    // the larger id of products
    let maxId = 0;
    products.forEach((product) => {
    if (product.id > maxId) {
        maxId = product.id;
    }
    });

    setStorage("new product",parseFloat(maxId+1), productName, description,parseFloat(price));

    
    products.push(getStorage("new product"))
    
    alert(products)
    // let newProduct = getStorage("new product");

    // let newId = newProduct.id;
    // let newProductName = newProduct.productName;
    // let newDescription = newProduct.description;
    // let newPrice = newProduct.price;

    
    // console.log(newId,newProductName,newDescription,newPrice)

    
    // window.open("products.html")
    location.href = "products.html"
  
    // renderHtml([shopCardsComponent(products)]);
    // let shopCards = el("#card");

    
    // shopCards.innerHTML = `
    //         <div class="row card p-0 m-2 container-fluid " style="max-width: 18rem;">
    //         <div class="card-body p-0">
    //             <div id="sale" class="sale-label rounded m-2 px-3 "> Sale</div>
    //             <div>
    //                 <img src="assets/images/image01.jpg" class="card-img-top" alt="..."
    //                     style="max-height: 20rem;">
    //             </div>
    //             <p class="d-none" >${newId}</p>
    //             <h5 class="card-title text-center mt-3"> ${newProductName}</h5>
    //             <div class="star-rating text-center text-warning">
    //                 <span class="star">&#9733;</span>
    //                 <span class="star">&#9733;</span>
    //                 <span class="star">&#9733;</span>
    //                 <span class="star">&#9733;</span>
    //                 <span class="star">&#9733;</span>
    //             </div>
    //             <div class="text-center">
    //                 <span id="price">${newPrice}</span>
    //             </div>
    //         </div>
    //         <div class="d-flex justify-content-center mb-2">
    //             <a href="#" id="add-to-card-btn" class="btn btn-light border-dark">Add to cart</a>
    //         </div>
    //     </div>
      
    // `
    
    // console.log(getStorage("Product Name").description);

    //add the new products card

}


//---------------------- Rendering Componenets ---------------------

renderHtml([navBarComponenet(),addProductComponent(), footerComponent()]);
// renderHtml2([addNewProduct()]);

