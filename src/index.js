//Object prototype for Ship so we don't need to repeatedly create the same method
const shipProto = {
    hit(){
        this.hits += 1
    },
    isSunk(){
        return this.hits === this.length
    }
}


//Factory function for creating a ship
export const Ship = (length) => {
    let ship = Object.create(shipProto)
    ship.length = length
    ship.hits = 0
    return ship
}

