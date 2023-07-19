import mongoose from "mongoose"; 
const {Schema,model} = mongoose;
const ProductSchema = new Schema(
  {
    nom: { type: String , required: true },
    prix: {type : Number , required: true},
    quantite: {type : Number , required: true},
    image: { type: String },
  },
  
  {
    timestamps: { currentTime: () => Date.now() },
  }
)

export default model("Product",ProductSchema);