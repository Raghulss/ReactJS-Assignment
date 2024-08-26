import { useState } from "react"
import stone from './stone.jpeg'
import paper from './paper.jpeg'
import scissors from './scissors.jpeg'
import './StonePaperScissor.css'

const ALLOWED_MOVES = ['stone', 'paper', 'scissors']
const WINNING_COMBINATIONS = {
    stone: 'scissors',
    paper: 'stone',
    scissors: 'paper'
}

export const StonePaperScissor = () => {
    const [computerMove, setComputerMove] = useState('')
    const [userMove, setUserMove] = useState('')
    const [compScore, setCompScore] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [currentStatus, setCurrentStatus] = useState('')

    const onUserMove = (e) => {
        let compMoveIndex = Math.floor(Math.random() * 3)
        console.log(compMoveIndex, e)
        setUserMove(ALLOWED_MOVES[e])
        setComputerMove(ALLOWED_MOVES[compMoveIndex])
        checkResult(ALLOWED_MOVES[e], ALLOWED_MOVES[compMoveIndex])
    }

    const resetScores = () => {
        setUserScore(0)
        setCompScore(0)
        setUserMove('')
        setComputerMove('')
        setCurrentStatus('')
    }

    const checkResult = (userMove, computerMove) => {
        console.log(computerMove, userMove)
        if(computerMove === userMove) {
            setCurrentStatus('Tie')
            return
        }
        if(WINNING_COMBINATIONS[computerMove] === userMove){
            setCompScore(prev => prev + 1)
            etCurrentStatus('Computer Wins')
        }else {
            setUserScore(prev => prev + 1)
            etCurrentStatus('User Wins')
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="game-details">
                    <div className="user-details">
                        <span>User</span>
                        <span>Score: {userScore}</span>
                    </div>
                    <div className="computer-details">
                        <span>Computer</span>
                        <span>Score: {compScore}</span>
                    </div>
                </div>

                <div className="game-div">
                    <span>Choose your move</span>
                    <div className="option-div">
                        <button onClick={() => onUserMove(0)}>
                            <img src={stone} alt="stone" height={100}/>
                            <span>Stone</span>
                        </button>
                        <button onClick={() => onUserMove(1)}>
                            <img src={paper} alt="paper" height={100}/>
                            <span>Paper</span>
                        </button>
                        <button onClick={() => onUserMove(2)}>
                            <img src={scissors} alt="scissors" height={100}/>
                            <span>Scissors</span>
                        </button>
                    </div>
                    {(userScore === 5 || compScore === 5) && 
                        <div className="results-div">
                            <span>{userScore === 5 ? 'User' : 'Computer'} Won</span>
                            <button onClick={resetScores}>Retry</button>
                        </div>}
                </div>

                <div className="move-div">
                    <span>Current Turn</span>
                    <div className="turn">
                        <span>User : {userMove}</span>
                        <span>Computer : {computerMove}</span>
                    </div>
                    {currentStatus.trim() && <span>{currentStatus}</span>}
                </div>
            </div>
        </>
    )
}
