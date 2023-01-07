
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
}

export const createShip = (length) => {
    const carrier = document.createElement('div')
    carrier.classList.add('carrier')
    carrier.classList.add('horizontal')
    carrier.setAttribute('draggable', 'true')
    carrier.classList.add('draggable')

    let shipHolder = document.querySelector('.shipHolder')
    shipHolder.appendChild(carrier)

    const shipLength = length
    for(let i = 0; i < shipLength; i++){
        let shipSq = document.createElement('div')
        shipSq.classList.add('shipSq')
        shipSq.setAttribute('data-shipSqIndex', i)
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
    let foo = 0
    for (let i = 0; i < boardSquaresquantity; i++){
        let boardSq = document.createElement('div')
        boardSq.classList.add('boardSq')
        boardSq.setAttribute('data-coords', [foo % 10, 9 - Math.floor(foo/10)])
        leftBoard.appendChild(boardSq)
        foo += 1
    }
}


export const drag = () => {  
    const containers = document.querySelectorAll('.boardSq')
    containers.forEach(container => {
        
        container.addEventListener('dragover', (e)=>{
            let start = e.target.dataset.coords.split(',')
            let rightOne = [...start]
            rightOne[0] = parseInt(start[0]) + 1
            let rightOne2 = rightOne.join(',')
            document.querySelector(`[data-coords="${rightOne2}"]`).classList.add('blue')
            container.classList.add('blue')

        })
        container.addEventListener('dragleave', (e) => {
            let start = e.target.dataset.coords.split(',')
            let rightOne = [...start]
            rightOne[0] = parseInt(start[0]) + 1
            let rightOne2 = rightOne.join(',')
            document.querySelector(`[data-coords="${rightOne2}"]`).classList.remove('blue')
            container.classList.remove('blue')
        })
    })
}

