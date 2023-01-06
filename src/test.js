import {Ship, Gameboard, Player, createComputer} from "./index"

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
    expect(titanic.sunk).toBe(true)
})

test("Factory function to create a ship return the correct length", () =>{
    expect(Ship(7).length).toBe(7)
})

test("Check whether Gameboard factory can place a ship at a location", ()=>{
    let redSea = Gameboard()
    let edmondFitzgerald = Ship(4)
    redSea.placeShip(edmondFitzgerald, [1,2],[2,2],[3,2],[4,2])
    expect(redSea.ships.length).toBe(1)
})

test("determine if receiveAttack() successfully calls hit() function on ship", () =>{
    let redSea = Gameboard()
    let edmondFitzgerald = Ship(4)
    redSea.placeShip(edmondFitzgerald, [1,2],[2,2],[3,2],[4,2])
    redSea.receiveAttack([1,2])
    expect(edmondFitzgerald.hits).toBe(1)
})

test("determine if misses are correctly stored in gameboard object", ()=>{
    let redSea = Gameboard()
    let edmondFitzgerald = Ship(4)
    redSea.placeShip(edmondFitzgerald, [1,2],[2,2],[3,2],[4,2])
    redSea.receiveAttack([7,0])
    expect(redSea.misses[0]).toEqual([7,0])
})

test("Check if not all ships on a gameboard are sunk", ()=> {
    let bikiniBottom = Gameboard()
    let canoe = Ship(1)
    let yacht = Ship(1)
    bikiniBottom.placeShip(canoe, [3,3])
    bikiniBottom.placeShip(yacht, [1,1])
    bikiniBottom.receiveAttack([3,3])
    expect(bikiniBottom.allShipsSunk).toBe(false)
})

test("Check if all ships on a gameboard are sunk", ()=> {
    let bikiniBottom = Gameboard()
    let canoe = Ship(1)
    let yacht = Ship(1)
    bikiniBottom.placeShip(canoe, [3,3])
    bikiniBottom.placeShip(yacht, [1,1])
    bikiniBottom.receiveAttack([3,3])
    bikiniBottom.receiveAttack([1,1])
    expect(bikiniBottom.allShipsSunk).toBe(true)
})

test("Check if player attack on a square without a ship successfully registers a miss", ()=>{
    let bikiniBottom = Gameboard()
    let canoe = Ship(1)
    bikiniBottom.placeShip(canoe, [3,3])
    const Caleb = Player()
    const shotFired = Caleb.attack(bikiniBottom, [4,6])
    shotFired.enemyBoard.receiveAttack(shotFired.coords)
    expect(bikiniBottom.misses.length).toBe(1)
})

test.skip("Check if computer can successfully attack squares", ()=>{
    let bikiniBottom = Gameboard()
    let canoe = Ship(1)
    bikiniBottom.placeShip(canoe, [3,3])
    const hal9000 = createComputer()
    const foo = hal9000.compAttack(bikiniBottom)
    bikiniBottom.receiveAttack(foo)
    expect(bikiniBottom.misses[0]).toEqual(foo)
})

