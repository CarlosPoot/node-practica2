

const argv = require('yargs')
             .command('crear' , 'Crear una tarea por hacer',{
                 descripcion:{
                     demand:true,
                     alias: 'd',
                     desc: 'Descripcion de la tarea por hacer'
                 }
             })
             .command('actualizar' , "Actualiza alguna tarea creada",{
                 descripcion:{
                    alias: 'd',
                    demand : true
                 },
                 completado: {
                    alias : 'c',
                    default: true,
                    desc : 'Marca como completado o pendiente la tarea'
                } 
             })
             .command('borrar', "Borra una tarea de la lista" ,{
                 descripcion :{
                     demand:true,
                     alias:'d'
                 }
             })
             .help()
             .argv;


module.exports = {
    argv
}