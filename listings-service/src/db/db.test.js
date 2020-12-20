const chai = require('chai')
let should = chai.should()
let expect = chai.expect
let db = require('./models')
db.Listing.modelName = 'Listings'
let model = [db.Listing]

models.forEach(model => {
    describe(`${model.modelName} Model`, function (done) {
        var modelData = {
            description: "new desc",
            title: "new title"
        }

        it(`should create a new ${model.modelName}`, function () {

            model.create(modelData).then(function (listing) {
                //victim name should be equivalent to the fake submission we are using
                expect(db.Listing.description).to.equal("new desc"); 
                //remove the entry from the database
                model.destroy({
                    where: {
                        id: db.Listing.id
                    }
                })
                done()
            })


        });

        it(`should delete a ${model.modelName} from the database`, function () {
            model.create(modelData).then(function (listing) {
                //victim name should be equivalent to the fake submission we are using
                //remove the entry from the database
                model.destroy({
                    where: {
                        id: listing.id
                    }
                })

                try {
                    model.findOne({
                        where: {
                            id: listing.id
                        }
                    })
                } catch (err) {
                    expect(listing.description).to.undefined; 
                    if (err) {
                        done()
                    }
                }

            })
        })

          it(`should update the ${model.modelName} entry in the database`, function () {
            model.create(modelData).then(function (listing) {
                //after user is created, then update a value
                model.update(modelData, {
                    where: {
                        id: listing.id
                    }
                }).then(function(data) {
                    model.findOne({
                        where: {
                            id: listing.id
                        }
                    }).then(function (data) {
                        expect(data.guest_count).to.equal(12);
                    }).then(function () {
                        model.destroy({
                            where: {
                                id: listing.id
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