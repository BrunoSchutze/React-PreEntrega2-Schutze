const misProductos = [
    { id: "1", nombre: "Nike Dunk Low - Black", stock:10, precio: 45000, img: "../img/Nike Dunk Low - Black.webp", idCat: "1" },
    { id: "2", nombre: "Nike Dunk Low - Brown", stock:10, precio: 50000, img: "../img/Nike Dunk Low - Brown.webp", idCat: "1" },
    { id: "3", nombre: "Nike Dunk Low - Green", stock:10, precio: 55000, img: "../img/Nike Dunk Low - Green.webp", idCat: "1" },
    { id: "4", nombre: "Nike Dunk Low - Grey", stock:10, precio: 5500, img: "../img/Nike Dunk Low - Grey.webp", idCat: "1" },
    { id: "5", nombre: "Nike Dunk Low - Orange", stock:10, precio: 56000, img: "../img/Nike Dunk Low - Orange.webp", idCat: "1" },
    { id: "6", nombre: "Nike Dunk Low - Pink", stock:10, precio: 50000, img: "../img/Nike Dunk Low - Pink.webp", idCat: "1" },
    { id: "7", nombre: "Nike Dunk Low - Purple", stock:10, precio: 60000, img: "../img/Nike Dunk Low - Purple.webp", idCat: "1" },
    { id: "8", nombre: "Nike Dunk Low Retro - Sky blue", stock:10, precio: 55000, img: "../img/Nike Dunk Low Retro - Sky blue.webp", idCat: "1" },
    { id: "9", nombre: "Nike Dunk Low Twist - Light Green", stock:10, precio: 8000, img: "../img/Nike Dunk Low Twist - Light Green.webp", idCat: "1" },
    { id: "10", nombre: "Nike Air Dunk Jumbo - Black and White", stock:10, precio: 120000, img: "../img/Nike Air Dunk Jumbo - Black and White.webp", idCat: "1" },
    { id: "11", nombre: "Nike Dunk Low - Industrial Blue Sashiko", stock:10, precio: 150000, img: "../img/Nike Dunk Low - Industrial Blue Sashiko.png", idCat: "1" },
    { id: "12", nombre: "Nike SB Dunk Low - Grateful Yellow", stock:10, precio: 250000, img: "../img/Nike SB Dunk Low - Grateful Yellow.png", idCat: "1" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


/*Actividad n° 3 Detalle de un Producto I */

/*Creamos una función similar a la anterior pero que solo nos retorne un solo item*/

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}