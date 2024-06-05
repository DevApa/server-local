//funcion agnostica auto convocada
//agnosticas porque no posee nombre y auto convocada por los ()
//schema ( () => {})()
//const { startServer } = require("./server/server");
import { startServer } from "./server/server.js";
//const { envs } = require("./config/env.js");
import { envs } from "./config/env.js";



const main=()=>{
    console.log("Función principal")    
    console.log(envs)
    // startServer({
    //     port: envs.PORT,
    //     public_path: envs.PUBLIC_PATH
    // })
}

//funcion asincrona
(async ()=> {
    main()
})()