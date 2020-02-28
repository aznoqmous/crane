import Crane from './crane'

document.addEventListener('DOMContentLoaded', ()=>{

    let archives = [...document.querySelectorAll('.fa-archive')]
    let destinations = [...document.querySelectorAll('.card')]

    let crane = new Crane({})

    run()

    function run(){

        return new Promise(res =>{
            let rand = Math.floor( Math.random() * archives.length )
            let archive = archives[rand]
            let availableDestinations = destinations.filter((dest)=>{
                return archive.parentElement != dest
            })

            rand = Math.floor( Math.random() * availableDestinations.length )
            let destination = availableDestinations[[rand]]

            crane.move(archive, destination)
            .then(run)
        })

    }



})
