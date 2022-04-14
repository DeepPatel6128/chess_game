
import { alphPosOut } from '../../config/alphabetPos.js'

export default {
    determineKnight({ isWhitePiece, pieceBoxPosition }) {
        this.generatePotentialDeterminations({ isWhitePiece, pieceBoxPosition, determinations: knightDeterminations })
    },
    
}

const knightDeterminations = [
    (col, row) => `${ alphPosOut[ col - 1 ]}${ row - 2 }`, 
    (col, row) => `${ alphPosOut[ col - 2 ]}${ row - 1 }`,
    (col, row) => `${ alphPosOut[ col + 1 ]}${ row + 2 }`, 
    (col, row) => `${ alphPosOut[ col + 2 ]}${ row + 1 }`,

    (col, row) => `${ alphPosOut[ col - 1 ]}${ row + 2 }`, 
    (col, row) => `${ alphPosOut[ col - 2 ]}${ row + 1 }`,
    (col, row) => `${ alphPosOut[ col + 1 ]}${ row - 2 }`, 
    (col, row) => `${ alphPosOut[ col + 2 ]}${ row - 1 }`,

]
