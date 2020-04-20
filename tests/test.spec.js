import add from '../math';
import { assert } from 'chai';

describe('mocha', () => {

    it('fucking adds correctly', () => {
        assert.isTrue(add(5, 5) === 10);
    });
})
