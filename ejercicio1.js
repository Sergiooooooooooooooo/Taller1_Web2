let products = [
    {
        id_product: 1,
        product_name: "Camiseta",
        product_price: 50000,
        product_quantity: 89 
    },
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23 
    },
    {
        id_product: 4,
        product_name: "Correa",
        product_price: 80000,
        product_quantity: 104 
    }
]

let sumaPrecios = products.reduce(function(acumulador, producto) {
    return acumulador + producto.product_price;
}, 0)

console.log("Suma de los precios: ", sumaPrecios);

let sumaStock = products.reduce(function(acumulador, producto){
    return acumulador + (producto.product_price * producto.product_quantity)
}, 0)

console.log("Suma del valor del stock: ", sumaStock);