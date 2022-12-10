let checkoutList = JSON.parse(localStorage.getItem('#checkout')) ? 
JSON.parse(localStorage.getItem('checkout')) : [];


let tableBody = document.querySelector('#table-data');

function checkoutShow() {
    try{
        if(!checkoutList.length) 
        throw "add products to checkout list";
        let sortData = checkoutList.sort((a, b)=> a.id - b.id);
        console.log(sortData);
        let groupData = sortData.reduce((a, b)=>{
            a[b.id] = a[b.id] ?? [];
            a[b.id].push(b)
            return a
        }, {});

        console.log(groupData);
        let amountDue = 0;
        for(let index in groupData){
            let grandTotal = groupData[index].length * groupData[index][0].amount;  
            amountDue += grandTotal;
            tableBody.innerHTML +=
             `
                <tr>
                <th scope="row" id="id">${groupData[index].id}</th>
                <td id="product">${groupData[index].productName}</td>
                <td id="price">${groupData[index].price}</td>
                <td></td>
                </tr>
            `
        }
        
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
}
// checkoutShow();
// /***clear items from  local storage */
// let clearAll = document.querySelector('#clearBtn');
// clearAll.addEventListener('click', ()=>{
//     localStorage.removeItem('checkout');
//     tableBody.innerHTML = "Please add the product to the checkout list.";
// })
// // Update
