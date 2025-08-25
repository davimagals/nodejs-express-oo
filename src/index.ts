import express from "express";
import animalRoutes from "./routes/animalRoutes";

const app = express();
app.use(express.json());

app.use("/animal", animalRoutes);

app.listen(3000, () => {
  console.log("Rodando...");
});
