let IIFE = (() => {
    let setVideo = (url, id) => {
        document.getElementById(id).setAttribute("src", url)
    }

    return {
        setVideo
    }
})()

class Multimedia {
    #url
    constructor(url) {
        this.#url = url
    }

    get url() {
        return this.#url
    }

    set url(newUrl) {
        this.#url = newUrl
    }

    setInicio() {
        return 'Este metodo es para realizar un cambio en la URL del video'
    }
}

class Reproductor extends Multimedia {
    #id
    constructor(url, id) {
        super(url)
        this.#id = id
    }
    playMultimedia() {
        IIFE.setVideo(this.url,this.#id)
    }
    setInicio(seg){
        let nuevoUrl =`${this.url}&amp;start=${seg}`
        IIFE.setVideo(nuevoUrl,this.#id)
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/GgZduH8OJgs?si=Y8uzcjJg_bKYqQ6V","musica")
const pelicula = new Reproductor("https://www.youtube.com/embed/S9yAaFs6mgk?si=YEx28zVyJ6rOOYXo","peliculas")
const serie = new Reproductor("https://www.youtube.com/embed/LPzG0PnOzgA?si=ALf_vjIg25n-7jNQ","series")

musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

pelicula.setInicio(30)