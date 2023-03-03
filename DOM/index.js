// document.firstElementChild.lastElementChild.firstElementChild;
// var heading = firstElementChild.lastElementChild.firstElementChild;
// heading = innerHTML = "Good Bye"
// heading.style.color = "red";
// document.querySelector("input").click();
/*  
     Properties            Methods
    -innerHTML          -click()
    -style              -appendChild()
    -firstChild         -setAttribute()
*/

document.getElementsByTagName("li");
// HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByTagName("li")[2].style.color = "purple";
// Mor oldu

document.getElementsByTagName("li").length;
// Kaç tane eleman olduğunu verdi

document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color = "red";

///////////////////////////////

document.getElementById("title");
// ID'yi seçtin

document.getElementById("title").innerHTML = "Good BY";
// innerHTML ile içerigi değiştirdin.

document.querySelector("h1");
//getElementById gibi yalnızca tek öğe döndürür.
document.querySelector("#title");
//İd Class isim seçebiliyoruz.
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li.item");

document.querySelector("#list .item");
// sadece 1. itemi alır hepsini almamız için
document.querySelectorAll("#list .item");
//kullanmamız gerekir.
document.querySelectorAll("#list .item")[2].style.color="red";
//Değişiklikte bu şekilde yapılır.
 