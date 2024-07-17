export function initialValues(product) {
  return {
    name: product.name,
    description: [] || product.description,
category: "" || product.category,
    price: "" || product.price,
    cantidad: "" || product.cantidad,
    image: "" || product.image,
    formato: [] || product.formato,
    url: "" || product.url,
    balance: [] || product.balance,
    stock: "" || product.stock,
    mercadoLibre: "" || product.mercadoLibre,
    urlMl: "" || product.urlMl,
  };
}

