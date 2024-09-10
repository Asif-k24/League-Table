import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import CalculateLeagueTable, { TeamDetails } from "../../components/CalculateLeagueTable";
import { League } from "../../components/CalculateLeagueTable"

interface DataState {
    loading: boolean;
    data: League | null;
    processedData: TeamDetails[]; // Adjust the type as needed based on CalculateLeagueTable's return type
    error: string | null;
}

export const fetchData = createAsyncThunk<League, void>('data/fetchData', async () => {
    const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json');
    const data: League = await response.json();
    // console.log({data})
    return data;
});

const initialState: DataState = {
    loading: false,
    data: null,
    processedData: [],
    error: null,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // empty, can add addtional synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<League>) => {
                state.loading = false;
                state.data = action.payload;
                //call function here
                state.processedData = CalculateLeagueTable(action.payload);
                state.error = null;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.data = null;
                state.processedData = [];
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default dataSlice.reducer;