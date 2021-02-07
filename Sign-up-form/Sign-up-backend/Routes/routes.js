
const express = require('express');
const signUpTemplateCopy = require('../Models/signupModel')
const router = express.Router();
const bcrypt =require('bcrypt')

router.post('/signup', async(req, res)=> {

    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router