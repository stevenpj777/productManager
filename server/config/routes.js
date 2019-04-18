var products = require("../controllers/products.js");

module.exports = function(app){

    app.get("/products", products.index)

    app.get("/products/:id", products.show)

    app.post("/add", products.addProduct)

    app.put("/edit/:id", products.editProduct)

    app.delete("/delete/:id", products.deleteProduct)

    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./public/dist/public/index.html"))
    // });
}
