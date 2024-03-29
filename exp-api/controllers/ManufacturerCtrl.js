const Manufacturer = require('../models/manufacturer');
const BaseCtrl = require('./BaseCtrl');

class ManufacturerCtrl extends BaseCtrl {
    constructor(model){
        super(model)
    }

    createEntity(req, res) {
        let manuf = new Manufacturer({
            title: req.body.title
        });
        manuf.save((err, data) => {
            if(err) {
                return res.status(400).json({message: 'Error create manufacturer', err});
            }
            res.json({message: 'Manufacturer was created', data});
        });
    }

    updateEntity(req, res) {
        let reqBody = {title: req.body.title};
        Manufacturer.findByIdAndUpdate(req.params.id, reqBody, {runValidators: true}, (err, data) => {
            if(err) {
                return res.status(400).json({message: 'Error update manufacturer', err});
            }
            res.json({
                message: 'Updated',
                id: data._id
            });
        });
    }
}

module.exports = new ManufacturerCtrl(Manufacturer);