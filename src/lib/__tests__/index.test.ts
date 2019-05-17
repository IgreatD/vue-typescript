import 'jest';
import { isEmptyObj } from '@/lib/index';

describe('check object isEmpty', () => {
  it('empty object', () => {
    const emptyObject = {};
    expect(isEmptyObj(emptyObject)).toEqual(true);
  });
  it('has key in object', () => {
    expect(
      isEmptyObj({
        a: 1,
      }),
    ).toEqual(false);
  });
});
