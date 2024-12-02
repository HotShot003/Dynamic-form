document.addEventListener('DOMContentLoaded', () => {
    const addFieldBtn = document.getElementById('add-field-btn');
    const inputContainer = document.getElementById('input-container');
    let fieldCount = 0;

    // Add new input field
    addFieldBtn.addEventListener('click', () => {
        fieldCount++;
        const newField = document.createElement('div');
        newField.classList.add('field');
        newField.innerHTML = `
            <input type="text" name="field${fieldCount}" placeholder="Enter value ${fieldCount}" required>
            <button type="button" class="remove-btn">Remove</button>
        `;
        inputContainer.appendChild(newField);

        // Add remove functionality
        const removeBtn = newField.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            inputContainer.removeChild(newField);
        });
    });

    // Handle form submission
    const form = document.getElementById('dynamic-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        for (const [name, value] of formData) {
            console.log(`${name}: ${value}`);
        }
        alert('Form submitted! Check the console for details.');
    });
});
