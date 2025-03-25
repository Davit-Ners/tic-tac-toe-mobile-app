const mockData: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function checkRow(grid: string[][], player: string): boolean {
    let victory: boolean;
    for (const row of grid) {
        victory = true;
        for (const block of row) {
            if (block !== player) victory = false;
        }
        if (victory) return true;
    }
    return false;
};

function checkCol(grid: string[][], player: string): boolean {
    let victory: boolean;

    for (let i = 0; i < grid.length; i++) {
        victory = true;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[j][i] !== player) victory = false;
        }
        if (victory) return true;
    }
    return false;
};

function checkDiag(grid: string[][], player: string): boolean {
    let victory = true;
    for (let i = 0; i < grid.length; i++)  {
        if (grid[i][i] !== player) victory = false;
    }
    if (victory) return true;
    victory = true;

    for (let i = 0; i < grid.length; i++) {
        if (grid[i][grid.length - 1 - i] !== player) {
            victory = false;
            break;
        }
    }
    return victory;
};

export default function checkVictory(grid: string[][], player: string): boolean {
    return checkRow(grid, player) || checkCol(grid, player) || checkDiag(grid, player);
};