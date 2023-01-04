//Object prototype for Ship so we don't need to repeatedly create the same method
const shipProto = {
    hit(){
        this.hits += 1
        this.isSunk()
    },
    isSunk(){
        if(this.hits === this.length){
            this.sunk = true
        }
    }
}


const gameboardProto = {
    placeShip(ship, ...coords){
        this.ships.push({ship, coords})
        
    },
    receiveAttack(attack){
        //iterate through gameboard's ships property and check coords of each ship against attack
        for(let i = 0; i < this.ships.length; i++){
            for(let j = 0; j < this.ships[i].coords.length; j++){
                if (this.ships[i].coords[j].toString() == attack.toString()){
                    this.ships[i].ship.hit()
                    this.checkSunkShips()
                    return
                }
            }
        }
        this.misses.push(attack)
    },
    checkSunkShips(){
        let sunkShipsCount = 0
        for (let i = 0; i < this.ships.length; i++){
            if (this.ships[i].ship.sunk == true){
                sunkShipsCount += 1
            }
        }
        if(sunkShipsCount === this.ships.length){
            this.allShipsSunk = true
        }
    }
}


//Factory function for creating a ship
export const Ship = (length) => {
    let ship = Object.create(shipProto)
    ship.length = length
    ship.hits = 0
    ship.sunk = false
    return ship
}

export const Gameboard = () => {
    let board = Object.create(gameboardProto)
    board.shipCoords = []
    board.ships = []
    board.misses = []
    board.allShipsSunk = false
    return board
}
