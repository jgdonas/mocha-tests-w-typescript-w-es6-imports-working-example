import { assert } from 'chai';
import add from '../math';

describe('mocha', () => {

    it('fucking adds correctly', () => {
        const result: number = add(5, 5);
        assert.isTrue(result === 10);
    });
})
