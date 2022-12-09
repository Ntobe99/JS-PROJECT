let products =
JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) :[
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
    price:"1000"
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
let products_serialized = JSON.stringify(products);
console.log(products_serialized );
localStorage.setItem("products",products_serialized);
// console.log(localStorage);
/**Admin-page**/
//show table
 async function  tableShow(){products.forEach((products)=> {
    document.querySelector("#table-data").innerHTML+=
    `<tr>
        <th scope="row" id="id">${products.id}</th>
        <td id="prduct">${products.productName}</td>
        <td id="price">${products.price}</td>
        <td></td>
        <td><button type="button" class="btn btn-danger" id="del">Del</button></td>
        <td><!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit-products
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="mb-3">
              <form>
              <label for="exampleInputEmail1" class="form-label">product name</label>
              <input type="email" class="form-control" id="text" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">input product name</div>
            </div>
            <div class="mb-3">
              <label for="te" class="form-label">Price</label>
              <div id="emailHelp" class="form-text">input price</div>
              <input type="number" class="form-control" id="exampleInputPassword1">
            </div>
              </div>
              </form>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div></td>
      </tr>
      
      `
 })
 }
 tableShow();
 
 function sortData(){
  document.querySelector("#table-data").innerHTML+= ``
    var sort = products.sort((a, b) => (a.productName > b.productName) ? 1 : -1)
    
    console.table(sort);

    
  }
  sortData();


let sortBtn =document.querySelector("#sort");
sortBtn.addEventListener('click',(e) =>{
  tableShow();
  sortData();
  // preventDefault();
});
let prods = [];
// Button
let add = document.querySelector('#addBtn');
// let display = document.querySelector('#display');
// Add event listener
add.addEventListener('click', (e) => {
    e.preventDefault();
    let id = document.querySelector('#id').value;
    let productName = document.querySelector('#product').value;
    let price = document.querySelector('#price').value;
    
    products.push(
        {
            id,
            productName,
            price
        }
    )
    localStorage.setItem('data', JSON.stringify(products));
})
tableShow();
//  const deleteBtn = document.querySelector("#del");
//  function deleteContent(id,productName,price){
//    var del = localStorage.removeItem("products");
//    console.log(del);
//  }



 