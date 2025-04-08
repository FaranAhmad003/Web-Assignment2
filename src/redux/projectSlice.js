import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    setProjects: (state, action) => action.payload,
    reorderProjects: (state, action) => action.payload,
  },
});

export const { setProjects, reorderProjects } = projectSlice.actions;
export default projectSlice.reducer;
