function getUrl() {
     let query = window.location.search;
     console.log(query);
     let obj = new URLSearchParams(query);
     console.log(obj);
     let idval = obj.get("ID");
     return idval
}
let store = getUrl()

console.log(store);

function productsDetails() {
     fetch(`https://fakestoreapi.com/products/${store}`)
          .then(prod => prod.json())
          .then((products) => {
               console.log(products);

               let img11 = document.getElementById("img11")
               img11.src = products.image
               let img12 = document.getElementById("img12")
               img12.src = products.image

               let img21 = document.getElementById("img21")
               img21.src = products.image
               let img22 = document.getElementById("img22")
               img22.src = products.image

               let title1 = document.getElementById("title1")
               title1.innerText = products.title

               let title2 = document.getElementById("title2")
               title2.innerText = products.title

               let rating = document.getElementById("rating")
               rating.innerText = products.rating.rate
               let count = document.getElementById("count")
               count.innerText = products.rating.count

               let price = document.getElementById("price")
               price.innerText = products.price

               let category = document.getElementById("category")
               category.innerText = products.category

               let description = document.getElementById("description")
               description.innerText = products.description

               let imgWoman = document.getElementById("imgWoman")
               imgWoman.src = products.image



               let pinCheckBtn = document.getElementById("pinCheckBtn")
               pinCheckBtn.addEventListener("click", () => {

                    let pinInput = document.querySelector("#pinInput")
                    if (!pinInput.value) return alert("Please Enter Valid pin code")
                    else {
                         confirm(`It's your Pin code ${pinInput.value}`)
                         pinInput.value = ""
                    }
               })

               let b1 = document.getElementsByClassName("b1")
               let b2 = Array.from(b1)

               let bagbtn = document.getElementById("bagbtn")

               let appearText = document.getElementById("appearText")

               let selectedSize = null;

               b2.forEach(element => {
                    element.addEventListener("click", () => {
                         selectedSize = element.innerText;
                         console.log(selectedSize, element);
                         element.style.color = "rgb(227, 94, 116)"
                         element.style.border = " 3px solid rgb(227, 94, 116)"
                         appearText.innerText = ""
                    })
               })

               bagbtn.addEventListener("click", (event) => {
                    event.preventDefault();
                    if (selectedSize) {
                         bagbtn.innerText = "ADDED SUCCESSFULLY 🌟✔️😎"
                         alert("Added to cart successfully");

                         b2.forEach(el => {
                              el.style.color = "black";
                              el.style.border = "3px solid #ddd";
                         });
                         selectedSize = null;

                         let count = 0

                         let itemCart = document.querySelector("#itemCart");
                         itemCart.innerText = ++count;
                         console.log(count); 
                         console.log(itemCart.innerText);
                        if(count>=0){
                         itemCart.style = "";
                        }

                         if (bagbtn.innerText == "ADDED SUCCESSFULLY 🌟✔️😎") {
                              bagbtn.addEventListener("click", () => {

                                   let itemDetails = {
                                        "title": products.title,
                                        "description": products.description,
                                        "category": products.category,
                                        "image": products.image,
                                        "price": products.price,
                                        "size": selectedSize,
                                        "quantity": 1
                                   }
                                   function storeItems() {
                                        event.preventDefault();
                                        fetch("http://localhost:5001/user", {
                                             method: "POST",
                                             body: JSON.stringify(itemDetails)
                                        })
                                             .then(response => response.json())
                                             .then(data => {
                                                 
                                                  console.log(data)
                                                  count++
                                             })
                                   }
                                   storeItems()

                                   window.location.href = "./checkOut.html"
                              })
                         }
                         
                    } else {
                         appearText.innerText = "Please select a size !!! "
                         appearText.style.color = "#ff4081"
                         appearText.style.margin = "5px"

                         let Allsizes = document.getElementById("Allsizes")
                         Allsizes.style.animation = "shaking 0.1s 6"
                    }
               });



          })
}

productsDetails()