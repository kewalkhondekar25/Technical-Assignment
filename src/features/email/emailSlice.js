import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjectLineA: "",
  subjectLineB: "",
  previewText: ""
}

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setSubjectLineA: (state, action) => {
      state.subjectLineA = action.payload;
    },
    setSubjectLineB: (state, action) => {
      state.subjectLineB = action.payload;
    },
    setPreviewText: (state, action) => {
      state.previewText = action.payload;
    }
  }
});

export const {
  setSubjectLineA,
  setSubjectLineB,
  setPreviewText
} = emailSlice.actions;

export default emailSlice.reducer;