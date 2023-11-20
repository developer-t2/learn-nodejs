import express from 'express';

const app = express();

const port = 8080;

// app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.get('/', (req, res) => {
  return res.send('Hello Express');
});

// app.use((req, res) => {
//   return res.status(404).send('Not Found');
// });

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err);

//   return res.status(500).send('Internal Server Error');
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
