const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');
    
it('should set testing environment', () => {
  expect(process.env.DB_ENV).toBe('testing');
});

describe('hobbits model', () => {
    
    beforeEach(async () => {
        await db('hobbits').truncate();  
    })


  describe('insert()', () => {
    it('should add hobbit to database', async () => {

      // insert one record
      let hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
        
      hobbit = await Hobbits.insert({ name: 'frodo' });
      expect(hobbit.name).toBe('frodo');

      // check we now have one record in the table
      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    });
  });
});