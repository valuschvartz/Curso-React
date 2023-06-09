const products = [
    {id: '1', name: 'Macarons', price:15000, category: 'Comida', img: 'https://lovefoodfeed.com/wp-content/uploads/2023/01/Macarons-px-1200-01-1.jpg', stock: 50, description:'Clase de macarons'},
    {id: '2', name: "Torta", price:20000, category: 'Comida', img: 'https://i.pinimg.com/originals/cc/11/4b/cc114be210039e78db2381b0423df1aa.jpg', stock: 50, description:'Clase de tortas'},
    {id: '3',name: 'Viaje',price: 40000,category: 'Comida',img: 'https://news.bit2me.com/wp-content/uploads/2021/02/Miami-y-Nueva-York-piensan-en-Bitcoin-para-el-pago-de-salarios-y-cobro-de-impuestos-.jpg',stock: 50,description: 'Tour pastelero por Miami y Nueva York'},
        
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === productoId))
    }, 500)
  })  
}