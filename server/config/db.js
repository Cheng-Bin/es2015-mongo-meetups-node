import mongoose from 'mongoose';

export default() => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/reactDB');
    mongoose.connection
        .once('open', () => console.log('Mongodb runing'))
        .on('error', err => console.error(err));
};