const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'this is a testing route' })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'this is products route' })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}