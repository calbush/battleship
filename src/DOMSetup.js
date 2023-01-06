

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
    panel.appendChild(orientationBtn)
}

export const flipToHorizontal = () => {
    vertical = document.querySelector('vertical')
    vertical.classList.remove('vertical')
    vertical.textContent = 'Flip Pieces Horizontal'
}
