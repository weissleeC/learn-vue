const Koa = require("koa");
const parser = require("koa-parser");
const router = require("koa-router")();
const cors = require("koa2-cors");
const static = require("koa-static");
const app = new Koa();

app.use(cors());
app.use(parser());
app.use(static(`${__dirname}/public`));
app.use(router.routes());

// 初始页面
app.use((ctx, next) => {
  ctx.body = "hi api";
});

// 数据库模拟
const fruitList = ["🍌", "🍎", "🍐", "🍒"];
const studentList = [
  { id: 1, name: "lee", age: 18 },
  { id: 2, name: "tom", age: 20 },
  { id: 3, name: "avery", age: 30 },
];

// get
router.get("/fruits", async (ctx) => {
  ctx.body = fruitList;
});
router.get("/student", async (ctx) => {
  ctx.body = studentList;
});

// post
router.post("/fruits", async (ctx) => {
  let fruit = ctx.request.body.fruit;
  fruitList.push(fruit);
  ctx.body = true;
});
router.post("/student", async (ctx) => {
  let student = ctx.request.body.student;
  studentList.push(student);
  ctx.body = true;
});

// delete
router.delete("/fruits/:index", async (ctx) => {
  let index = ctx.params.index;
  fruitList.splice(index, 1);
  ctx.body = true;
});
router.delete("/student/:id", async (ctx) => {
  let id = ctx.params.id;
  studentList.map((item, index) => {
    if (item.id == id) {
      studentList.splice(index, 1);
    }
  });
  ctx.body = true;
});

app.listen(3030, () => {
  console.log("server is runing on http://localhost:3030/");
});
