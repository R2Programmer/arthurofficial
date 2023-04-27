const router = require("express").Router()
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


router.post('/contact',(req, res)=>{
    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0)
    {
        return res.json({msg: "please fill all the fields!"})
    }

        const msg = {
        to: 'arthurclores@gmail.com',
        from: 'cloresarthur28@gmail.com',
        subject: `message from ${(data.name)}`,
        text: 'Hi',
            html:`
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message:</h3>
            <p>${data.message}</p>`,
        };
        sgMail.send(msg)
        .then(() => res.status(200).json({msg: 'Thank you for contacting ARTHUR'}))
        .catch(error => res.status(500).json({msg: error}));
})

module.exports = router;