
class ProductManager {
    constructor () { this.products = []
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        if (title && description && price && thumbnail && code && stock) {
            const isExixtCode = this.products.map(p =>p.code).includes(code);
            if (isExixtCode) {
                console.log('codigo existente')
            } else {
                this.products.push ({
                    id: this.products.length,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                })
            }
        } else {
                console.log('falto ingresar algunos de los valores')
            }
    }
}