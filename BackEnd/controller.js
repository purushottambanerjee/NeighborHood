const{Locality}= require('./Model')
//paths
// Create a new Locality
const insertLocality= (async (req, res) => {
    try {
      console.log(req.body)
      const newLocality = new Locality(req.body);
      await newLocality.save();
      res.status(201).json(newLocality);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Get all Localitys
  const getLocality= (async (req, res) => {
    try {
      const Localities = await Locality.find();
      const result = await Locality.listIndexes()
      console.log(result)
      res.status(200).json(Localities);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Get a single Locality by ID
  const getLocalityName=(async (req, res) => {
    try {
      
      const LocalitybyName= await Locality.find({ name: req.params.name});
      res.status(200).json(LocalitybyName);
       
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Update an Locality by ID
  const updateLocality= (async (req, res) => {
    try {
      const Locality = await Locality.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!Locality) {
        return res.status(404).json({ error: 'Locality not found' });
      }
      res.status(200).json(Locality);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete an Locality by ID
    const deleteLocality= (async (req, res) => {
    try {
      const Locality = await Locality.findByIdAndDelete(req.params.id);
      if (!Locality) {
        return res.status(404).json({ error: 'Locality not found' });
      }
      res.status(200).json({ message: 'Locality deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports={
    getLocality,
    getLocalityName,
    insertLocality,
    updateLocality,
    deleteLocality
  }