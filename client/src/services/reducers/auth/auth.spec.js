import auth from './auth';
import { setUserData } from '../../actions';

let initialState = {
    userId: null,
    login: null,
}

describe("Auth reducer", () => {
    it("should provide with initial value", () => {
        expect(auth(undefined, {})).toEqual(initialState);
    })

    it("should change user data on login", () => {
        let action = setUserData({ userId: 56, login: "karakal" });
        let state = auth(initialState, action);
        expect(state.login).toBe("karakal");
        expect(state.userId).toBe(56);
    })
})


