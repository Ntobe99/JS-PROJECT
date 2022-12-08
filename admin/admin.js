let products =
JSON.parse(localStorage.getItem('.products')) ?
JSON.parse(localStorage.getItem('.products')) :[
{   id:1,
    type:"oil",
    productName:"Avalanche",
    Image: "https://i.postimg.cc/66MjxFj1/abst2.jpg",
    price:"R1300"
    
},
{   id:2,
    type:"oil",
    productName:"The modern Hague",
    Image: "https://i.postimg.cc/MZ54KnT5/water-1.jpg",
    price:"R6000"

},
{   id:3,
    type:"oil",
    productName:"Flower garden",
    Image: "https://i.postimg.cc/xjpR4M8w/oil2.jpg",
    price:"R3000"
},
{   id:4,
    type:"oil",
    productName:"Renaisance Maiden",
    Image: "https://i.postimg.cc/sXVctJpr/ren-1.jpg",
    price:"R1000"
},
{   id:5, 
    type:"oil",
    productName:"Road to heaven",
    Image:"https://i.postimg.cc/gjzTHWM3/ren-2.jpg",
    price:"R1350"
},
{   id:6,
    type:"oil",
    productName:"Mermaid enchantress",
    Image: "https://i.postimg.cc/fb7C2PSC/water-2.jpg",
    price:"R1400"
},
{   id:7,
    type:"oil",
    productName:"Flower pot",
    Image: "https://i.postimg.cc/Kj1n2pjd/flower.jpg",
    price:"R1150"
},
{   id:8,
    type:"oil",
    productName:"Hypotize me",
    Image: "https://i.postimg.cc/50MGjvL7/abst1.jpg",
    price:"R1350"
},
]
/***Admin-page***/
//show table
 async function  tableShow(){products.forEach((products)=> {
    document.querySelector("#table-data").innerHTML+=
    `<tr>
        <th scope="row">${products.id}</th>
        <td>${products.productName}</td>
        <td>${products.price}</td>
        <td></td>
        <td><button type="button" class="btn btn-secondary">del</button></td>
        <td><button type="button" class="btn btn-secondary">edit</button></td>
      </tr>
      
      `
 })
 }
 tableShow();
 /*filtering*/
//  
//  function filterArt(c) {
//    var x, i;
//    x = products;
//    if (c == "all") c = "";
//    for (i = 0; i < x.length; i++) {
//     reduceArt(x[i], "show");
//      if (x[i].className.indexOf(c) > -1)addArt(x[i], "show");
//    }
//  }
 
//  function addArt(element, name) {
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for (i = 0; i < arr2.length; i++) {
//      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//    }
//  }
 
//  function reduceArt (element, name) {
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for (i = 0; i < arr2.length; i++) {
//      while (arr1.indexOf(arr2[i]) > -1) {
//        arr1.splice(arr1.indexOf(arr2[i]), 1);     
//      }
//    }
//    element.className = arr1.join(" ");
//  }
 