import { div } from '../src';

test('multiply two numbers correctly', () => {
    const result = div(6, 3);
    expect(result).toBe(2);
});
