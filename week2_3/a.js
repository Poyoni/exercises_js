function saveTableToLocalStorage() {
    const table = document.querySelector('table');
    const rows = Array.from(table.rows).slice(1); // דילוג על שורת הכותרות
    const tableData = rows.map(row => {
        return {
            id: row.cells[0].innerText,
            task: row.cells[1].innerText,
            status: row.cells[2].innerText
        };
    });
    localStorage.setItem('tableData', JSON.stringify(tableData));
}


function loadTableFromLocalStorage() {
    const tableData = JSON.parse(localStorage.getItem('tableData'));
    if (tableData) {
        const table = document.querySelector('table');
        tableData.forEach(data => {
            const newRow = table.insertRow();
            const idCell = newRow.insertCell(0);
            const taskCell = newRow.insertCell(1);
            const statusCell = newRow.insertCell(2);
            const actionsCell = newRow.insertCell(3);

            idCell.innerText = data.id;
            taskCell.innerText = data.task;
            statusCell.innerText = data.status;
            actionsCell.className = 'actions';

            const changeStatusButton = document.createElement('button');
            changeStatusButton.innerText = 'Change status';
            changeStatusButton.addEventListener('click', function() {
                if (statusCell.innerText === 'pending') {
                    statusCell.innerText = 'finish';
                    taskCell.classList.add('completed');
                } else {
                    statusCell.innerText = 'pending';
                    taskCell.classList.remove('completed');
                }
                saveTableToLocalStorage(); // שמירה לאחר שינוי סטטוס
            });

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.addEventListener('click', function() {
                const newTask = prompt('Edit task:', taskCell.innerText);
                if (newTask !== null) {
                    taskCell.innerText = newTask;
                    saveTableToLocalStorage(); // שמירה לאחר עריכה
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function() {
                table.deleteRow(newRow.rowIndex);
                saveTableToLocalStorage(); // שמירה לאחר מחיקה
            });

            actionsCell.appendChild(changeStatusButton);
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    }
}

// קריאה לפונקציה לטעינת הטבלה בעת טעינת הדף
document.addEventListener('DOMContentLoaded', loadTableFromLocalStorage);


document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('button');
    const taskInput = document.querySelector('input');
    const taskTable = document.querySelector('table');
    const headerRow = document.querySelector('thead tr');

    function updateHeaderVisibility() {
        if (taskTable.rows.length > 1) {
            headerRow.style.display = '';
        } else {
            headerRow.style.display = 'none';
        }
    }

    addButton.addEventListener('click', function() {
        if (taskInput.value.trim() !== '') {
            const newRow = taskTable.insertRow();
            const idCell = newRow.insertCell(0);
            const taskCell = newRow.insertCell(1);
            const statusCell = newRow.insertCell(2);
            const actionsCell = newRow.insertCell(3);

            const fullId = Date.now().toString();
            const shortId = fullId.substring(0, 3) + '...'; // הצגת 3 הספרות הראשונות ולאחר מכן ...

            idCell.innerText = shortId;
            taskCell.innerText = taskInput.value;
            statusCell.innerText = 'pending';
            actionsCell.className = 'actions';

            const changeStatusButton = document.createElement('button');
            changeStatusButton.innerText = 'Change status';
            changeStatusButton.addEventListener('click', function() {
                if (statusCell.innerText === 'pending') {
                    statusCell.innerText = 'finish';
                    taskCell.classList.add('completed');
                } else {
                    statusCell.innerText = 'pending';
                    taskCell.classList.remove('completed');
                }
                saveTableToLocalStorage(); // שמירה לאחר שינוי סטטוס
            });

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.addEventListener('click', function() {
                const newTask = prompt('Edit task:', taskCell.innerText);
                if (newTask !== null) {
                    taskCell.innerText = newTask;
                    saveTableToLocalStorage(); // שמירה לאחר עריכה
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskTable.deleteRow(newRow.rowIndex);
                saveTableToLocalStorage(); // שמירה לאחר מחיקה
            });

            actionsCell.appendChild(changeStatusButton);
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);

            taskInput.value = ''; // ניקוי השדה לאחר הוספת המשימה
            updateHeaderVisibility();
            saveTableToLocalStorage(); // שמירה לאחר הוספת משימה
        }
    });

    updateHeaderVisibility(); // בדיקה ראשונית של מצב הכותרת
});

