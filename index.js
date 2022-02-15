import express from "express";
import { db, collection, addDoc } from './config/configuracion_firebase.js'

const app = express()

app.listen('8000', (req, res) => {
    console.log('App iniciada en localhost://8000 ...')
})

app.set('views', './vistas')
app.set('view engine', 'ejs')

app.use(express.static('./estilos'))
app.use(express.urlencoded({extended:true}))

app.get('/', async(req, res) => {
    res.render('index')
})

app.post('/agregar', (req, res) => {
    const contacto = {
        nombre: req.body.nombre,
        numero: req.body.numero,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
    }

    // setDoc(doc(db, 'agenda_contacto', `cnc-${contacto.nombre}`), contacto) // El dev crea el id
    addDoc(collection(db, 'agenda_contacto'), contacto) // Firestore crea el id
    res.redirect('/')
})