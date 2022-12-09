let products = JSON.parse(localStorage.getItem('items'))

function displayed() {
    products.forEach((items) => {
        document.querySelector('.table').innerHTML += `
        <tr>
            <th scope="row">${items.id}</th>
            <td>${items.description.productName}</td>
            <td>${items.description.productSize}</td>
            <td>${items.description.productColor}</td>
            <td>R ${items.description.price}</td>
            <td>
            <i onClick="" class="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#Modal1"></i> 
            <i onClick="deleteIt()" class="fa-solid fa-trash"></i>
            </td>
        </tr>`
    })
};

displayed();

let add = document.querySelector('#addProduct');

add.addEventListener('click', () => {
    let name = document.querySelector('#productName').value;
    let image = document.querySelector('#image').value;
    let size = document.querySelector('#productSize').value;
    let color = document.querySelector('#productColor').value;

    products.push(
        {
            
        }
    )
})


