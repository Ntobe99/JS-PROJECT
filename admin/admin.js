
let  products =JSON.parse(localStorage.getItem('products'));

 function  tableShow()
 {products.forEach((products)=> {
    document.querySelector("#table-data").innerHTML+=
    `<tr>
        <th scope="row" id="id">${products.id}</th>
        <td id="prduct">${products.productName}</td>
        <td id="price">${products.price}</td>
        <td></td>
        <td><button type="button" class="btn btn-danger" id="del" onclick="deleteRow(item)">Del</button></td>
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
  
 function sortData() {
  // document.querySelector("#table-data").innerHTML += ``
  var sort = products.sort((a, b) => (a.productName > b.productName) ? 1 : -1) 
  var sort = products.sort((a, b) => (a.productName > b.productName) ? 1 : -1)
  var sort = products.sort((a, b) => (a.productName > b.productName) ? 1 : -1) 
  console.table(sort);
  tableShow()
  }
  sortData();


let sortBtn =document.querySelector("#sort");
sortBtn.addEventListener('click',(e) =>{
   e.preventDefault();
  // tableShow()
  sortData();
  
});
var products_upt = [];
let add = document.querySelector('#addBtn');

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
    tableShow(); 

})

function deleteRow(item) {
  let ProductItem= products.findIndex(a => {
      return a.id == ProductItem.id
  });
  products.splice(index, 1);
  localStorage.setItem('products', products);
  tableShow();
}  



function EditData(item) {
  this.id = item.id;
  this.productName = document.querySelector('productName').value;
  this.price = document.querySelector('price').value;
  
  
  let itemIndex = products.findIndex((data)=>{
      return data.id === itemIndex.id;
  })
}
products[itemIndex] = {id: this.id, productName: this.productName, 
  price :this.price};
 localStorage.setItem('products', JSON.stringify(products));
 tableShow();

 location.reload();


 const deleteBtn = document.querySelector("#del");
 function deleteContent(id,productName,price){
   var del = localStorage.removeItem("products");
   
   console.log(del);
 }
 deleteContent();
tableShow();




 