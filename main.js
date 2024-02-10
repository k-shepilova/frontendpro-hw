function createTable() {
    const table = document.createElement('table');
    const body = document.querySelector('body');
    body.prepend(table);
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = (i - 1) * 10 + j;
            row.appendChild(cell);
        }
    }
}

createTable();