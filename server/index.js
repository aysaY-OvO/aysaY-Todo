const PORT = process.env.PORT || 5000;
const Application = require('./Application');
const todoRouter = require('./src/todos-router');
const jsonParser = require('./parseJson');
const mongoose = require('mongoose');

const app = new Application();

app.use(jsonParser);
app.addRouter(todoRouter);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://User:123@cluster0.k7qdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => {
      console.log(`Сервер стартовал на порту ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
