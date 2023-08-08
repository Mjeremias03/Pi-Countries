const { Op } = require('sequelize');
const {Country}= require('../db')

const createCountries = async(name,capital,image) =>{
const newCountrie = await Country.create({
    name,capital,image
})
return newCountrie
};

const countriesBd = async (name) => {
    const { Op } = require('sequelize');

    if (name) {
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        return countries;
    }

    const allCountries = await Country.findAll();
    return allCountries;
};


const getForIdCountries = (id) =>{
    if(id){
        const countriesid = Country.findByPk(id)
        return countriesid
    }else{
        console.log(`no se encontro con ese ${id}`)
    }

};

module.exports = {
createCountries,
countriesBd,
getForIdCountries
}