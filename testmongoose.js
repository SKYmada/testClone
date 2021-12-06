const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const schema = {
    name:String,
    age:Number,
    health:String,
    hobby:sfhua
}
const abc = mongoose.model('cats', schema);

// const kitty = new abc({ name1: 'test_Zildjian1' });
// kitty.save().then(() => console.log('test_meow1'));
// const kitty1 = new abc({name:"wdnmd",age:1,health:"good!!"});
// kitty1.save().then(() => console.log('ohhhhhh'));

abc.find({name:"wdnmd"},(err,data) => {console.log(data[0]._doc.name)})