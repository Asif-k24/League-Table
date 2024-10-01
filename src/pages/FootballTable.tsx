import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/dataSlice';
import { AppDispatch } from '../redux/store';
import { ModalComponent } from '../components/Modal/Modal';
import ClubLogo from "../assets/data.json";
import '../App.css';
import '../components/Modal/Modal.css';

interface ClubLogo {
  key: string
}

interface TeamDetails {
  club: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: string[];
}

interface RootState {
  data: {
    loading: boolean;
    error: string | null;
    processedData: TeamDetails[];
  }
}

export default function FootballTable() {

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, processedData } = useSelector((state: RootState) => state.data);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal initial state is closed as stated is false
  const [selectedTeam, setSelectedTeam] = useState<TeamDetails | null>(null); // 

  const specificBorderRows = [1, 4, 5, 17]; // Indices of rows to have the specific border color

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

// Details to show in Modal from the row that is selected with it's details

  const handleRowClick = (team: TeamDetails) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <>
      <div className='font-type'>

        <main className='container'>
          <h1 className='text-center'>Premier League Table 2020/2021</h1>
          <table className='table-margin'>
            <thead>
              <tr>
                <th>Position</th>
                <th className='th-club'>Club</th>
                <th>Played</th>
                <th>Won</th>
                <th>Drawn</th>
                <th>Lost</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Points</th>
                <th>Form</th>
              </tr>
            </thead>

            <tbody>
              {
                processedData?.map((team, index) => {

                  // const handleCLick = () => {
                  //   navigate('/club-details/' + index)
                  // }
                  const isSpecificBorderRow = specificBorderRows.includes(index + 1)
                  const rowClass = isSpecificBorderRow ? "bordered-bottom-row-darkgrey" : "bordered-bottom-row-lightgrey"
                  console.log(team)

                  return (

                    <tr key={index} className={rowClass}>
                      <td className='text-center'>{index + 1}</td>
                      <td className='align-items'>
                        {
                          ClubLogo.logo[team.club as keyof typeof ClubLogo.logo] ? (
                            <img
                              style=
                              {{
                                width: "20px",
                                borderRadius: "50%",
                                marginRight: "8px"
                              }}
                              src={'/' + ClubLogo.logo[team.club as keyof typeof ClubLogo.logo]}
                              alt="" />
                          ) : ('No Logo')
                        }
                        <button
                          onClick={() => handleRowClick(team)}
                          className='button-style'
                          style={{ all: 'unset', cursor: 'pointer' }}>
                          <div>{team.club}</div>
                        </button>
                      </td>
                      <td className='text-center'>{team.played}</td>
                      <td className='text-center'>{team.won}</td>
                      <td className='text-center'>{team.drawn}</td>
                      <td className='text-center'>{team.lost}</td>
                      <td className='text-center'>{team.gf}</td>
                      <td className='text-center'>{team.ga}</td>
                      <td className='text-center'>{team.gd}</td>
                      <td className='text-center'>{team.points}</td>
                      <td className="text-center">
                        <div className='result'>
                          {team.form.map((result: string, idx: number) => (
                            <div className={result === 'W' ? "win" : result === 'L' ? 'loss' : 'draw'} key={idx}>{result}</div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>

          <ModalComponent
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            data={selectedTeam}
          />

        </main>
      </div>
    </>
  )
}