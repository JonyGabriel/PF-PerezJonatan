import graficas from "./img/3060tiPalit.jpg";
import hardware from "./img/PMB560.jpg";
import procesador from "./img/i7procesador.jpg";
import pcarmadas from "./img/PcGamaMedia.jpg";



const products = [

    {
        id: "1",
        name: "RTX 3060 TI",
        price: "261.000",
        category: "graficas",
        img:  graficas ,
        stock: 5,
        color: "Gris",
        description: "GEN 3000"
    },
    
    {
        id:"2",
        name: "ASUS | Placa madre B560",
        price: "64.000",
        category:"hardware",
        img: hardware,
        stock:5,
        description:"S1200"
    },
    {
        id:"3",
        name: "Procesador I7 12700f",
        price: "250.000",
        category:"procesadores",
        img: procesador,
        color:"GRIS",
        stock:8,
        description:"LGA1200"
    },
    {
        id:"4",
        name: "PC Gamer",
        price: "490.000",
        category:"pcarmadas",
        img: pcarmadas,
        color: "Dependiente a stock",
        stock:3,
        description:"i5 12400f + RX 6600"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
}