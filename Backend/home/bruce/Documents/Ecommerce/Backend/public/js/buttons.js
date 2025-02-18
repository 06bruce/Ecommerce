// scraper.js
async function scrapeProduct(element) { // Accept the element as an argument
    if (!element) {
        console.error("Element not provided to scrapeProduct.");
        return null;
    }

    const titleElement = element.querySelector('.product-title');
    const priceElement = element.querySelector('.product-price');
    const imageElement = element.querySelector('.product-thumbnail');

    const title = titleElement ? titleElement.textContent.trim() : "Product Title Not Found";
    const price = priceElement ? priceElement.textContent.trim() : "Price Not Found";
    const imageUrl = imageElement ? imageElement.src : "Image Not Found";

    return { title, price, imageUrl };
    const phoneNumber = 250798922605;
}

function generateWhatsAppMessage(productDetails, phoneNumber) {
    if (productDetails) {
        let message = `I'm interested in the following product:\n\n`;
        message += `Product: ${productDetails.title}\n`;
        message += `Price: ${productDetails.price}\n`;
        message += `Image: ${productDetails.imageUrl}\n`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        return whatsappLink;
    } else {
        return "Product details not found.";
    }
}

function attachWhatsAppButton(element, phoneNumber) {
    const whatsappButton = element.querySelector('#whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', async () => {
            const product = await scrapeProduct(element);
            if (product) {
                const whatsappLink = generateWhatsAppMessage(product, phoneNumber);
                window.location.href = whatsappLink;
            }
        });
    }
}