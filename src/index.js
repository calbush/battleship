
import { addListeners, buildControlPanel, initialDOMSetup, makeBoard} from "./DOMSetup"
import "./styles.css"

//Object prototype for Ship so we don't need to repeatedly create the same method

const setupGame = () => {
    //player board ships and pieces
    let coolGuy = Player()
    let lakeMichigan = Gameboard()
    //computer board ships and pieces

}

initialDOMSetup()
buildControlPanel()
makeBoard()
addListeners()

//immediately create ship objects and place them on corresponding player's boards

/*create 5 ships for player... from 5-1 in length... 
create a DOM "ship" that is length(n) squares and associate it with the ship object
player can drag their cursor across their gameboard cursor is on the 'middle' of ship
when the player clicks...place that ship on their gameboard
for DOM - create a button to flip ship X or Y

*/

//You can only attack enemy board

//computer moves after every player move