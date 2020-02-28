export default class Crane {
    constructor(config){
        config = Object.assign({
            timeout: 500,
            transition: 'ease',
            spyOpacity: 0.5,
            onMoveEnd: null
        }, config)
        for(let key in config) this[key] = config[key]
    }

    move(el, destination){
        return new Promise((res)=>{
            let styles = JSON.parse( JSON.stringify(el.style) )
            let delta = this.getDelta(el, destination)

            el.style.transform = 'translate(0, 0)'
            el.style.transition = `all ${this.timeout}ms ${this.transition}`
            el.style.zIndex = 1000
            el.style.transform = `translate(${delta.x}px, ${delta.y}px)`

            setTimeout(()=>{
                el.style.transition = 'none'
                el.style.transform = ''
                el.style = styles
                destination.appendChild(el)
                res(el)
            }, this.timeout)

        })
    }

    getDelta(el, destination){
        let a = el.getBoundingClientRect()
        let b = this.getFuturePosition(el, destination)
        let delta = {}
        for(let key in a){
            delta[key] = b[key] - a[key]
        }
        return delta
    }

    getFuturePosition(el, destination){
        let spy = document.createElement(el.tagName)
        spy.style = Object.assign(spy.style, {
            position: 'absolute',
            opacity: this.spyOpacity,
            pointerEvents: 'none'
        })

        destination.appendChild(spy)
        let res = spy.getBoundingClientRect()
        destination.removeChild(spy)
        return res
    }

}
