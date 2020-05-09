import { Yetric } from "../index";

test('Basic Module', () => {
  expect(Yetric('Hey')).toBe('Yetric - Hey');
});