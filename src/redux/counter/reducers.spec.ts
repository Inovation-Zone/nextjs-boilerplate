import Counter from '@redux/counter/reducers';
import { decreaseActionSuccess, increaseActionSuccess } from "@redux/counter/actions";

describe("Redux Counter Reducer", () => {
    it("should create reducer with initial props", () => {
        const initial = {
            count: 0,
        };
        const reducer = Counter(initial, { type: undefined });
        expect(reducer).toEqual(initial);
    });
    it("increase action should increase counter by 1", () => {
        const initial = {
            count: 0,
        };
        const expected = {
            count: 1,
        };
        const reducer = Counter(initial, increaseActionSuccess());
        expect(reducer).toEqual(expected);
    });
    it("decrease action should decrease counter by 1", () => {
        const initial = {
            count: 0,
        };
        const expected = {
            count: -1,
        };
        const reducer = Counter(initial, decreaseActionSuccess());
        expect(reducer).toEqual(expected);
    });
});
