import { createSlice } from "@reduxjs/toolkit";

const savedState = JSON.parse(localStorage.getItem("portfolioState")) || {
  name: "",
  bio: "",
  profilePicture: "",
  skills: [],
  interests: [],
  detailedDescription: "",
  projects: [],
  socialMedia: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: savedState,
  reducers: {
    setPortfolioData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearPortfolioData: () => ({
      name: "",
      bio: "",
      profilePicture: "",
      skills: [],
      interests: [],
      detailedDescription: "",
      projects: [],
      socialMedia: [],
    }),
  },
});


export const { setPortfolioData, clearPortfolioData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
