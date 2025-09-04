// This file creates a styled box with the entered information and stacks it on top of previous boxes.
// Each box's data is an array: [inputText, checkmarkState]

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('infoForm');
    const displayArea = document.getElementById('boxesContainer');

    // Load existing boxes from localStorage
    loadBoxes();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputData = document.getElementById('infoInput').value;
        if (inputData) {
            createBox([inputData, false], true);
            form.reset();
            location.reload();
        }
    });

    function createBox(data, save) {
        const [text, checked, date] = data.length === 3 ? data : [data[0], data[1], getTodayString()];
        let dateGroup = document.getElementById(`group-${date}`);
        if (!dateGroup) {
            dateGroup = document.createElement('div');
            dateGroup.id = `group-${date}`;
            dateGroup.className = 'date-group';
            const dateHeader = document.createElement('h3');
            dateHeader.textContent = date;
            dateGroup.appendChild(dateHeader);
            displayArea.prepend(dateGroup);
        }

        const box = document.createElement('div');
        const boxText = document.createElement('p');
        const boxCheck = document.createElement('input');
        boxCheck.type = 'checkbox';
        boxCheck.className = 'checkbox';
        box.className = 'box';
        boxText.textContent = text;
        boxCheck.checked = checked;

        // Strikethrough if checked
        boxText.style.textDecoration = checked ? 'line-through' : 'none';

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            deleteBoxFromLocalStorage([text, checked, date], box);
            location.reload();
        });

        box.appendChild(boxCheck);
        box.appendChild(boxText);
        box.appendChild(deleteBtn);
        dateGroup.appendChild(box);

        boxCheck.addEventListener('change', () => {
            updateBoxCheckState(text, boxCheck.checked, boxText, date);
        });

        if (save) {
            saveBoxToLocalStorage([text, checked, date]);
        }
    }

    function saveBoxToLocalStorage(data) {
        let boxes = getBoxesFromLocalStorage();
        boxes.unshift(data);
        localStorage.setItem('infoBoxes', JSON.stringify(boxes));
    }

    function getBoxesFromLocalStorage() {
        const boxes = localStorage.getItem('infoBoxes');
        if (boxes) {
            return JSON.parse(boxes);
        }
        return [];
    }

    function loadBoxes() {
        const boxes = getBoxesFromLocalStorage();
        boxes.forEach(boxData => createBox(boxData, false));
    }

    function deleteBoxFromLocalStorage(data, boxElem) {
        let boxes = getBoxesFromLocalStorage();
        // Find the index of the box to delete by matching all fields and its position in the DOM
        let foundIndex = -1;
        let count = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (
                boxes[i][0] === data[0] &&
                boxes[i][1] === data[1] &&
                boxes[i][2] === data[2]
            ) {
                // Count how many matching boxes we've seen so far
                count++;
                // If this boxElem is the nth matching box in the DOM, delete it
                // Find all boxes in the DOM for this date group
                const dateGroup = document.getElementById(`group-${data[2]}`);
                const domBoxes = Array.from(dateGroup.getElementsByClassName('box'));
                let domCount = 0;
                for (let j = 0; j < domBoxes.length; j++) {
                    const p = domBoxes[j].querySelector('p');
                    const input = domBoxes[j].querySelector('input[type="checkbox"]');
                    if (
                        p &&
                        p.textContent === data[0] &&
                        input &&
                        input.checked === data[1]
                    ) {
                        domCount++;
                        if (domBoxes[j] === boxElem) {
                            foundIndex = i;
                            break;
                        }
                    }
                }
                if (foundIndex !== -1) break;
            }
        }
        if (foundIndex !== -1) {
            boxes.splice(foundIndex, 1);
            localStorage.setItem('infoBoxes', JSON.stringify(boxes));
        }
    }

    function updateBoxCheckState(text, checked, boxTextElem, date) {
        let boxes = getBoxesFromLocalStorage();
        boxes = boxes.map(box =>
            box[0] === text && box[2] === date ? [box[0], checked, box[2]] : box
        );
        localStorage.setItem('infoBoxes', JSON.stringify(boxes));
        boxTextElem.style.textDecoration = checked ? 'line-through' : 'none';
    }
    function getTodayString() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}.${month}.${year}`;
    }
});