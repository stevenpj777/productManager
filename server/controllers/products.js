var mongoose = require("mongoose");
var Product = mongoose.model("Product");

var moment = require("moment");

module.exports = {

    index: function(req, res){
        console.log("~Index~");
        Product.find({}, function(err, task) {
          if (err) {
            console.log('error displaying people from find');
            res.json(err);
          }
          else {
            console.log('success');
            res.json(task);
          }
        })
    },

    addProduct: function(req, res){
        console.log("~Add~", req.body);
        // var quote = new Quote({name: req.body.name, quote: req.body.quote});
        // quote.save(function(err){

        //IMPORTANT:  PARAMS FOR URL AND BODY FOR REST
        Product.create({title: req.body.title, price: req.body.price, image: req.body.image}, function(err, task) {
            if(err){
                console.log("~Something went wrong!~", err);
                res.json(err);

            }
            else{
                console.log("~Successfully added a task!~");
                res.json({added: "correct"});
            }
          })
        },


        deleteProduct: function(req, res){
            let id = req.params.id;
            console.log(req.params.id);
            Product.remove({_id: id},function(err){
                if(err){
                    console.log('help me');
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", removed: true});
                }
            })
        },

      editProduct: function(req, res){

              Product.findOne({_id: req.params.id}, function(err, task){
                  if(err){
                      res.json({message: "Error!", error: err});
                      console.log('failed to find id')
                  }
                  else{
                      if(req.body.title){
                          task.title = req.body.title;
                      }
                      if(req.body.price){
                          task.price = req.body.price;
                      }
                      if(req.params.image){
                          task.image = req.body.image;
                  }
                  task.save(function(err){
                      if(err){
                          res.json({message: "Error!", error: err});
                      }
                      else{
                          res.json({message: "Success!", task: task})
                      }
                  })
                  }
              })
},

      show: function(req, res){
          console.log("Controller: show() func");
          let id = req.params.id;
          Product.findOne({_id: id},function(err, product){
              if(err){
                  res.json({message: "Error!", error: err});
              }
              else{
                  res.json(product);
              }
          })
      },

    addRating: function(req, res){
    console.log(req.body)
    Rating.create({rating: req.body.rating, comment: req.body.comment}, function(err, newRating){
        console.log(req.body)
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            Cake.findOneAndUpdate({_id: req.params.cakeId}, {$push: {ratings: newRating}}, function(err, data){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", added: true});
                }
            })
        }
    })
}



}
