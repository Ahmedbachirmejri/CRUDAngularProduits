import express from 'express';
import { addOnce, putOnce, getAll, getOnce, DeletebyId, DeleteAll, 

  sortbyalpha,sortbypriceasc,sortbypricedes} from "../controller/ProductController.js";


const router = express.Router();
router.route("/addproduct")
  .post(
    addOnce
  );

router.route("/update/:id")
  .put(
    putOnce
  );
  router.route("/deleteall").delete( DeleteAll);
  router.route("/deleteid/:id").delete( DeletebyId);
  router.route("/getid/:id").get(getOnce);
  router.route("/getall")
    .get(getAll);
    router.route("/sortbyalpha")
    .get(
      sortbyalpha
    );
    router.route("/priceasc")
    .get(
      sortbypriceasc
    );
    router.route("/pricedec")
    .get(
      sortbypricedes
    );
export default router;
