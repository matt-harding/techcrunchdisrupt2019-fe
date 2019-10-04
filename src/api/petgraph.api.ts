import get from './get';
import post from './post';

export default {
    async addDiseaseToAnimal(id: string): Promise<any> {
        try {
            const statements = {
                statements: [
                    { statement: 'MATCH (n) WHERE ID(n) = ' + id + ' CREATE (n)-[:DISTEMPER]->(n);' }
                ]
            };
            const data = JSON.stringify(statements);
            const res = await post(
                'http://localhost:7474/',
                'db/data/transaction/commit',
                data);
            return res.data;
        } catch (err) {
            throw err;
        }
    },
    async getAnimals(): Promise<any> {
        try {
            const statements = {
                statements: [
                    { statement: 'MATCH (n:Animal) RETURN n' }
                ]
            };
            const data = JSON.stringify(statements);
            const res = await post(
                'http://localhost:7474/',
                'db/data/transaction/commit',
                data);
            return res.data;
        } catch (err) {
            throw err;
        }
    }
};
