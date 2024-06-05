//funcion agnostica auto convocada
//agnosticas porque no posee nombre y auto convocada por los ()
//schema ( () => {})()
const { envs } = require("./config/env");
const { startServer } = require("./server/server");

const main=()=>{
    console.log("Función principal")    
    console.log(envs)
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion asincrona
(async ()=> {
    main()
})()