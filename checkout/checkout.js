let checkoutList = JSON.parse(localStorage.getItem('#checkout')) ? 
JSON.parse(localStorage.getItem('checkout')) : [];


let tableBody = document.querySelector('tBody');
(function checkoutShow() {
    try{
        if(!checkoutList.length) 
        throw "add product to checkout list";
        let sortData = checkoutList.sort((a, b)=> a.id - b.id);
        let groupData = sortData.reduce((a, b)=>{
            a[b.id] = a[b.id] ?? [];
            a[b.id].push(b)
            return a
        }, {});
        
        console.log(groupData);
        let amountDue = 0;
        for(let i in groupData){
            let grandTotal = groupData[i].length * groupData[i][0].amount;  
            amountDue += grandTotal;
            tableBody.innerHTML +=
             `
                <tr>
                <th scope="row" id="id">${products.id}</th>
                <td id="prduct">${products.productName}</td>
                <td id="price">${products.price}</td>
                <td></td>
                </tr>
            `
        }
        // Display the amount due
        tableBody.innerHTML +=`
            <tr class="amount-due">
                <td></td>                    
                <td></td>                    
                <td>Amount Due:</td> 
                <td>${amountDue}</td>
            </tr>
        `
    }catch(e) {
        tableBody.innerText = e;
    
    }
})();
/***clear items from  local storage */
let clearAll = document.querySelector('#clearBtn');
clearAll.addEventListener('click', ()=>{
    localStorage.removeItem('checkout');
    tableBody.innerHTML = "Please add the product to the checkout list.";
})
