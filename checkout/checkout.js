let products =
JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) :[
  
 {   
    id:1,
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
    Image: "https://i.postimg.cc/gjzTHWM3/ren-2.jpg",
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

make:() =>{
let container=document.getElementById(products)
}

for (const productName in products) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}