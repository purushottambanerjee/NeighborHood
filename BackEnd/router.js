const express = require('express')
const router = express.Router()

const{getLocality, insertLocality, updateLocality, deleteLocality,getLocalityName}=require('./controller.js')

//paths
// Create a new Locality
router.post('/newLocality',insertLocality);
  
// Get all Localitys
router.get('/locality',getLocality);

// Get a single Locality by ID
router.get('/locality/:name',getLocalityName);

// Update an Locality by ID
router.patch('/locality/:id',updateLocality);

// Delete an Locality by ID
router.delete('/locality/:id',deleteLocality);
module.exports = router