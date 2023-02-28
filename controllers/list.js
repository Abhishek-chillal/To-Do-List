const { itemModel } = require('../models/task');
const { listModel } = require('../models/task');

exports.getList = (req, res, next) => {
    itemModel.find()
    .then(task => {
        res.render('List', { listTitle: new Date().toISOString().slice(0, 10), newListItems: task });
    })
    .catch(err => console.log(err));
}

exports.postList = (req, res, next) => {
    const task = new itemModel({
        name: req.body.newItem
    })
    task.save();
    res.redirect('/');
};

exports.getcustom = (req, res, next) => {
    const customListName = req.params.customListName;

    listModel.findOne({ name: customListName }).then(foundList => {
        if (!foundList) {
            //Create an new list
            const list = new listModel({
                name: customListName
                // items: defaultItems
            });
            list.save();
            res.redirect("/" + customListName);
        }
        else {
            res.render("List", { listTitle: foundList.name, newListItems: foundList.items })
        }
    }).catch(err => {
        console.log(err);
    })
};

exports.deleteItem = (req, res, next) => {
    const checkedItemId = req.body.checkbox;

    itemModel.findByIdAndRemove(checkedItemId, function (err) {
        if (!err) {
            console.log("Successfully Deleted Checked Item");
            res.redirect("/");
        }
    })
}
