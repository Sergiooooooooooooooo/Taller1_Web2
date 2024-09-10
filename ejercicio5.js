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

let productosOchentaK = products.filter(function(products){
    return products.product_price > 80000 & products.product_quantity < 100
  }
)
let iva = productosOchentaK.map(function(products){

    let product_tax_value = products.product_price * (19/100)
    return {
        ...products,
        product_tax_value: product_tax_value,
        product_total_value: product_tax_value + products.product_price 
    }
})
console.log(iva)