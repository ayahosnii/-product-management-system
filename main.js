let title = document.getElementById('title');
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let search = document.getElementById("search");
let tbody = document.getElementById("tbody");
let deleteAllBtn = document.getElementById("deleteAll");
let searchTitle = document.getElementById("searchTitle");
let searchCategory = document.getElementById("searchCategory");

function getTotal()
{
    //console.log('done')
    if (price.value !== ''){
        total.innerHTML = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.style.background='#ffaf00'
    }
}

//create project
let dataPro;
if (localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else {
    dataPro = [];
}
submit.onclick = function ()
{
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

    dataPro.push(newPro)

    //Save Localstorage
    localStorage.setItem("product", JSON.stringify(dataPro));

    clearData()
    showData()
}

function clearData()
{
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}
function showData(){
    let table = "";
    for (let i=1; i < dataPro.length;i++){
        table += `
        <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button id="update">Update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll')
    if (dataPro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All</button>
        `
    }else {
        btnDelete.innerHTML = ""
    }
}
showData()


function deleteData(i){
    dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro)
    showData();
}

function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
}