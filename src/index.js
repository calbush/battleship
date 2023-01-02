//Object prototype for Ship so we don't need to repeatedly create the same method
const shipProto = {
    hit(){
        this.hits += 1
    },
    isSunk(){
        return this.hits === this.length
    }
}


const gameboardProto = {
    placeShip(ship, coords){
        this.ships.push({ship,coords})
    }
}


//Factory function for creating a ship
export const Ship = (length) => {
    let ship = Object.create(shipProto)
    ship.length = length
    ship.hits = 0
    return ship
}

export const Gameboard = () => {
    let board = Object.create(gameboardProto)
    board.ships = []
    return board
}
