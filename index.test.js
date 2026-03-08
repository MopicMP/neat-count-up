const { up, batch } = require('./index');

describe('neat-count-up', () => {
  test('should process string input', () => {
    expect(up('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => up(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = up('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
