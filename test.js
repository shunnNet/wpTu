const compiler = require("vue-template-compiler")
const fs = require("fs")

fs.readFile("./src/sample.vue", "utf-8",(err, s)=>{
  console.log(compiler.parseComponent(s))
})
