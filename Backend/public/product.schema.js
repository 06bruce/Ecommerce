
document.addEventListener("DOMContentLoaded", () => {
    const product =   [
        {
            "id": "product1",
            "name": "Lights for Laoptops as well as for  Smartphone",
            "image": "Image/el6.jpg",
            "price": "15,000 Frw",
            "description": "Lights for Laptops and Smartphones"
        },
        {
            "id": "product2",
            "name": "Ring Lights for Smart Phones and their sticks",
            "image": "Image/el5.jpg",
            "price": "69,500 FRW",
            "description": "Ring Lights for Smartphones with sticks"
        },
        {
            "id": "product3",
            "name": "3 Axis Foldable Gimbal",
            "image": "images-job/Product 1.jpeg",
            "price": "20, 000 Frw",
            "description": "3 Axis Foldable Gimbal"
        },
        {
            "id": "product4",
            "name": "Wireless Broadcast Selfie Stick",
            "image": "images-job/Product 12.jpeg",
            "price": "$15.00",
            "description": "Wireless Broadcast Selfie Stick"
        },
        {
            "id": "product5",
            "name": "Ring Lights for Smart Phones",
            "image": "images-job/Product 3.jpeg",
            "price": "$25.00",
            "description": "Ring Lights for Smartphones"
        },
        {
            "id": "product6",
            "name": "M11 Professional camera lights",
            "image": "images-job/Product 11.jpeg",
            "price": "$243.00",
            "description": "M11 Professional camera lights"
        },
        {
            "id": "product7",
            "name": "Gimbal Stailizer Easy Shooting",
            "image": "images-job/Product 19.jpeg",
            "price": "$15.00",
            "description": "Gimbal Stabilizer Easy Shooting"
        },
        {
            "id": "product8",
            "name": "Video Making Kit",
            "image": "images-job/Product 20.jpeg",
            "price": "$25.00",
            "description": "Video Making Kit"
        },
        {
            "id": "product9",
            "name": "Single ring light",
            "image": "images-job/Product 7.jpeg",
            "price": "$243.00",
            "description": "Single ring light"
        },
        {
            "id": "product10",
            "name": "Double Ring Lights with stick",
            "image": "images-job/Product 8.jpeg",
            "price": "$15.00",
            "description": "Double Ring Lights with stick"
        },
        {
            "id": "product11",
            "name": "Gimbal Stabilizer",
            "image": "images-job/Product 27.jpeg",
            "price": "Fr 140 000",
            "description": "Gimbal Stabilizer"
        },
        {
            "id": "product12",
            "name": "Professional Microphones for shooting camera",
            "image": "images-job/Product 10.jpeg",
            "price": "Fr 30 000",
            "description": "Professional Microphones for shooting camera"
        },
        {
            "id": "product13",
            "name": "Camera Lights",
            "image": "images-job/Product 11.jpeg",
            "price": "$243.00",
            "description": "Camera Lights"
        },
        {
            "id": "product14",
            "name": "Selfie Stick",
            "image": "images-job/Product 12.jpeg",
            "price": "$243.00",
            "description": "Selfie Stick"
        },
        {
            "id": "product15",
            "name": "SX9 MicroPhones",
            "image": "images-job/Product 14.jpeg",
            "price": "$243.00",
            "description": "SX9 MicroPhones"
        },
        {
            "id": "product16",
            "name": "Head ights For SmartPhones",
            "image": "images-job/Product 15.jpeg",
            "price": "$243.00",
            "description": "Head lights For SmartPhones"
        },
        {
            "id": "product17",
            "name": "Professional MiCrophones",
            "image": "images-job/Product 16.jpeg",
            "price": "$243.00",
            "description": "Professional MiCrophones"
        },
        {
            "id": "product18",
            "name": "Dual Omni-Directional Lavalier Mic BY-M1DM",
            "image": "images-job/Product 4.jpeg",
            "price": "$243.00",
            "description": "Dual Omni-Directional Lavalier Mic BY-M1DM"
        },
        {
            "id": "product19",
            "name": "SX9 Wireless Microphone",
            "image": "images-job/Product 6.jpeg",
            "price": "Fr 20 000",
            "description": "SX9 Wireless Microphone"
        },
        {
            "id": "product20",
            "name": "Professional Journalist Microphone",
            "image": "images-job/Product 10.jpeg",
            "price": "Fr 43 000",
            "description": "Professional Journalist Microphone"
        },
        {
            "id": "product21",
            "name": "k9 Microphones",
            "image": "images-job/Product 21.jpeg",
            "price": "Fr 20 000",
            "description": "k9 Microphones"
        },
        {
            "id": "product22",
            "name": "K35 Microphone",
            "image": "images-job/Product 22.jpeg",
            "price": "$20 000",
            "description": "K35 Microphone"
        },
        {
            "id": "product23",
            "name": "Universal Cardoid Microphone",
            "image": "images-job/Product 23.jpeg",
            "price": "$243.00",
            "description": "Universal Cardoid Microphone"
        },
        {
            "id": "product24",
            "name": "Lavalier Microphone",
            "image": "images-job/Product 25.jpeg",
            "price": "$243.00",
            "description": "Lavalier Microphone"
        },
        {
            "id": "product25",
            "name": "Universal Cardoid MIcrophone BY-MM1",
            "image": "images-job/Product 26.jpeg",
            "price": "$243.00",
            "description": "Universal Cardoid MIcrophone BY-MM1"
        },
        {
            "id": "product26",
            "name": "3 in 1 Multifunctional Wireless Microphone",
            "image": "images-job/Product 28.jpeg",
            "price": "$243.00",
            "description": "3 in 1 Multifunctional Wireless Microphone"
        },
        {
            "id": "product27",
            "name": "K9 Wireless Microphones",
            "image": "images-job/Product 29.jpeg",
            "price": "Fr 20 000",
            "description": "K9 Wireless Microphones"
        },
        {
            "id": "product28",
            "name": "Haino Tecko Digital Smart Watch -White",
            "image": "images-job/Product 38.jpeg",
            "price": "$243.00",
            "description": "Haino Tecko Digital Smart Watch -White"
        },
        {
            "id": "product29",
            "name": "Haino Tecko Wrist Round Smart Watches",
            "image": "images-job/Product 2.jpeg",
            "price": "Fr 44 000",
            "description": "Smart Watch",
        },
        {
            "id": "product30",
            "name": "Haino Tecko smart Digitar smart Watch",
            "image": "images-job/Product 38.jpeg",
            "description": "Haino Tecko Smt Watch",
        }, 
        // {
        //     "id": "product31",
        //     "name": "Haino Tecko Digital Smart Watch ",
        //     "image": "images-job/Product 38.jpeg",
        //     "price": "Frw 45 000",
        //     "description": "",
        // },
        {
            "id": "product32",
            "name": "Haino Tecko Wrist Round Smart Watches",
            "image": "images-job/Product 2.jpeg",
            "price": "60 000 Frw",
            "description": ""
        },
        {
            "id": "prodcut33",
            "name": "Haino Tecko Smart Watch",
            "image": "images-job/product413.png",
            "price": "58 000 Frw",
            "descriptoin": ""
        },
        // {
        //     "id": "product34",
        //     "name": "Haino Tecko Smart Brown Watch",
        //     "image": "mages-job/product412.png",
        //     "price": "59 000 Frw",
        //     "description": ""
        // },
        {
            "id": "product35",
            "name": "Haino Tecko Smart White Watch",
            "image": "images-job/product411.png",
            "price": "59 000 Frw",
            "description": "",
        },
        {
            "id": "product36",
            "name": "Pink Smart Wrist round wacth",
            "image": "images-job/product414.png",
            "price": "25 000Frw"
        }

        // {
        //    "id": "37",
        //    "name": ""
        // }
    ]

    const productList = document.getElementById('product-list');

    // Generate product HTML
    let productsHTML = '';
    product.forEach(product => {
        productsHTML += `
        <div class="col-12 col-md-4 col-lg-3 mb-5">
            <div class="product-item" data-id="${product.id}" style="background-color: #e0f2e0; border-radius: 9px; padding: 4px; font-size: 15px"> 
                <img src="${product.image}" class="img-fluid product-image" alt="${product.name}">
                <h3 class="product-title" style="color: blue;">${product.name}</h3>
                <strong class="product-price">${product.price}</strong>
                ${product.description ? `<p class="product-description">${product.description}</p>` : ''}
               
            </div>
            <button class="whatsapp-button" style=" color: blue; border-radius: 9px; background-color:lightGreen " ;>Order on WhatsApp</button>
        </div>`;
    });

    productList.innerHTML = productsHTML;

    // WhatsApp Button Click Handler
    document.querySelectorAll('.whatsapp-button').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const productItem = button.closest('.col-12');
            const productId = productItem.querySelector('.product-item').getAttribute('data-id');
            const productTitle = productItem.querySelector('.product-title').textContent;
            const productPrice = productItem.querySelector('.product-price').textContent;
            const productImage = productItem.querySelector('.product-image').src;


            const message = encodeURIComponent(
                `I'd like to order:\n
                📌 Name: ${productTitle}\n
                💰 Price: ${productPrice}\n
                🖼 Image: ${productImage}`
            );

            window.open(`https://wa.me/250798922605?text=${message}`, '_blank');
        });
    });
});
