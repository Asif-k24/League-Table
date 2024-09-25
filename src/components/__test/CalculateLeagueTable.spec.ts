import CalculateLeagueTable from "../CalculateLeagueTable";
import { expected } from "./mockData";
import { data } from './rawData'

describe('football table render', () => {
    it('should return correct process table data', () => {
        const result = CalculateLeagueTable(data);
        expect(result).toEqual(expected); // chai API
    })
})
