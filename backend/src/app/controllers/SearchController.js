const Dev = require('../models/Dev');
const parseStringAsArray = require('../../utils/parseStringAsArray');

module.exports = {
  async index(req,res){
    const { latitude, longitude, techs } = req.query;
    if(!techs) {
      return res.status(401).json({error: 'Erro, preencha o campo de pesquisa'});
    }
  

    const techList = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techList,
      },
      location: {
        $near: {
          $geometry: {
            coordinates: [Number(longitude), Number(latitude)]
          },
          $maxDistance: 10000,
        },
      }
    });

    return res.json(devs)
  }
}