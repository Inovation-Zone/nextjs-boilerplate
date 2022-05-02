import { decreaseAction, increaseAction } from "@redux/counter/actions";

describe("Redux Actions", () => {
  describe("Counter Actions", () => {
    it("increase should return increase.type", () => {
      const action = increaseAction();
      expect(action.type).toBe(increaseAction().type);
    });
    it("decrease should return decrease.type", () => {
      const action = decreaseAction();
      expect(action.type).toBe(decreaseAction().type);
    });
  });
});
