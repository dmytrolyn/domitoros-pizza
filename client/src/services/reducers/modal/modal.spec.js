import modal from './modal';
import { openAuthModal, closeAuthModal, openAlertModal, closeAlertModal, setAuthLoading } from '../../actions';

let initialState = {
    auth: {
        isOpen: false,
    }
    alert: {
        isOpen: false,
        message: ""
    }
}

describe("Modal reducer", () => {
    it("should provide with initial value", () => {
        expect(modal(undefined, {})).toEqual(initialState);
    })

    it("should open and close auth modal", () => {
        let state = modal(initialState, openAuthModal());
        expect(state.auth.isOpen).toBe(true);
        state = modal(state, closeAuthModal());
        expect(state.auth.isOpen).toBe(false);
    })

    it("should open and close alert modal", () => {
        let state = modal(initialState, openAlertModal("Test"));
        expect(state.alert.isOpen).toBe(true);
        state = modal(state, closeAlertModal());
        expect(state.alert.isOpen).toBe(false);
    })

    it("should set message in alert modal on open", () => {
        let state = modal(initialState, openAlertModal("test"));
        expect(state.alert.message).toBe("test");
    })

    it("should be removed on close", () => {
        let state = modal(initialState, openAlertModal("test"));
        state = modal(state, closeAlertModal());
        expect(state.alert.isOpen).toBe(false);
        expect(state.alert.message).toBe("");
    })

    it("should clear alert message after closing", () => {
        let state = modal(initialState, openAlertModal("test"));
        state = modal(state, closeAlertModal());
        expect(state.alert.message).toBe("");
    })
})