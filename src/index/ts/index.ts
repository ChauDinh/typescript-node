import express from "express";

const app = express();

type Add = (x: Params) => number;

interface Params {
  a: number;
  b: number;
}

const add: Add = x => {
  return x.a + x.b;
};

app.get("/", (req: any, res) => {
  req.name = "Chau";
  console.log(add({ a: 1, b: 2 }));
});

app.listen(30001, () => {
  console.log("hello from typescript");
});

// I use interface to type object and type to type others.
