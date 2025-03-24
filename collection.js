

//side bar 
var sidenav=document.querySelector(".side-nav")
function  barclose(){
   sidenav.style.display="block"
}
function  barup(){
   sidenav.style.display="none"
}

 
 
 
 
 //searching a content
 
 
 
var productcontainer=document.getElementById("products")
 var search =document.getElementById("search")
 var productlist=productcontainer.querySelectorAll("div")
  search.addEventListener("keyup",function()
{
    var enteredtext = event.target.value.toUpperCase();
    for (var i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("p").textContent;
if(productname.toUpperCase().indexOf(enteredtext) < 0)   

{
    productlist[i].style.display="none"
}
else{
    productlist[i].style.display="block"
}
}}
)
