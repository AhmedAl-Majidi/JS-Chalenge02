document.addEventListener("DOMContentLoaded",()=>{    

const addProduct = el("#register");

const renderHtml = ( htmlString ) => {
    htmlString.forEach((component) => {
        addProduct.innerHTML += component
    })
};

// ====================================================================================
// add product 

const register = () => {
    return `
    <h2 class="text-center text-md-start bg-white  rounded-3">Register</h2>
            <form>
                <div class="form-group">
                  <label for="name">Email address</label>
                  <input type="email" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="pw">Password</label>
                  <input type="password" class="form-control" id="pw" placeholder="Password">
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="rememberMe">
                  <label class="form-check-label" for="rememberMe">Remember me</label>
                </div>
                <div class="form-group form-check">
                    <ul class="helper-text">
                        <li class="length">Must be at least 8 characters long.</li>
                        <li class="lowercase">Must contain a lowercase letter.</li>
                        <li class="uppercase">Must contain an uppercase letter.</li>
                        <li class="special">Must contain a number or special character.</li>
                    </ul>
                </div>
                <div class=" d-flex justify-content-center justify-content-sm-start ">
                    <input type="submit" class="btn btn-dark mx-3" value="Register" onclick="store()">
                    <button type="submit" class="btn btn-dark"><a href="login.html" class="text-decoration-none text-white">Login</a></button>

                </div>

              </form>
    `
}

//---------------------- Rendering Componenets ---------------------

renderHtml([register()]);
}) 