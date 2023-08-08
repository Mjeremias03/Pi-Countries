const {Activity} = require('../db')
const getActivity = async (req,res) =>{
try {
    const newActivity = await Activity.findAll()
    res.status(200).json(newActivity)
} catch (error) {
    res.status(400).json({error})
}
}

module.exports = {
    getActivity
}