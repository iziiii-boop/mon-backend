const express = require('express');
const app = express();
app.get('/offers', (req,res)=>res.json({ ok:true, q:req.query.q }));
module.exports = app;