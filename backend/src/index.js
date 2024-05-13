import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import userRoutes from "../routes/userRoutes.js";
import instructorRouter from "../routes/instructorRoutes.js";
import connectDb from "../config/db.js";

const app = express();

// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   Credentials:true,

// };
// app.use(cors(corsOptions));
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,

}));

app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/instructor", instructorRouter);



const port = 3000;
connectDb();



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
