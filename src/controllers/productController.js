const { db } = require("../config/db")

module.exports = {
    getProducts: (req, res, next) => {
        db.query("select id, name, price from products;", (err, result) => {
            if (err) {
                console.log("Error getProducts:", err);
                next(err); // Midleware 
                // return res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    // ----- CHECK DETAILS -----
    // getProductsDetail: (req, res, next) => {
    //     db.query(`Select * from products where id=${req.params.id}`, (err, results) => {
    //         if (err) {
    //             console.log("Error getDetail:", err);
    //             next(err); // Midleware
    //             // return res.status(500).send(err);
    //         }
    //         res.status(200).send(results[0]);
    //     })
    // },

    // ----- ADD -----
    postProducts: (req, res, next) => {
        const { namaproduct, categoryid, price, weight, deskripsi } =JSON.parse( req.body.data);
        db.query(`INSERT INTO products (namaproduct, categoryid, price, fotoproduk, weight, deskripsi) 
        values ('${namaproduct}', ${categoryid}, '${price}', '${weight}', '${deskripsi}');`, (err, result) => {
            if (err) {
                console.log("Error postProducts:", err);
                next(err); // Midleware
                // return res.status(500).send(err);
            }
            res.status(201).send({
                success: true,
                result
            });
        })
    }

    // ----- UPDATE -----
    // patchProducts: (req, res, next) => {
    //     let setValue = [];
    //     for (const key in req.body) {
    //         setValue.push(`${key}='${req.body[key]}}'`)
    //     }
    //     console.log(setValue);
    //     console.log(setValue.join());
    //     console.log(`update products set ${setValue.join()} where id=${req.params.id};`);
    //     dbProduct.query(`Update products set ${setValue} where id =${req.params.id};`, (err, result) => {
    //         if (err) {
    //             console.log("Error postProducts:", err);
    //             next(err); // Midleware
    //             // return res.status(500).send(err);
    //         }
    //         res.status(201).send({
    //             success: true,
    //             result
    //         })
    //     })


    // },

    // ----- DELETE -----
    // deleteProducts: (req, res, next) => {
    //     db.query(`delete from products where id = ${req.params.id}`, (err, result) => {
    //         if (err) {
    //             console.log("Error getDelete:", err);
    //             next(err); // Midleware
    //             // return res.status(500).send(err);
    //         }
    //         res.status(201).send({
    //             success: true,
    //             result
    //         });
    //     })
    // }


}