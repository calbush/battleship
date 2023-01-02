import {Ship, Gameboard} from "./index"

test("test whether calling the hit method on a ship works", () =>{
    let boaty = Ship(4)
    boaty.hit()
    expect(boaty.hits).toBe(1)
})

test("Check whether the ship is sunk or not", ()=> {
    let titanic = Ship(3)
    titanic.hit()
    titanic.hit()
    titanic.hit()
    expect(titanic.isSunk()).toBe(true)
})

test("Factory function to create a ship return the correct length", () =>{
    expect(Ship(7).length).toBe(7)
})

test("Check whether Gameboard factory can place a ship", ()=>{
    let redSea = Gameboard()
    let edmondFitzgerald = Ship(4)
    redSea.placeShip(edmondFitzgerald, [1,2])
    expect(redSea.ships.length).toBe(1)
})

