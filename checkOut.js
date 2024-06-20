function fatchingData() {

    fetch("http://localhost:5001/user")
        .then(res => res.json())
        .then((items) => {
            console.log(items);

            items.map((proData) => {

                // Create the container div
                const itemInfoDiv = document.createElement('div');
                itemInfoDiv.classList.add('item-info');

                // Create and append the checkbox input
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = true;
                itemInfoDiv.appendChild(checkbox);

                // Create and append the image element
                const img = document.createElement('img');
                img.src = proData.image;
                itemInfoDiv.appendChild(img);

                // Create and append the item details div
                const itemDetailsDiv = document.createElement('div');
                itemDetailsDiv.classList.add('item-details');
                itemInfoDiv.appendChild(itemDetailsDiv);

                // Create and append the title
                const title = document.createElement('h3');
                title.textContent = proData.title;
                itemDetailsDiv.appendChild(title);

                // Create and append the description
                const description = document.createElement('p');
                description.textContent = proData.description;
                itemDetailsDiv.appendChild(description);

                // Create and append the seller information
                const category = document.createElement('p');
                category.textContent = proData.category;
                itemDetailsDiv.appendChild(category);

                // Create and append the item options div
                const itemOptionsDiv = document.createElement('div');
                itemOptionsDiv.classList.add('item-options');
                itemDetailsDiv.appendChild(itemOptionsDiv);

                // Create and append the size label and select
                const sizeLabel = document.createElement('label');
                sizeLabel.textContent = 'Size:';
                sizeLabel.style.borderRadius = '10px';
                sizeLabel.style.backgroundColor = '#d1cfcf';
                sizeLabel.style.padding= '6px';
                const sizeSelect = document.createElement('select');
                const sizeOption = document.createElement('option');
                sizeOption.textContent = 'S';
                sizeSelect.appendChild(sizeOption);
                sizeLabel.appendChild(sizeSelect);
                itemOptionsDiv.appendChild(sizeLabel);

                // Create and append the quantity label and select
                const qtyLabel = document.createElement('label');
                qtyLabel.textContent = 'Qty:';
                qtyLabel.style.borderRadius = '10px';
                qtyLabel.style.backgroundColor = '#d1cfcf';
                qtyLabel.style.padding= '6px';
                const qtySelect = document.createElement('select');
                const qtyOption = document.createElement('option');
                qtyOption.textContent = proData.quantity;
                qtySelect.appendChild(qtyOption);
                qtyLabel.appendChild(qtySelect);
                itemOptionsDiv.appendChild(qtyLabel);

                // Create and append the item price div
                const itemPriceDiv = document.createElement('div');
                itemPriceDiv.classList.add('item-price');
                itemDetailsDiv.appendChild(itemPriceDiv);

                // Create and append the current price
                const currentPrice = document.createElement('span');
                currentPrice.classList.add('current-price');
                currentPrice.textContent = proData.price;
                itemPriceDiv.appendChild(currentPrice);

                // Create and append the original price
                const originalPrice = document.createElement('span');
                originalPrice.classList.add('original-price');
                originalPrice.textContent = Math.floor(proData.price*20);

                console.log(originalPrice.textContent);
                itemPriceDiv.appendChild(originalPrice);

                // Create and append the discount
                const discount = document.createElement('span');
                discount.classList.add('discount');
                discount.textContent = '80% OFF';
                itemPriceDiv.appendChild(discount);

                // Create and append the return policy
                const returnPolicy = document.createElement('p');
                returnPolicy.textContent = '14 days return available';
                itemDetailsDiv.appendChild(returnPolicy);

                // Create and append the delivery information
                const deliveryInfo = document.createElement('p');
                deliveryInfo.textContent = 'Delivery between 25 Jun - 27 Jun';
                itemDetailsDiv.appendChild(deliveryInfo);

                const hr=document.createElement("hr")
                itemDetailsDiv.appendChild(hr);

                // Create and append the remove button
                const removeButton = document.createElement('button');
                removeButton.classList.add('remove-item');
                removeButton.textContent = 'X';
                itemInfoDiv.appendChild(removeButton);

                // Append the item info div to the document body or any other container
                let item = document.querySelector(".item")
                item.appendChild(itemInfoDiv);

                let mrp=document.getElementById("mrp")
                mrp.textContent=proData.price;

                let FinalPrice=document.getElementById("FinalPrice")
                FinalPrice.textContent=Math.floor(proData.price-11.78);

                let removeItems = document.getElementById("removeItems");

                removeItems.addEventListener("click", function() {
                    fetch("http://localhost:5001/user", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
                });
                

            })

        })
        .catch((e) => {
            console.log("error", e);
        })

}

fatchingData()