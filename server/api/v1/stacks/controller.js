const data = [];
exports.all = (req, res, next) => {
    res.json(data);
};

exports.create = (req, res, next) => {
    data.push(req.body);
    res.json(req.body);
};

exports.read = (req, res, next) => {
    res.json({
        id: req.params.id,
    });
};

exports.update = (req, res, next) => {
    res.json({});
};

exports.delete = (req, res, next) => {
    res.json({});
};
