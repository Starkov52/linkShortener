import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ShortedLink = {
     shortLink: string;
     originalUrl: string;
};
type User = {
     userLinks: ShortedLink[];
};
const user: User = {
     userLinks: []
};
const userSlice = createSlice({
     name: "userData",
     initialState: user,
     reducers: {
          addNewShortedLink: (state, action: PayloadAction<{ link: ShortedLink }>) => {
               return { ...state, userLinks: [...state.userLinks, action.payload.link] };
          }
     }
});
export default userSlice.reducer;
export const { addNewShortedLink } = userSlice.actions;
