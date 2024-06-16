const server=require("./app");
const PORT= process.env.PORT||7000;

server.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})