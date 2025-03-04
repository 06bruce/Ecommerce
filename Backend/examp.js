// document.addEventListener("DOMContentLoaded", function () {
//     fetch("product.schema.js")  // Load product data
//         .then(response => response.json())
//         .then(products => {
//             let productList = document.getElementById("product-list");

//             products.forEach(product => {
//                 let productHTML = `
//                     <div class="col-12 col-md-4 col-lg-3 mb-5">
//                         <div class="product-item">
//                             <img src="${product.image}" class="img-fluid product-thumbnail">
//                             <h3 class="product-title">${product.name}</h3>
//                             <strong class="product-price">${product.price}</strong>
//                             <button class="whatsapp-button" onclick="orderOnWhatsApp('${product.name}', '${product.price}', '${product.image}')">
//                                 Order on WhatsApp
//                             </button>
//                         </div>
//                     </div>
//                 `;
//                 productList.innerHTML += productHTML;
//             });
//         });
// });

// // Function to send order on WhatsApp
// function orderOnWhatsApp(name, price, image) {
//     let phoneNumber = "+250798922605"; // Replace with your WhatsApp number
//     let message = `Hello, I want to order:\n\n🛒 *${name}*\n💰 Price: ${price}\n\nCan you provide more details?`;
//     let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
// }
