const data = [];
const uuidv1 = require('uuid/v1');

exports.all = (req, res, next) => {
    res.json(data);
};

exports.create = (req, res, next) => {
    let {
        description,
        author
    } = req.body
    let createdAt = new Date;
    let updatedAt = null;

    let task = {
        id: uuidv1(),
        description: description,
        author: author,
        createdAt: createdAt,
        updatedAt: updatedAt
    };

    data.push(task);
    res.json({
        msg: 'created',
        id: task.id
    });
};

exports.read = (req, res, next) => {
    res.json(
        searchTask(req.params.id),
    );
};

exports.update = (req, res, next) => {
    const {
        description,
        author
    } = req.body
    let updatedAt = new Date;

    const task = {
        id: req.params.id,
        description: description,
        author: author,
        updatedAt: updatedAt,
    };
    updateTask(task)
    res.json({
        msg: 'updated',
        id: task.id,
    });
};

exports.delete = (req, res, next) => {
    deleteTask(req.params.id)
    res.json({
        msg: 'deleted',
        id: req.params.id,
    });
};

function updateTask(task) {
    var i;
    for (i = 0; i < data.length; ++i) {
        if (data[i].id == task.id) {
            data[i].description = task.description;
            data[i].author = task.author;
            data[i].updatedAt = task.updatedAt;
        }
    }
}

function searchTask(id) {
    var i;
    for (i = 0; i < data.length; ++i) {
        if (data[i].id == id) {
            return data[i];
        }
    }
}

function deleteTask(id) {
    var i;
    for (i = 0; i < data.length; ++i) {
        if (data[i].id == id) {
            delete data[i];
            //data.splice[i, 1];
            break;
        }
    }
}
