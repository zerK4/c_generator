colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('.generate')


const generateColor = ()=> {
    return Math.floor(Math.random() * colors.length)
}



const number = document.querySelector('.chose')

let theCount;
const chosedNumber = ()=>{
    let theCount = Number(number.value)
    console.log(theCount)
    for(let x = 0; x < theCount; x++){
        const colorBlock = document.createElement('div')
        colorBlock.classList.add('color')
        document.querySelector('.main-container-bottom').appendChild(colorBlock)
        clearValue()       
    }

}    
const clearValue = ()=>{
    number.value = ''

}
btn.addEventListener('click', ()=>{
    chosedNumber();
    const color = document.querySelectorAll('.color')
    color.forEach((color)=>{
        color.addEventListener('mouseover', ()=>{
            color.style.transform = 'scale(1.05)'
            color.style.borderRadius = '10px'
            color.style.boxShadow =  '1px 1px 20px 1px black'
            color.style.transition = '.2s'
            color.style.zIndex = '99'
        })
        color.addEventListener('mouseout', ()=>{
            color.style.transform = ''
            color.style.borderRadius = ''
            color.style.boxShadow =  ''
            color.style.zIndex = ''
            if(theCount < 6){
                color.style.height = ""
                color.style.width = ""
            }
        })
        color.addEventListener('click', ()=>{
            if(theCount < 6){
                color.style.height = "100vh"
                color.style.width = "100vw"
            }
        })
        if(theCount >= 6){
            color.style.height = 'auto'
            document.querySelector('.main-container-bottom').style.flexWrap = 'wrap'
        }
        let newColor = '#'
            for(let i = 0;i < 6; i++){
                newColor += colors[generateColor()];
            }
                console.log(newColor);
                color.style.background = newColor;  
                color.innerHTML = newColor   
    })    
})
