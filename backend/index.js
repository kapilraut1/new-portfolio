import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 3000;
const app= express();

app.use(cors());
app.use(express.json());
app.use("/record", records);


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})