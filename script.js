document.getElementById('musicForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita il comportamento predefinito del form

    const form = document.getElementById('musicForm');
    const formData = new FormData(form);

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyQ8Bm69U4V2UkBfV6lXlfBxMqev63IvG5fso7kbhKgDeupe9zp2Rx3jq_QQxg2maVJ/exec', {
            method: 'POST',
            mode: 'cors',
            body: formData
        });

        if (response.ok) {
            alert('Form successfully submitted!');
        } else {
            alert('Error submitting the form.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
