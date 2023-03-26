import Product from "../models/product"




const showProducts = async (req, res) => {
    try {
        //obtengo el array guardado en BD
        const productList = await Product.find()
        res.status(200).json(productList)


    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'No se encontró el producto' })

    }
}




const createProduct = async (req, res) => {
    try {
        console.log(req.body);


        //desestruturar
        const { title, price, imageUrl, category, desc } = req.body

        //validar



        //crear un objeto para guardarlo en BD
        const newProduct = new Product({
            // title: req.body.title,
            // price: req.body.price,
            // imageUrl: req.body.imageUrl,
            // category: req.body.category,
            // desc: req.body.desc,
            title,
            price,
            imageUrl,
            category,
            desc,
        })

        //guardar en BD
        await newProduct.save()
        res.status(201).json({ message: "El producto se creo correctamente" })




    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error al crear el producto' })
    }
}





const getOneProduct = async (req, res) => {
    try {
        console.log(req.params);

        //Busco el producto en mi BD
        const productSearch = await Product.findById(req.params.id)
        res.status(200).json(productSearch)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Error al buscar el producto solicitado' })
    }
}





















const deleteProduct = async (req, res) => {
    try {

        //buscar el producto por su ID y eliminarlo
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "El producto se elimino correctamente" })

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Error al buscar el producto solicitado' })
    }
}
const updateProduct = async (req, res) => {
    try {
        //busco el producto por su id y lo modifico con los datos que llegan del body

        await Product.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "El producto se actualizó correctamente" })


    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'No se encontró el producto' })
    }
}


export { showProducts, createProduct, getOneProduct, deleteProduct, updateProduct }