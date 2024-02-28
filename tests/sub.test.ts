import { sub } from '../src';

test('adds two numbers correctly', () => {
    const result = sub(5, 3);
    expect(result).toBe(2);
});
