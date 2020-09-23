import mongoose from 'mongoose';

export const startMongoose = () => {
  mongoose.connect('mongodb+srv://lu:negritos13@cluster0.yeanh.gcp.mongodb.net/registro?retryWrites=true&w=majority');

  mongoose.connection.once('open', () => {
    console.log('DB conectada');
  });
};
