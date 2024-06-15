function myntra_API() {
     fetch("https://fakestoreapi.com/products")
     .then(prod=>prod.json())
     .then((products)=>{
          console.log(products);
         
          products.map((pros)=>{
               let proBody=document.getElementById("proBody")
               proBody.style.display="grid"
               proBody.style.gridTemplateColumns=" auto auto auto auto auto"
               proBody.style.gap="1px"
               proBody.style.padding="10px"
               proBody.style.marginRight="10px"
               proBody.style.marginLeft="10px"
               
               let section=document.createElement("section")
               section.style.height="500px"
               section.style.width="260px"
               // section.style.border="3px solid rgb(155, 153, 153)"
               // section.style.backgroundColor="red"
               section.style.margin="20px"
               section.style.cursor="pointer"
               section.style.display="flex"
               section.style.flexDirection="column"
               section.style.justifyContent="top"
               section.style.borderRadius="25px"

               let image=document.createElement("img")
               image.style.height="75%"
               image.style.width="100%"
               image.style.borderRadius="25px"


               image.src=pros.image

               let fastPageDetailes=document.createElement("div")
               fastPageDetailes.style.display="flex"
               fastPageDetailes.style.flexDirection="column"
               fastPageDetailes.style.marginLeft="15px"
               fastPageDetailes.style.lineHeight="20px"
              
               let subdiv1=document.createElement("div")
               subdiv1.innerText=pros.category
               subdiv1.style.fontSize="20px"
               subdiv1.style.fontWeight="bold"
               subdiv1.style.marginTop="10px"
               subdiv1.style.marginBottom="5px"
               // subdiv1.style.backgroundColor="yellow"

               let subdiv2=document.createElement("div")
               subdiv2.innerText=pros.title
               subdiv2.style.fontWeight="500"
               // subdiv2.style.backgroundColor="aqua"
               subdiv2.style.fontSize="15px"
               subdiv2.style.color="#535353"
               subdiv2.style.marginBottom="5px"

               let subdiv3=document.createElement("div")
               subdiv3.innerText=`Rs. ${pros.price}`
               subdiv3.style.fontSize="16px"
               subdiv3.style.fontWeight="bold"

               let span1=document.createElement("span")
               span1.innerHTML="<strike>Rs. 23647</strike>"
               span1.style.color="#9e9d9d"
               span1.style.margin="5px"

               let span2=document.createElement("span")
               span2.innerText="(68% OFF)"
               span2.style.color="#fc9c25"
               span2.style.margin="5px"

               section.addEventListener("mouseover", () => {
                    section.style.webkitBoxShadow="-9px -10px 78px -9px rgba(0,0,0,0.75)"
                    section.style.MozBoxShadow='-9px -10px 78px -9px rgba(0,0,0,0.75)';
                    section.style.boxShadow='-9px -10px 78px -9px rgba(0,0,0,0.75)'

                    subdiv1.innerHTML=` <div style="width: 225px;"> <button style="padding: 10PX; width: 225px; color: rgb(0, 0, 0); border: 1px solid #535353;  background-color: white; font-weight: bold; border-radius: 7px;">WISHLIST</button> </div>`
                    subdiv2.innerHTML="Size : S/XL/M"
               });
               section.addEventListener("mouseout", () => {
                    subdiv1.innerText=pros.category
                    subdiv2.innerText=pros.title

                    section.style.webkitBoxShadow="0px 0px 0px 0px rgba(0,0,0,0)"
                    section.style.MozBoxShadow='0px 0px 0px 0px rgba(0,0,0,0)'
                    section.style.boxShadow='0px 0px 0px 0px rgba(0,0,0,0)'
                    section.style.boxShadow="white"
                    });
               
               subdiv3.append(span1,span2)
               
               fastPageDetailes.append(subdiv1,subdiv2,subdiv3)
               section.append(image,fastPageDetailes)
               proBody.append(section)

               section.addEventListener("click",()=>{
                    event.preventDefault()
                    console.log("productsDetails");
                    window.location.href=`./productsDetails.html?ID=${pros.id}`
               })
          })
         
     })
}
myntra_API()