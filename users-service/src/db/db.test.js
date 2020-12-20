const chai = require('chai')
let should = chai.should()
let expect = chai.expect
let db = require('./models')
db.user.modelName = 'Users'
let model = [db.user]

models.forEach(model => {
    describe(`${model.modelName} Model`, function (done) {
        var modelData = {
            email: "test@gmail.com",
            password: "77777"
        }

        it(`should create a new ${model.modelName}`, function () {

            model.create(modelData).then(function (user) {
                //victim name should be equivalent to the fake submission we are using
                expect(user.email).to.equal("test@gmail.com"); 
                //remove the entry from the database
                model.destroy({
                    where: {
                        id: user.id
                    }
                })
                done()
            })


        });

        it(`should delete a ${model.modelName} from the database`, function () {
            model.create(modelData).then(function (user) {
                //victim name should be equivalent to the fake submission we are using
                //remove the entry from the database
                model.destroy({
                    where: {
                        id: user.id
                    }
                })

                try {
                    model.findOne({
                        where: {
                            id: user.id
                        }
                    })
                } catch (err) {
                    expect(user.first_name).to.undefined; 
                    if (err) {
                        done()
                    }
                }

            })
        })

          it(`should update the ${model.modelName} entry in the database`, function () {
            model.create(modelData).then(function (user) {
                //after user is created, then update a value
                modelData.guest_count = 12

                model.update(modelData, {
                    where: {
                        id: user.id
                    }
                }).then(function(data) {
                    model.findOne({
                        where: {
                            id: user.id
                        }
                    }).then(function () {
                        model.destroy({
                            where: {
                                id: user.id
                            }
                        })
                    }).then(function() {
                        done()
                    })
                })

            })
        })
    })    
});