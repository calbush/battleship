
export const initialDOMSetup = () => {
    const body = document.querySelector('body')
    const main = document.createElement('div')
    main.classList.add('main')
    body.appendChild(main)

    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'BATTLESHIP!'
    main.appendChild(title)

    const instructions = document.createElement('div')
    instructions.classList.add('instructions')
    main.appendChild(instructions)

    const gameDisplay = document.createElement('div')
    gameDisplay.classList.add('gameDisplay')
    main.appendChild(gameDisplay)

    const controlPanel = document.createElement('div')
    controlPanel.classList.add('controlPanel')
    gameDisplay.appendChild(controlPanel)

    const left = document.createElement('div')
    left.classList.add('left')
    gameDisplay.appendChild(left)

    /*const right = document.createElement('div')
    right.classList.add('right')
    main.appendChild(right) */

}

export const buildControlPanel = () => {
    const panel = document.querySelector('.controlPanel')
    
    const orientationBtn = document.createElement('button')
    orientationBtn.classList.add('orientationBtn')
    orientationBtn.textContent = 'Flip piece'
    panel.appendChild(orientationBtn)

    const shipHolder = document.createElement('div')
    shipHolder.classList.add('shipHolder')
    panel.appendChild(shipHolder)

    const carrier = document.createElement('div')
    carrier.classList.add('carrier')
    carrier.classList.add('horizontal')
    carrier.setAttribute('draggable', 'true')
    carrier.classList.add('draggable')
    shipHolder.appendChild(carrier)
    //pass in length of the ship we're placing??
    const carrierLength = 5
    for(let i = 0; i < carrierLength; i++){
        let shipSq = document.createElement('div')
        shipSq.classList.add('shipSq')
        carrier.appendChild(shipSq)
    }
}

export const flip = () => {
    let carrier = document.querySelector('.carrier')
    if(carrier.classList.contains('horizontal')){
        carrier.classList.add('vertical')
        carrier.classList.remove('horizontal')
    } else {
        carrier.classList.add('horizontal')
        carrier.classList.remove('vertical')
    }
}

export const addListeners = () => {
    const flipBtn = document.querySelector('.orientationBtn')
    flipBtn.addEventListener('click', flip)
}

export const makeBoard = () => {
    const boardSquaresquantity = 100
    const leftBoard = document.querySelector('.left')
    for (let i = 0; i < boardSquaresquantity; i++){
        let boardSq = document.createElement('div')
        boardSq.classList.add('boardSq')
        leftBoard.appendChild(boardSq)
    }
}

export const drag = () => {
    const draggable = document.querySelector('.draggable')
    console.log(draggable)
    
    const containers = document.querySelectorAll('.boardSq')
    containers.forEach(container => {
        container.addEventListener('dragover', ()=>{
            container.appendChild(draggable)
        
        })
    })
}

