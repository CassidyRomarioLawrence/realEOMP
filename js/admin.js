let products = JSON.parse(localStorage.getItem('items'))

function tableDisplay() {
    products.forEach((items) => {
        document.querySelector('.table').innerHTML += `
        <tr>
            <th scope="row">${items.id}</th>
            <td>${items.description.productName}</td>
            <td>${items.description.productSize}</td>
            <td>${items.description.productColor}</td>
            <td>R ${items.description.price}</td>
            <td>
            <i class="fa-solid fa-pen-to-square" onclick=""></i> 
            <i class="fa-solid fa-trash" onclick=""></i>
            </td>
        </tr>`
    })
};

tableDisplay(products);

