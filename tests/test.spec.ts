import { assert } from 'chai';
import { add, version } from '../math';

describe('mocha', () => {

    it('fucking adds correctly', () => {
        const result: number = add(5, 5);
        assert.isTrue(result === 10);
    });

    it('fucking returns a version number', () => {
        const electronVersion = version();
        console.info(`Current electron version: ${electronVersion}`);
        assert.isTrue(electronVersion.length > 0);
        assert.isTrue(electronVersion.includes('8'));
    });
})
