import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();


const secret_key = process.env.SECRET_KEY;

export const generateToken = (email) => {
  return jsonwebtoken.sign({ data: email }, secret_key, { expiresIn: "1d" });

};

// admintoken

export const adminToken = (user) => {
  return jsonwebtoken.sign({ data: user.id, role: user.role }, secret_key, {
    expiresIn: "2d",
  });
};
