/* Nuestro objeto de pruebas */
const { Collection } = require('mongodb');
const BooksService = require('./books.service');

// suplantando la clase MongoLib
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: (collection, newBook) => Promise.resolve({ ...newBook, _id: '2' }), 
};

const fakeBooks = [
  {
    _id: '1',
    title: 'Harry Potter',
  }
];

// llamando a mock
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));
 
describe('Test for BooksService', () => {
  /* Variable para instancia del servicio */
  let service;
  /* Para cada prueba, crear una nueva instancia */
  beforeEach(() => {
    /* Crear instancia del servicio */
    service = new BooksService();
  });
 
  /* Pruebas para el método getBook */
  describe('Test for getBooks()', () =>{
    test('Should return a list of books', async () => {
      /* Arrange: preparar el entorno */
      /* Act: Acción a probar */
      const books = await service.getBooks({});
      console.log(books);
      /* Assert: Confirmar */
      expect(books.length).toEqual(1);
    });
  });

  /* Pruebas para el método createBook */
  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      /* Arrange: preparar el entorno */
      const newBook = {
        _id: '2',
        title: 'New Year, New Me',
        author: 'Minnie Kim',
        year: 2023,
      };
      /* Act: Acción a probar */
      const create = await service.createBook(newBook);
        console.log(newBook);
      /* Assert: Confirmar */
      expect(create).toMatchObject(newBook);
    });
  });
 
});