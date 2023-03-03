let c=console.log.bind(document)
let guess= document.querySelector('.guess')
let checkBtn=document.querySelector('.check')
let message=document.querySelector('.message')
// let score=document.querySelector('.score')
let number=document.querySelector('.number')
let body=document.querySelector('body')
let again =document.querySelector('.again')
// let highscore=document.querySelector('.highscore')


let score=20
let highscore=0;
let randomNum=Math.floor(Math.random()*20)+1;
number.textContent=randomNum

checkBtn.addEventListener('click',()=>{
   let guess1=Number(guess.value)
    c(guess1, typeof guess1)


    if(!guess1){
    message.dtextContent='No number!'
    }
    // when player wins
    else if(guess1===randomNum){
        message.textContent='Correct Number!!✨🎉🎉✨'
        body.style.backgroundColor='#60b347';
        number.style.width='30rem'
        number.textContent=randomNum;
        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    // when guess is wrong
    if(guess1 !==randomNum){
         // when player to high
     if(guess1>randomNum){
        if(score>1){
            message.textContent="Too High!!📈📈"
            score--
            document.querySelector('.score').textContent=score

        }else{
            message.textContent='You lost😞'
        }
        
    }
 // when player is too low
    else if(guess1<randomNum){
        if(score>1){
            
        message.textContent="Too low!!📉📉"
        score--
        document.querySelector('.score').textContent=score;

        }else{
            message.textContent='You lost😞'
        }
        
    }
    }
   
   
   
})

again.addEventListener('click',()=>{
   score = 20
   randomNum=Math.floor(Math.random()*20)+1;
   message.textContent="Start guessing..."
   document.querySelector('.score').textContent=score;
   number.textContent='?'
   
   document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem'
    guess1.value=''
})

// let arr=[1,2,3,4,15,6,7,8]
// let max=arr[0]
// let highestInTheRom=()=>{
//     for(let i=0;i<arr.length;i++){
   
//         if(max<arr[i]){
//           max=arr[i]
//         }
//       }c(max)
// }
// highestInTheRom()

// c(Math.max(...arr))

