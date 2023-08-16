const Picture = require('../models/Picture');
const fs = require('fs');

exports.create = async (req, res) => {
    try {
        const {name} = req.body;
        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path,
        });

        await picture.save();

        res.status(201).json({
            picture,
            message: 'Imagem salva com sucesso'
        })
    } catch (error) {
        res.status(500).json({message: "Houve um erro ao salvar a imagem."});
    }
};

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find();
        res.json(pictures);
    } catch (error) {
        res.status(500).json({message: "Houve um erro ao buscar as imagens."});
    }
};

exports.remove = async(req, res) => {
    try {
        const _id = req.params.id;
        const picture = await Picture.findById(_id);

        if (!picture) {
            return res.status(404).json({message: 'Imagem não encontrada.'});
        }

        fs.unlinkSync(picture.src);
        await Picture.deleteOne({ _id });

        res.json({message: 'Imagem removida com sucesso.'});
    } catch (error) {
        res.status(500).json({message: "Houve um erro ao excluir a imagem.", error});
    }
}