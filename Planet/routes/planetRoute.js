import express from 'express'
import { addPlanet ,deletePlanet,searchPlanet ,updatePlanet } from '../controller/planetController.js';

const router = express.Router();

router.post("/add",addPlanet);
router.get("/search/:name",searchPlanet)
router.put("/add/:name",updatePlanet)
router.delete("/delete/:name",deletePlanet)


export default router