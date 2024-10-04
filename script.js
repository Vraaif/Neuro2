const form = document.getElementById('musicForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz4DMBtur8LTpIvINokTowLB8Ow_FBT89A3hgr4vNfysv46X3HpgoVO2hRgL243ei3N/exec', {
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
