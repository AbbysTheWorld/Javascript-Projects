import { useState} from "react"
import "./StyleDefault.css"
import Popup from "../Popup/Popup"
import imgQuiz from "../imgs/HeroiBackground.jpg"

export default function QuizTemplate(props) {

  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [showResult,setShowResult] = useState(false)

  const [showIncorrect,setShowIncorrect] = useState(null)
  const [showIncorrectVisibility,setShowIncorrectVisibility] = useState(false)

  const questions = [
    {
      question: 'Qual foi o super-heroí que teve contanto com uma bomba nuclear?',
      options: ['Hulk','Super men','Homem de ferro','Capitão America'],
      correctAnswer: 'Hulk'
    },
    {
      question: 'Qual é o super heroi capaz de se diminuir?',
      options: ['Homem formiga','Homem aranha','Homem elastico','Flash'],
      correctAnswer: 'Homem formiga'
    },
    {
      question: 'Qual é o super heroi que tem como fraqueza a kryriptonita?',
      options: ['Homem de ferro','Doutor estranho','Super men','Hulk'],
      correctAnswer: 'Super men'
    },
    {
      question: 'Qual é o super heroi capaz de levantar o martelo do thor?',
      options: ['Super choque','Capitão America','Homem formiga','Homem elastico'],
      correctAnswer: 'Capitão America'
    },
    {
      question: 'Qual é o super heroi que é imortal?',
      options: ['Capitão America','Homem de ferro','Deadpool','Mulher maravilha'],
      correctAnswer: 'Deadpool'
    },
    {
      question: 'Qual é o super heroi conhecido por arruinar linhas temporais?',
      options: ['Flash','Batman','Kid flash','Super men'],
      correctAnswer: 'Flash'
    },
    {
      question: 'Qual é o super heroi que perdeu seus pais muito cedo?',
      options: ['Robin','Mutano','Batman','Ciborgue'],
      correctAnswer: 'Batman'
    },
    {
      question: 'Qual é o super heroi que foi picado por uma aranha? e se tornou um heroi..',
      options: ['Thor','Mulher maravilha','Homem aranha','Super men'],
      correctAnswer: 'Homem aranha'
    },
    {
      question: 'Qual é o super heroi com o poder mais roubado?',
      options: ['Deadpool','Wolverine','Doutor estranho','Homem elastico'],
      correctAnswer: 'Doutor estranho'
    },
    {
      question: 'Qual é o super heroi que é capaz de virar outros animais?',
      options: ['Doutor estranho','Mutano','Ravena','Batman'],
      correctAnswer: 'Mutano'
    },
  ]
  
  const  handleAnswerCorrect = (option)=>{
    if (option == questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
      verifyScore()
    }else{
      setShowIncorrectVisibility(true)
      setShowIncorrect(<Popup backgroundColor="darkred" subContent="Sua respota está errada!" content={option} functionClose={setShowIncorrectVisibility}/>)
    }
  }

  const verifyScore=()=>{
    if(currentQuestion < questions.length - 1){
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowResult(true)
    }
  }

  const rechargePage=()=>{
    window.location.reload()
  }

  return(
    <>
    <div className="page-quiz-body"> 
    {showResult? (
      <div className="page-quiz-result">
        <p>Sua pontuação final foi: {score}/{questions.length}</p>
        <p>Parabens!</p>
        <button onClick={()=>rechargePage()}>Jogar Novamente?</button>
      </div>
    ):(
      <div className="page-quiz-content">
        <div className="mainContent">
          <img src={imgQuiz} alt="hero"
           />
          <h2>{questions[currentQuestion].question}</h2>
          <p>Seu score atual: {score} / {questions.length}</p>
        </div>
        <div className="mainAnswers">
          {questions[currentQuestion].options.map((el,key)=>{
            return(
              <button key={key} onClick={()=>{handleAnswerCorrect(el)}} >{el}</button>
            )
          })}
        </div>
      </div>
    )}
    </div>
    {showIncorrectVisibility==true?showIncorrect:null}
    </>
  )
}
