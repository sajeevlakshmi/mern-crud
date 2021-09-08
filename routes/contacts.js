const express = require('express')
const router = express.Router();

//@route  GET api/auth
//@desc   get logged in user
//@access  Private
router.get('/',(req,res)=>{
    res.send('Get all contacts');
})
//@route  POST api/auth
//@desc   Auth user &get token
//@access  Public
router.post('/',(req,res)=>{
    res.send('add a contacts');
})
router.put('/:id',(req,res)=>{
    res.send('update a contacts');
})
router.delete('/:id',(req,res)=>{
    res.send('delete a contacts');
})


module.exports =router;