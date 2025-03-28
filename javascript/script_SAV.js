function showForm() {
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('formPage').classList.remove('hidden');
}

function nextStep() {
    const form = document.getElementById('appointmentForm');
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (isValid) {
        document.getElementById('formPage').classList.add('hidden');
        document.getElementById('formPage2').classList.remove('hidden');
    }
}

function previousStep() {
    document.getElementById('formPage2').classList.add('hidden');
    document.getElementById('formPage').classList.remove('hidden');
}

function finalStep() {
    const form = document.getElementById('vehicleForm');
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (isValid) {
        document.getElementById('formPage2').classList.add('hidden');
        document.getElementById('completionPage').classList.remove('hidden');
    }
}

function returnHome() {
    window.location.reload();
}

// Optional: Add input validation on typing for second form
document.querySelectorAll('#vehicleForm input, #vehicleForm select').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            input.style.borderColor = '#ddd';
        }
    });
});

