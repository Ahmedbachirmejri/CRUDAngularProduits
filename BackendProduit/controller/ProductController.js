import Product from "../models/Product.js";

export async function addOnce(req, res) {
  try {
    const { nom, prix, quantite } = req.body;

    const newProduct = await Product.create({
      nom: nom,
      prix: prix,
      quantite: quantite,
    });

    console.log(newProduct);

    res.status(200).json({
      newProduct
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getOnce  (req, res) {
  const product = await Product.findById(req.params.id)
  res.send(product)
}


export async function putOnce(req, res)
 {
  let newProduct = {};
  if(req.file == undefined) {
    newProduct = {
      nom: req.body.nom,
      quantite: req.body.quantite,
      prix: req.body.prix,
        }
  }
  else {
    newProduct = {
      nom: req.body.nom,
      quantite: req.body.quantite,
      prix: req.body.prix,

      
    }
  }
  
  Product.findByIdAndUpdate(req.params.id, newProduct)
    .then((doc1) => {
      Product.findById(req.params.id)
        .then((doc2) => {
          res.status(200).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
export async function getAll  (req, res) {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
export async function DeletebyId (req, res) {
  
    let product = await Product.findById(req.params.id)
    if (product) {
      await product.remove()
      return res.send({ message: "product" + product._id + " have been deleted" })
    } else {
      return res.status(404).send({ message: "product does not exist" })
    }
  
}
export async function DeleteAll  (req, res) {
    await Product.remove({})
    res.send({ message: "All Products have been deleted" })
  
}

export async function sortbyalpha(req, res) {
  const products = await Product.find().sort({ nom: 'asc' });
  res.status(200).json(products);
  
}
export async function sortbypriceasc(req, res) {
  const products = await Product.find({}).sort({ prix: 1 });
  res.status(200).json(products);
  
}

export async function sortbypricedes(req, res) {
  const products = await Product.find({}).sort({ prix: -1 });
  res.status(200).json(products);
  
}
