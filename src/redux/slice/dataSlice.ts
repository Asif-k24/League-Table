import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CalculateLeagueTable, { TeamDetails } from "../../components/CalculateLeagueTable";

interface DataState {
    loading: boolean;
    data: League | null;
    processedData: TeamDetails[] | null; // Adjusting the type as needed based on CalculateLeagueTable's return type
    error: string | null;
}

export interface Match {
    // Define the structure of the match data according to the API response
    round: string;
    date: string;
    team1: string;
    team2: string;
    score?: {
        ft: number[];
    };
}

export interface League {
    name: string;
    matches: Match[];
}

export const fetchData = createAsyncThunk<League>('fetchData', async () => {
    const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json');
    const data: League = await response.json();
    // console.log({data})
    return data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: <DataState>{
        loading: false,
        data: null,
        processedData: [],
        error: null,
    },
    reducers: {
        // empty, can add addtional synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
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