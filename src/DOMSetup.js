
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
    let foo = 0
    for (let i = 0; i < boardSquaresquantity; i++){
        let boardSq = document.createElement('div')
        boardSq.classList.add('boardSq')
        boardSq.setAttribute('data-XY', [foo % 10, 9 - Math.floor(foo / 10)])
        leftBoard.appendChild(boardSq)
        
        foo += 1

        boardSq.addEventListener('click', (e) => {
            let firstCoord = e.target.dataset.xy
            //**************************************** replace carrier
            let shipNode = document.querySelector('.carrier')
            let isVertical = shipNode.classList.contains('vertical')

            document.querySelector(`[data-xy="${firstCoord}"]`).classList.add('blue')
            let coordsCopy = firstCoord.split(',')

            if (isVertical){
                // ************************** replace 5 in for loop with ship length
                //if coordsCopy Y is less than length of ship - 1  -- DONT EXECUTE
                for (let i = 1; i < 5; i++){
                    coordsCopy[1] = parseInt(coordsCopy[1]) - 1
                    document.querySelector(`[data-XY="${coordsCopy}"]`).classList.add('blue')
                }
            } else {
                //if coordsCopy X is greater than length of ship + 1
                for (let i = 1; i < 5; i++){
                    coordsCopy[0] = parseInt(coordsCopy[0]) + 1
                    document.querySelector(`[data-XY="${coordsCopy}"]`).classList.add('blue')
            }
        }})
    }
}




