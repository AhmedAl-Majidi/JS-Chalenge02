const addProduct = el("#loader");

const renderHtml = ( htmlString ) => {
    htmlString.forEach((component) => {
        addProduct.innerHTML += component
    })
};
// ====================================================================================
// add product 
// Loader
const loader = () =>{
    return`
    <div class="container">
  <div class="spinner-container">
    <div class="spinner-border loading" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</div>
    `;
}

//---------------------- Rendering Componenets ---------------------

renderHtml([loader()]);
