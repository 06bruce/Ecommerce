// const products = require ('../')
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.whatsapp-button').forEach(button => {
//         button.addEventListener('click', e => {
//             e.preventDefault();

//             const productItem = button.closest('.product-item');
//             const productTitle = productItem?.querySelector('.product-title')?.textContent.trim() || "this product";
//             const productImage = productItem?.querySelector('.product-image')?.src || productItem?.querySelector('.product-image')?.getAttribute('data-src') || "";
//             const productUrl = productItem?.querySelector('.product-url')?.href || "";

//             // Construct the message, handling potential undefined values
//             let message = `I'd like to order ${encodeURIComponent(productTitle)}`;

//             if (productImage) {
//                 message += `.\nImage: ${encodeURIComponent(productImage)}`; // Added newline for better formatting
//             }

//             // if (productUrl) {
//             //     message += `.\nProduct URL: ${encodeURIComponent(productUrl)}`; // Added newline for better formatting
//             // }
            
//             const phoneNumber = '250798922605';
//             const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message},${productTitle},${productImage}`;

//             console.log("Generated URL:", whatsappUrl); // Debugging: Check the URL in the console

//             window.open(whatsappUrl, '_blank');
//         });
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.whatsapp-button').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            const productItem = button.closest('.col-12'); // Get parent div
            const productId = productItem?.querySelector('.product-item')?.getAttribute('data-id') || "Unknown ID";
            const productTitle = productItem?.querySelector('.product-title')?.textContent.trim() || "Unknown Product";
            const productImage = productItem?.querySelector('.product-image')?.src || "";
            const productPrice = productItem?.querySelector('.product-price')?.textContent.trim() || "Unknown Price";

            // Construct WhatsApp message
            let message = `I'd like to order:\n`;
            message += `🆔 Product ID: ${encodeURIComponent(productId)}\n`;
            message += `📌 Name:    ${encodeURIComponent(productTitle)}\n`;
            message += `💰 Price: ${encodeURIComponent(productPrice)}`;

            if (productImage) {
                message += `\n🖼 Image: ${encodeURIComponent(productImage)}`;
            }

            const phoneNumber = '250798922605';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            console.log("Generated URL:", whatsappUrl); // Debugging: Check the URL in the console

            window.open(whatsappUrl, '_blank');
        });
    });
});









// function createProductItem(productName, imageUrl, productLink) {
//     const productItem = document.createElement('div');
//     productItem.classList.add('product-item');

//     const titleElement = document.createElement('h3');
//     titleElement.classList.add('product-title');
//     titleElement.textContent = productName;
//     productItem.appendChild(titleElement);

//     if (imageUrl) {
//         const imageElement = document.createElement('img');
//         imageElement.classList.add('product-image');
//         imageElement.src = imageUrl;
//         productItem.appendChild(imageElement);
//     }

//     if (productLink) {
//         const linkElement = document.createElement('a');
//         linkElement.classList.add('product-url');
//         linkElement.href = productLink;
//         linkElement.textContent = "View Product";
//         productItem.appendChild(linkElement);
//     }

//     const whatsappButton = document.createElement('button');
//     whatsappButton.classList.add('whatsapp-button');
//     whatsappButton.textContent = "Order via WhatsApp";
//     productItem.appendChild(whatsappButton);

//     return productItem;
// }


// // Example usage:
// // const productContainer = document.getElementById('product-container');
// // if (productContainer) {
// //     const product1 = createProductItem("Awesome Shirt", "image1.jpg", "product1.html");
// //     const product2 = createProductItem("Cool Jeans", "image2.png", "product2.html");
// //     const product3 = createProductItem("Plain T-shirt"); 
// //     productContainer.appendChild(product1);
// //     productContainer.appendChild(product2);
// //     productContainer.appendChild(product3);
// // }