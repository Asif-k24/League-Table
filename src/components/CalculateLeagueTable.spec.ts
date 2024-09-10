import CalculateLeagueTable from "./CalculateLeagueTable";

describe('football table render', () => {
    it('should return correct process table data', () => {
        const data = {
            "name": "Premier League 2020/21",
            "matches": [
                {
                    "round": "Matchday 1",
                    "date": "2020-09-12",
                    "team1": "Burnley FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-12",
                    "team1": "Manchester City FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-12",
                    "team1": "Fulham FC",
                    "team2": "Arsenal FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-12",
                    "team1": "Crystal Palace FC",
                    "team2": "Southampton FC",
                    "score": {
                        "ft": [
                            1,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-12",
                    "team1": "Liverpool FC",
                    "team2": "Leeds United FC",
                    "score": {
                        "ft": [
                            4,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-12",
                    "team1": "West Ham United FC",
                    "team2": "Newcastle United FC",
                    "score": {
                        "ft": [
                            0,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-13",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Leicester City FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-13",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Everton FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-14",
                    "team1": "Sheffield United FC",
                    "team2": "Wolverhampton Wanderers FC",
                    "score": {
                        "ft": [
                            0,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 1",
                    "date": "2020-09-14",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Chelsea FC",
                    "score": {
                        "ft": [
                            1,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-19",
                    "team1": "Everton FC",
                    "team2": "West Bromwich Albion FC",
                    "score": {
                        "ft": [
                            5,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-19",
                    "team1": "Leeds United FC",
                    "team2": "Fulham FC",
                    "score": {
                        "ft": [
                            4,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-19",
                    "team1": "Manchester United FC",
                    "team2": "Crystal Palace FC",
                    "score": {
                        "ft": [
                            1,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-19",
                    "team1": "Arsenal FC",
                    "team2": "West Ham United FC",
                    "score": {
                        "ft": [
                            2,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-20",
                    "team1": "Southampton FC",
                    "team2": "Tottenham Hotspur FC",
                    "score": {
                        "ft": [
                            2,
                            5
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-20",
                    "team1": "Newcastle United FC",
                    "team2": "Brighton & Hove Albion FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-20",
                    "team1": "Chelsea FC",
                    "team2": "Liverpool FC",
                    "score": {
                        "ft": [
                            0,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-20",
                    "team1": "Leicester City FC",
                    "team2": "Burnley FC",
                    "score": {
                        "ft": [
                            4,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-21",
                    "team1": "Aston Villa FC",
                    "team2": "Sheffield United FC",
                    "score": {
                        "ft": [
                            1,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 2",
                    "date": "2020-09-21",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Manchester City FC",
                    "score": {
                        "ft": [
                            1,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-26",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Manchester United FC",
                    "score": {
                        "ft": [
                            2,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-26",
                    "team1": "Crystal Palace FC",
                    "team2": "Everton FC",
                    "score": {
                        "ft": [
                            1,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-26",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Chelsea FC",
                    "score": {
                        "ft": [
                            3,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-26",
                    "team1": "Burnley FC",
                    "team2": "Southampton FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-27",
                    "team1": "Sheffield United FC",
                    "team2": "Leeds United FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-27",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Newcastle United FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-27",
                    "team1": "Manchester City FC",
                    "team2": "Leicester City FC",
                    "score": {
                        "ft": [
                            2,
                            5
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-27",
                    "team1": "West Ham United FC",
                    "team2": "Wolverhampton Wanderers FC",
                    "score": {
                        "ft": [
                            4,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-28",
                    "team1": "Fulham FC",
                    "team2": "Aston Villa FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 3",
                    "date": "2020-09-28",
                    "team1": "Liverpool FC",
                    "team2": "Arsenal FC",
                    "score": {
                        "ft": [
                            3,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-03",
                    "team1": "Chelsea FC",
                    "team2": "Crystal Palace FC",
                    "score": {
                        "ft": [
                            4,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-03",
                    "team1": "Everton FC",
                    "team2": "Brighton & Hove Albion FC",
                    "score": {
                        "ft": [
                            4,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-03",
                    "team1": "Leeds United FC",
                    "team2": "Manchester City FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-03",
                    "team1": "Newcastle United FC",
                    "team2": "Burnley FC",
                    "score": {
                        "ft": [
                            3,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-04",
                    "team1": "Leicester City FC",
                    "team2": "West Ham United FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-04",
                    "team1": "Southampton FC",
                    "team2": "West Bromwich Albion FC",
                    "score": {
                        "ft": [
                            2,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-04",
                    "team1": "Arsenal FC",
                    "team2": "Sheffield United FC",
                    "score": {
                        "ft": [
                            2,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-04",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Fulham FC",
                    "score": {
                        "ft": [
                            1,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-04",
                    "team1": "Manchester United FC",
                    "team2": "Tottenham Hotspur FC",
                    "score": {
                        "ft": [
                            1,
                            6
                        ]
                    }
                },
                {
                    "round": "Matchday 4",
                    "date": "2020-10-04",
                    "team1": "Aston Villa FC",
                    "team2": "Liverpool FC",
                    "score": {
                        "ft": [
                            7,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-17",
                    "team1": "Everton FC",
                    "team2": "Liverpool FC",
                    "score": {
                        "ft": [
                            2,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-17",
                    "team1": "Chelsea FC",
                    "team2": "Southampton FC",
                    "score": {
                        "ft": [
                            3,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-17",
                    "team1": "Manchester City FC",
                    "team2": "Arsenal FC",
                    "score": {
                        "ft": [
                            1,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-17",
                    "team1": "Newcastle United FC",
                    "team2": "Manchester United FC",
                    "score": {
                        "ft": [
                            1,
                            4
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-18",
                    "team1": "Sheffield United FC",
                    "team2": "Fulham FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-18",
                    "team1": "Crystal Palace FC",
                    "team2": "Brighton & Hove Albion FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-18",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "West Ham United FC",
                    "score": {
                        "ft": [
                            3,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-18",
                    "team1": "Leicester City FC",
                    "team2": "Aston Villa FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-19",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Burnley FC",
                    "score": {
                        "ft": [
                            0,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 5",
                    "date": "2020-10-19",
                    "team1": "Leeds United FC",
                    "team2": "Wolverhampton Wanderers FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-23",
                    "team1": "Aston Villa FC",
                    "team2": "Leeds United FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-24",
                    "team1": "West Ham United FC",
                    "team2": "Manchester City FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-24",
                    "team1": "Fulham FC",
                    "team2": "Crystal Palace FC",
                    "score": {
                        "ft": [
                            1,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-24",
                    "team1": "Manchester United FC",
                    "team2": "Chelsea FC",
                    "score": {
                        "ft": [
                            0,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-24",
                    "team1": "Liverpool FC",
                    "team2": "Sheffield United FC",
                    "score": {
                        "ft": [
                            2,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-25",
                    "team1": "Southampton FC",
                    "team2": "Everton FC",
                    "score": {
                        "ft": [
                            2,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-25",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Newcastle United FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-25",
                    "team1": "Arsenal FC",
                    "team2": "Leicester City FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-26",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "West Bromwich Albion FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 6",
                    "date": "2020-10-26",
                    "team1": "Burnley FC",
                    "team2": "Tottenham Hotspur FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-10-30",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Crystal Palace FC",
                    "score": {
                        "ft": [
                            2,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-10-31",
                    "team1": "Sheffield United FC",
                    "team2": "Manchester City FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-10-31",
                    "team1": "Burnley FC",
                    "team2": "Chelsea FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-10-31",
                    "team1": "Liverpool FC",
                    "team2": "West Ham United FC",
                    "score": {
                        "ft": [
                            2,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-11-01",
                    "team1": "Aston Villa FC",
                    "team2": "Southampton FC",
                    "score": {
                        "ft": [
                            3,
                            4
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-11-01",
                    "team1": "Newcastle United FC",
                    "team2": "Everton FC",
                    "score": {
                        "ft": [
                            2,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-11-01",
                    "team1": "Manchester United FC",
                    "team2": "Arsenal FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-11-01",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Brighton & Hove Albion FC",
                    "score": {
                        "ft": [
                            2,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-11-02",
                    "team1": "Fulham FC",
                    "team2": "West Bromwich Albion FC",
                    "score": {
                        "ft": [
                            2,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 7",
                    "date": "2020-11-02",
                    "team1": "Leeds United FC",
                    "team2": "Leicester City FC",
                    "score": {
                        "ft": [
                            1,
                            4
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-06",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Burnley FC",
                    "score": {
                        "ft": [
                            0,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-06",
                    "team1": "Southampton FC",
                    "team2": "Newcastle United FC",
                    "score": {
                        "ft": [
                            2,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-07",
                    "team1": "Everton FC",
                    "team2": "Manchester United FC",
                    "score": {
                        "ft": [
                            1,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-07",
                    "team1": "Crystal Palace FC",
                    "team2": "Leeds United FC",
                    "score": {
                        "ft": [
                            4,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-07",
                    "team1": "Chelsea FC",
                    "team2": "Sheffield United FC",
                    "score": {
                        "ft": [
                            4,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-07",
                    "team1": "West Ham United FC",
                    "team2": "Fulham FC",
                    "score": {
                        "ft": [
                            1,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-08",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Tottenham Hotspur FC",
                    "score": {
                        "ft": [
                            0,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-08",
                    "team1": "Leicester City FC",
                    "team2": "Wolverhampton Wanderers FC",
                    "score": {
                        "ft": [
                            1,
                            0
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-08",
                    "team1": "Manchester City FC",
                    "team2": "Liverpool FC",
                    "score": {
                        "ft": [
                            1,
                            1
                        ]
                    }
                },
                {
                    "round": "Matchday 8",
                    "date": "2020-11-08",
                    "team1": "Arsenal FC",
                    "team2": "Aston Villa FC",
                    "score": {
                        "ft": [
                            0,
                            3
                        ]
                    }
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-21",
                    "team1": "Newcastle United FC",
                    "team2": "Chelsea FC",
                    "score": {
                        "ft": [
                            0,
                            2
                        ]
                    }
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-21",
                    "team1": "Aston Villa FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-21",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-21",
                    "team1": "Manchester United FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-22",
                    "team1": "Fulham FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-22",
                    "team1": "Sheffield United FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-22",
                    "team1": "Leeds United FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-22",
                    "team1": "Liverpool FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-23",
                    "team1": "Burnley FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 9",
                    "date": "2020-11-23",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "Arsenal FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "Leicester City FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "Crystal Palace FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "Manchester City FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-28",
                    "team1": "Everton FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-29",
                    "team1": "Southampton FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-29",
                    "team1": "Chelsea FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 10",
                    "date": "2020-11-30",
                    "team1": "West Ham United FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Aston Villa FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Burnley FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Chelsea FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Liverpool FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Manchester City FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Sheffield United FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 11",
                    "date": "2020-12-05",
                    "team1": "West Ham United FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Arsenal FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Crystal Palace FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Everton FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Fulham FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Leeds United FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Leicester City FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Manchester United FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Newcastle United FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Southampton FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 12",
                    "date": "2020-12-12",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Arsenal FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Aston Villa FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Fulham FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Leeds United FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Leicester City FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Sheffield United FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "West Ham United FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-15",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-16",
                    "team1": "Liverpool FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 13",
                    "date": "2020-12-16",
                    "team1": "Manchester City FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Burnley FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Chelsea FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Crystal Palace FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Everton FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Manchester United FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Newcastle United FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Southampton FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 14",
                    "date": "2020-12-19",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Arsenal FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Aston Villa FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Fulham FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Leeds United FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Leicester City FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Liverpool FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Manchester City FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Sheffield United FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "West Ham United FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 15",
                    "date": "2020-12-26",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Burnley FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Chelsea FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Crystal Palace FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Everton FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Manchester United FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Newcastle United FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Southampton FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 16",
                    "date": "2020-12-28",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Burnley FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Chelsea FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Crystal Palace FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Everton FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Manchester United FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Newcastle United FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Southampton FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 17",
                    "date": "2021-01-02",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Arsenal FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Aston Villa FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Fulham FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Leeds United FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Leicester City FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Sheffield United FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "West Ham United FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-12",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-13",
                    "team1": "Liverpool FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 18",
                    "date": "2021-01-13",
                    "team1": "Manchester City FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Arsenal FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Aston Villa FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Fulham FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Leeds United FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Leicester City FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Liverpool FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Manchester City FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Sheffield United FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "West Ham United FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 19",
                    "date": "2021-01-16",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-26",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-26",
                    "team1": "Burnley FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-26",
                    "team1": "Everton FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-26",
                    "team1": "Manchester United FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-26",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-27",
                    "team1": "Chelsea FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-27",
                    "team1": "Newcastle United FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-27",
                    "team1": "Southampton FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-27",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 20",
                    "date": "2021-01-27",
                    "team1": "Crystal Palace FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Arsenal FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Chelsea FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Crystal Palace FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Everton FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Leicester City FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Manchester City FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "Southampton FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 21",
                    "date": "2021-01-30",
                    "team1": "West Ham United FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Aston Villa FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Burnley FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Fulham FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Leeds United FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Sheffield United FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-02",
                    "team1": "Manchester United FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-03",
                    "team1": "Newcastle United FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-03",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 22",
                    "date": "2021-02-03",
                    "team1": "Liverpool FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Aston Villa FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Burnley FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Fulham FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Leeds United FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Liverpool FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Manchester United FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Newcastle United FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Sheffield United FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 23",
                    "date": "2021-02-06",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Arsenal FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Chelsea FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Crystal Palace FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Everton FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Leicester City FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Manchester City FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "Southampton FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 24",
                    "date": "2021-02-13",
                    "team1": "West Ham United FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Arsenal FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Aston Villa FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Burnley FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Fulham FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Liverpool FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Manchester United FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Southampton FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "West Ham United FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 25",
                    "date": "2021-02-20",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Chelsea FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Crystal Palace FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Everton FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Leeds United FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Leicester City FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Manchester City FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Newcastle United FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Sheffield United FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 26",
                    "date": "2021-02-27",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Aston Villa FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Burnley FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Chelsea FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Liverpool FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Manchester City FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Sheffield United FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 27",
                    "date": "2021-03-06",
                    "team1": "West Ham United FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Arsenal FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Crystal Palace FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Everton FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Fulham FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Leeds United FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Leicester City FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Manchester United FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Newcastle United FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Southampton FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 28",
                    "date": "2021-03-13",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Burnley FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Crystal Palace FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Fulham FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Liverpool FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Manchester City FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Sheffield United FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 29",
                    "date": "2021-03-20",
                    "team1": "West Ham United FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Arsenal FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Aston Villa FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Chelsea FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Everton FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Leeds United FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Leicester City FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Manchester United FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Newcastle United FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Southampton FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 30",
                    "date": "2021-04-03",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Burnley FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Crystal Palace FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Fulham FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Liverpool FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Manchester City FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Sheffield United FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 31",
                    "date": "2021-04-10",
                    "team1": "West Ham United FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Arsenal FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Aston Villa FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Chelsea FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Everton FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Leeds United FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Leicester City FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Manchester United FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Newcastle United FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Southampton FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 32",
                    "date": "2021-04-17",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Arsenal FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Aston Villa FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Fulham FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Leeds United FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Leicester City FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Liverpool FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Manchester City FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Sheffield United FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "West Ham United FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 33",
                    "date": "2021-04-24",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Burnley FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Chelsea FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Crystal Palace FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Everton FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Manchester United FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Newcastle United FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Southampton FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 34",
                    "date": "2021-05-01",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Arsenal FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Aston Villa FC",
                    "team2": "Manchester United FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Fulham FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Leeds United FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Leicester City FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Liverpool FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Manchester City FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Sheffield United FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "West Ham United FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 35",
                    "date": "2021-05-08",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-11",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-11",
                    "team1": "Burnley FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-11",
                    "team1": "Everton FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-11",
                    "team1": "Manchester United FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-11",
                    "team1": "West Bromwich Albion FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-12",
                    "team1": "Chelsea FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-12",
                    "team1": "Newcastle United FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-12",
                    "team1": "Southampton FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-12",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 36",
                    "date": "2021-05-12",
                    "team1": "Crystal Palace FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Brighton & Hove Albion FC",
                    "team2": "Manchester City FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Burnley FC",
                    "team2": "Liverpool FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Chelsea FC",
                    "team2": "Leicester City FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Crystal Palace FC",
                    "team2": "Arsenal FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Everton FC",
                    "team2": "Wolverhampton Wanderers FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Manchester United FC",
                    "team2": "Fulham FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Newcastle United FC",
                    "team2": "Sheffield United FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Southampton FC",
                    "team2": "Leeds United FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "Tottenham Hotspur FC",
                    "team2": "Aston Villa FC"
                },
                {
                    "round": "Matchday 37",
                    "date": "2021-05-15",
                    "team1": "West Bromwich Albion FC",
                    "team2": "West Ham United FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Arsenal FC",
                    "team2": "Brighton & Hove Albion FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Aston Villa FC",
                    "team2": "Chelsea FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Fulham FC",
                    "team2": "Newcastle United FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Leeds United FC",
                    "team2": "West Bromwich Albion FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Leicester City FC",
                    "team2": "Tottenham Hotspur FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Liverpool FC",
                    "team2": "Crystal Palace FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Manchester City FC",
                    "team2": "Everton FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Sheffield United FC",
                    "team2": "Burnley FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "West Ham United FC",
                    "team2": "Southampton FC"
                },
                {
                    "round": "Matchday 38",
                    "date": "2021-05-23",
                    "team1": "Wolverhampton Wanderers FC",
                    "team2": "Manchester United FC"
                }
            ]
        }
        const expected = [
            {
                club: 'Leicester City FC',
                played: 8,
                won: 6,
                drawn: 0,
                lost: 2,
                gf: 18,
                ga: 9,
                gd: 9,
                points: 18,
                position: 1,
                form: ['W', 'W', 'W', 'L', 'L']
            },

            {
                club: 'Chelsea FC',
                played: 9,
                won: 5,
                drawn: 3,
                lost: 1,
                gf: 22,
                ga: 10,
                gd: 12,
                points: 18,
                position: 2,
                form: ['W', 'W', 'W', 'D', 'D']
            },

            {
                club: 'Liverpool FC',
                played: 8,
                won: 5,
                drawn: 2,
                lost: 1,
                gf: 18,
                ga: 16,
                gd: 2,
                points: 17,
                position: 3,
                form: ['D', 'W', 'W', 'D', 'L']
            },

            {
                club: 'Tottenham Hotspur FC',
                played: 8,
                won: 5,
                drawn: 2,
                lost: 1,
                gf: 19,
                ga: 9,
                gd: 10,
                points: 17,
                position: 4,
                form: ['W', 'W', 'W', 'D', 'W']
            },

            {
                club: 'Southampton FC',
                played: 8,
                won: 5,
                drawn: 1,
                lost: 2,
                gf: 16,
                ga: 12,
                gd: 4,
                points: 16,
                position: 5,
                form: ['W', 'W', 'W', 'D', 'W']
            },

            {
                club: 'Aston Villa FC',
                played: 7,
                won: 5,
                drawn: 0,
                lost: 2,
                gf: 18,
                ga: 9,
                gd: 9,
                points: 15,
                position: 6,
                form: ['W', 'L', 'L', 'W', 'W']
            },

            {
                club: 'Crystal Palace FC',
                played: 8,
                won: 4,
                drawn: 1,
                lost: 3,
                gf: 12,
                ga: 12,
                gd: 0,
                points: 13,
                position: 7,
                form: ['W', 'L', 'W', 'D', 'L']
            },

            {
                club: 'Everton FC',
                played: 8,
                won: 4,
                drawn: 1,
                lost: 3,
                gf: 16,
                ga: 14,
                gd: 2,
                points: 13,
                position: 8,
                form: ['L', 'L', 'L', 'D', 'W']
            },

            {
                club: 'Wolverhampton Wanderers FC',
                played: 8,
                won: 4,
                drawn: 1,
                lost: 3,
                gf: 8,
                ga: 9,
                gd: -1,
                points: 13,
                position: 9,
                form: ['L', 'W', 'D', 'W', 'W']
            },

            {
                club: 'Manchester City FC',
                played: 7,
                won: 3,
                drawn: 3,
                lost: 1,
                gf: 10,
                ga: 9,
                gd: 1,
                points: 12,
                position: 10,
                form: ['D', 'W', 'D', 'W', 'D']
            },

            {
                club: 'Arsenal FC',
                played: 8,
                won: 4,
                drawn: 0,
                lost: 4,
                gf: 9,
                ga: 10,
                gd: -1,
                points: 12,
                position: 11,
                form: ['L', 'W', 'L', 'L', 'W']
            },

            {
                club: 'West Ham United FC',
                played: 8,
                won: 3,
                drawn: 2,
                lost: 3,
                gf: 14,
                ga: 10,
                gd: 4,
                points: 11,
                position: 12,
                form: ['W', 'L', 'D', 'D', 'W']
            },

            {
                club: 'Newcastle United FC',
                played: 9,
                won: 3,
                drawn: 2,
                lost: 4,
                gf: 10,
                ga: 15,
                gd: -5,
                points: 11,
                position: 13,
                form: ['L', 'L', 'W', 'D', 'L']
            },

            {
                club: 'Manchester United FC',
                played: 7,
                won: 3,
                drawn: 1,
                lost: 3,
                gf: 12,
                ga: 14,
                gd: -2,
                points: 10,
                position: 14,
                form: ['W', 'L', 'D', 'W', 'L']
            },

            {
                club: 'Leeds United FC',
                played: 8,
                won: 3,
                drawn: 1,
                lost: 4,
                gf: 14,
                ga: 17,
                gd: -3,
                points: 10,
                position: 15,
                form: ['L', 'L', 'W', 'L', 'D']
            },

            {
                club: 'Brighton & Hove Albion FC',
                played: 8,
                won: 1,
                drawn: 3,
                lost: 4,
                gf: 11,
                ga: 14,
                gd: -3,
                points: 6,
                position: 16,
                form: ['D', 'L', 'D', 'D', 'L']
            },

            {
                club: 'Fulham FC',
                played: 8,
                won: 1,
                drawn: 1,
                lost: 6,
                gf: 7,
                ga: 15,
                gd: -8,
                points: 4,
                position: 17,
                form: ['L', 'W', 'L', 'D', 'L']
            },

            {
                club: 'West Bromwich Albion FC',
                played: 8,
                won: 0,
                drawn: 3,
                lost: 5,
                gf: 6,
                ga: 17,
                gd: -11,
                points: 3,
                position: 18,
                form: ['L', 'L', 'D', 'D', 'L']
            },

            {
                club: 'Burnley FC',
                played: 7,
                won: 0,
                drawn: 2,
                lost: 5,
                gf: 3,
                ga: 12,
                gd: -9,
                points: 2,
                position: 19,
                form: ['D', 'L', 'L', 'D', 'L']
            },

            {
                club: 'Sheffield United FC',
                played: 8,
                won: 0,
                drawn: 1,
                lost: 7,
                gf: 4,
                ga: 14,
                gd: -10,
                points: 1,
                position: 20,
                form: ['L', 'L', 'L', 'D', 'L']
            }
        ]
        const result = CalculateLeagueTable(data);
        expect(result).toEqual(expected); // chai API
    })
})
