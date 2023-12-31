require('dotenv').config()
const mysql = require('mysql2/promise');
const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const path = require('path')




const PORT = process.env.PORT || 3001


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
});

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

//Kysymyksen hakeminen tietokannasta ja vaihtoehtojen näyttäminen järjestyksessä. Kaikki /kysymys .get haut on samoja. 
app.get('/kysymys',upload.none(), async (req, res) => {

    const sql = 'SELECT id, kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4 FROM visailu_kysymykset WHERE id = 1'

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(sql)
        console.log(sql)
        console.log(rows);
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

//Kysymyksen vastauksen lisääminen .post komennolla pelaajan_vastaus attribuuttiin. Kaikki /kysymys .post haut on samoja.
app.post('/kysymys', upload.none(), async (req, res) => {

    const pelaajan_vastaus = req.body.pelaajan_vastaus


    const asetaVastaus = 'UPDATE visailu_kysymykset set pelaajan_vastaus = ? WHERE id = 1'

    try {
        const con = await mysql.createConnection(conf)
        await con.execute(asetaVastaus, [pelaajan_vastaus])
        res.status(200).send('Vastaus tallennettu')
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }

})

app.get('/kysymys1',upload.none(), async (req, res) => {

    const sql = 'SELECT id, kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4 FROM visailu_kysymykset WHERE id = 2'

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(sql)
        console.log(sql)
        console.log(rows);
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

app.post('/kysymys1', upload.none(), async (req, res) => {

    const pelaajan_vastaus = req.body.pelaajan_vastaus


    const asetaVastaus = 'UPDATE visailu_kysymykset set pelaajan_vastaus = ? WHERE id = 2'

    try {
        const con = await mysql.createConnection(conf)
        await con.execute(asetaVastaus, [pelaajan_vastaus])
        res.status(200).send('Vastaus tallennettu')
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }

})

app.get('/kysymys2',upload.none(), async (req, res) => {

    const sql = 'SELECT id, kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4 FROM visailu_kysymykset WHERE id = 3'

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(sql)
        console.log(sql)
        console.log(rows);
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

app.post('/kysymys2', upload.none(), async (req, res) => {

    const pelaajan_vastaus = req.body.pelaajan_vastaus


    const asetaVastaus = 'UPDATE visailu_kysymykset set pelaajan_vastaus = ? WHERE id = 3'

    try {
        const con = await mysql.createConnection(conf)
        await con.execute(asetaVastaus, [pelaajan_vastaus])
        res.status(200).send('Vastaus tallennettu')
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }

})

app.get('/kysymys3',upload.none(), async (req, res) => {

    const sql = 'SELECT id, kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4 FROM visailu_kysymykset WHERE id = 4'

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(sql)
        console.log(sql)
        console.log(rows);
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

app.post('/kysymys3', upload.none(), async (req, res) => {

    const pelaajan_vastaus = req.body.pelaajan_vastaus


    const asetaVastaus = 'UPDATE visailu_kysymykset set pelaajan_vastaus = ? WHERE id = 4'

    try {
        const con = await mysql.createConnection(conf)
        await con.execute(asetaVastaus, [pelaajan_vastaus])
        res.status(200).send('Vastaus tallennettu')
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }

})

app.get('/kysymys4',upload.none(), async (req, res) => {

    const sql = 'SELECT id, kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4 FROM visailu_kysymykset WHERE id = 5'

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(sql)
        console.log(sql)
        console.log(rows);
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

app.post('/kysymys4', upload.none(), async (req, res) => {

    const pelaajan_vastaus = req.body.pelaajan_vastaus


    const asetaVastaus = 'UPDATE visailu_kysymykset set pelaajan_vastaus = ? WHERE id = 5'

    try {
        const con = await mysql.createConnection(conf)
        await con.execute(asetaVastaus, [pelaajan_vastaus])
        res.status(200).send('Vastaus tallennettu')
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }

})

// /tulos vertaa pelaajan antamia vastauksia oikeisiin vastauksiin ja antaa sitten yhden pisteen oikeasta vastauksesta ja näyttää pisteet 'pelaajan pisteet/5'.
app.get('/tulos', upload.none(), async (req,res) => {
    const vastaukset = 'SELECT vastaus, pelaajan_vastaus FROM visailu_kysymykset'

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(vastaukset)
        
        let pisteet = 0
        rows.forEach(row => {
            if(row.vastaus === row.pelaajan_vastaus) {
                pisteet++
            }
        })
        const tulos = `${pisteet}/5`
        res.status(200).json({"pisteesi ": tulos})
    } catch (error) {
        res.status(500).send(error.message)
    }
})
// .post tulos tyhjentää vastauksen tietokannasta, vaikka se ei ole tarpeen sillä '/kysymys' .postilla ne päivittävät (update) tietokannan arvot joten ei ole väliä onko siinä mitään arvoa.
app.post('/tulos', upload.none(), async (req,res) => {
    const tyhjennys = 'UPDATE visailu_kysymykset set pelaajan_vastaus = " " WHERE  id BETWEEN 1 AND 5 '

    try {
        const con = await mysql.createConnection(conf)
        const [rows] = await con.execute(tyhjennys)

        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

//Yritys satunnaisesti luoda kysymys, mutta ongelmia tuli client puolen kanssa kun kysymyksen Id:n olisi pitänyt täsmätä .get ja .post haun kanssa.
app.get('/rand',upload.none(), async (req, res) => {

    const pelaajan_vastaus = req.body.pelaajan_vastaus
    const kysymysId = req.body.id

    const sql = 'SELECT id, kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4 FROM visailu_kysymykset ORDER BY RAND() LIMIT 1'

    try {
        const con = await mysql.createConnection(conf)
        await con.execute(sql, [pelaajan_vastaus, kysymysId])
        console.log(sql)
        console.log(rows);
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

// Aloitus sivu jossa on ohjeet. 
app.get('/', (req,res) => {
    res.send('Tervetuloa tietovisailun pariin! Liikut endpointteja käyttäen josta löydät visailukysymyksiä joihin voit vastata ja lopuksi näet kuinka monta sait oikein. Voit myös lisätä kysymyksiä itse. Siirry "/kysymys" kohtaa aloittaaksesi. Seuraava kysymys on osoitteessa "/kysymys1. Kysymyksiä on yhteensä viisi kappaletta ja lopuski "/tulos" sivulta näet oman tuloksesi.')
})

