import { productReducer, initialState } from './product-info.reducer';

describe('ProductInfoReducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = productReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
