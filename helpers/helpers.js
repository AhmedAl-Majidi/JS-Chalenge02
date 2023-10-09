
// -----------Js Docs------------------
/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);

// -----------Local Storage-------------

const setStorage = (key,Id, value1, value2, value3, value4 = false) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        id: Id,
        productName: value1,
        description: value2,
        price: value3,
        saled: value4,
      })
    );
  };
  
  const getStorage = (key) => {
    const data = localStorage.getItem(key);

     if (data){
      let parsedData = JSON.parse(data);
      return parsedData
     };

    return null;
  };