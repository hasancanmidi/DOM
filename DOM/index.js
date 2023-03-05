/*  
     Properties            Methods
    -innerHTML          -click()
    -style              -appendChild()
    -firstChild         -setAttribute()
*/

// document.firstElementChild.lastElementChild.firstElementChild;
// var heading = firstElementChild.lastElementChild.firstElementChild;
// heading = innerHTML = "Good Bye"
// heading.style.color = "red";
// document.querySelector("input").click();


document.getElementsByTagName("li");
// HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByTagName("li")[2].style.color = "purple";
// Mor oldu

document.getElementsByTagName("li").length;
// Kaç tane eleman olduğunu verdi

document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color = "red";

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

document.querySelector(".btn").style.backgroundColor = "Yellow";
//Button class'ını seçerek arka planlarını sarı yaptık.

document.querySelector("button").classList
//sınıfların listesini verir

document.querySelector("button").classList.add("invisible");
//Button sınıfına invisible css'ini ekledik.

document.querySelector("button").classList.remove("invisible");
//Button sınıfına invisible css'ini sildik.

document.querySelector("button").classList.toggle("invisible");
//aç kapat

document.querySelector("h1").classList.add("huge");
// Huge diye bir class oluşturduk css'de sonrada h1'e onu uyguladık

document.querySelector("title").textContent;
//sadece metin içeriğini verir (strong italic gbi özellikleri göstermez)

document.querySelector("a").attributes;
// Attributlerimizi gösterir.

document.querySelector("a").getAttribute("href");
// Attribute'mizi görürüz

document.querySelector("a").setAttribute("href","https://www.bing.com");
// Attribute'mizi değiştiririz
