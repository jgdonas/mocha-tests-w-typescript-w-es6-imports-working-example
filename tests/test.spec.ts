import { assert } from 'chai';
import { add, electronVersion } from '../math';

describe('mocha', () => {

    it('fucking adds correctly', () => {
        const result: number = add(5, 5);
        assert.isTrue(result === 10);
    });

    it('get electron version (8) correctly', () => {
        const result: string = electronVersion();
        assert.isTrue(result.includes('8'));
    });
})
