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
    if (price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.innerHTML = result
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
    localStorage.setItem('product',  JSON.stringify(dataPro))

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
    let table ='';
    for (let i=0; i < dataPro.length;i++){
        table = dataPro[i].title
        console.log(table)
    }

    //document.getElementById('tbody').innerHTML = table;
}