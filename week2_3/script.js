
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.querySelector('input');
    const addButton = document.querySelector('button');
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
            const shortId = fullId.slice(-3) + '...';

            idCell.innerText = shortId; 
            taskCell.innerText = taskInput.value;
            statusCell.innerText = 'pending';
            //actionsCell.className = 'actions';

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
            });

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.addEventListener('click', function() {
                const newTask = prompt('Edit task:', taskCell.innerText);
                if (newTask !== null) {
                    taskCell.innerText = newTask;
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskTable.deleteRow(newRow.rowIndex);
                updateHeaderVisibility(); 
            });
            
            actionsCell.appendChild(changeStatusButton);
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
            
            taskInput.value = '';
        }
        updateHeaderVisibility();
    });
    updateHeaderVisibility(); 
});

