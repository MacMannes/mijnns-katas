import { describe, expect, it } from 'vitest';
import { MijnNSKatas } from './mijnns-katas';

describe('MijnNS Katas', () => {
    it('Creating an instance of the MijnNSKatas class should work', () => {
        const clazz = new MijnNSKatas();
        expect(clazz).toBeDefined();
    });
});
