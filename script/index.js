import { createCard,oneCountInfo } from "./functions.js";
const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com";
const wrapper = document.getElementById('wrapper')
const dLmode = document.querySelector("#darkLightMode")
const hContainer = document.querySelector(".header-container")
const mContainer = document.querySelector(".main-container")
const dark = document.querySelector("#dark")
const select = document.querySelector(".select-mode")
const input = document.querySelector(".inputt")
const countryy = document.querySelector("country-name")
const bard = document.querySelector(".bard")
const oneCinfo = document.getElementById("oneCinfo")

// Loading screen
document.addEventListener('DOMContentLoaded', function() {
    fetch(`${BASE_URL}/countries`, {
        method: "GET"
    })
    .then(res => {
        return res.json()
    })
    .then(result => {
        console.log(result);
        wrapper.innerHTML = ""
        result.data.forEach(element => {
            let card = createCard(element)
            wrapper.innerHTML += card
        });
       
    })
   }
  
)

// Filter region
    select.addEventListener("change", () => {
        let value = select.value

            fetch(`${BASE_URL}/countries?region=${value}`,)
        .then(response => response.json())
        .then(data =>{

            wrapper.innerHTML= ""
           data.data.forEach(country =>{
               let card = createCard(country)
               wrapper.innerHTML += card
        })  
        })
        });

// inputSearch
        input.addEventListener("input", updateValue);
        function updateValue(e) {
        
            fetch(`${BASE_URL}/countries?search=${e.target.value}`, {
                method: "GET"
            })
                .then(res => res.json())
                .then(result => {
                    wrapper.innerHTML = ''; 

                    result.data.forEach(data => {
                        let card = createCard(data);
                        wrapper.innerHTML += card;
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }

// Dark mode
        dLmode && dLmode.addEventListener("click" ,function(e){ 
            e.preventDefault()
               hContainer.classList.toggle("header-dMode");
               mContainer.classList.toggle("main-dMode");
               document.body.classList.toggle("main-dMode")
        
        
               if(hContainer.classList.contains("header-dMode")){
                   dark.classList.add("fa-solid")
                   dark.classList.remove("fa-regular")
               }
               else{
                dark.classList.add("fa-regular")
                dark.classList.remove("fa-solid")
               }
            
             if(hContainer.classList.contains("header-dMode")){
                  input.classList.add("second-input")
                  input.classList.remove("inputt")
             }
             else{
                input.classList.add("inputt")
                input.classList.remove("second-input")
             }
            
             if(hContainer.classList.contains("header-dMode")){
                 select.style.backgroundColor = "#2B3844"
                 select.style.color = "#fff"
             }
             else{      
                select.style.backgroundColor = "#fff"
                select.style.color = "black"
             }
            
             if(document.body.classList.toggle("main-dMode")){
                country.style.color = "#fff"
                country.backgroundColor = "black"
            }
            else{
               select.classList.add("select-mode")
               select.classList.remove("select-dark")
            }
       


            
        });

countryy && countryy.addEventListener("click",(e) => {
e.preventDefault()
fetch(`${BASE_URL}/countries/slug/${country-name}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    wrapper.innerHTML = ""
    data.data.forEach(countrySlug => {
        let card =  oneCountInfo(count)
        oneCinfo.innerHTML += card
    })
})
})


 

        



       