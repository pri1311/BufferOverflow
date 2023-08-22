import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            uid: "",
            firstName: "",
            lastName: "",
            email: "",
            reputation: 0,
        },
    },
    reducers: {
        setUid: (state, action) => {
            state.value.uid = action.payload;
        },
        setEmail: (state, action) => {
            state.value.email = action.payload;
        },
        setFirstName: (state, action) => {
            state.value.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.value.lastName = action.payload;
        },
        setUserDetails: (state, action) => {
            state.value = { ...state.value, ...action.payload };
        },
    },
});

export const { setUid, setEmail, setFirstName, setLastName, setUserDetails } =
    userSlice.actions;

export default userSlice.reducer;
