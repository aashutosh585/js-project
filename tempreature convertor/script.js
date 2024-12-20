// Check if the current page is the temperature converter page
if (document.getElementById('convertBtn')) {
    document.getElementById('convertBtn').addEventListener('click', function() {
        const tempInput = parseFloat(document.getElementById('tempInput').value);
        const unit = document.getElementById('unitSelect').value;
        let result;

        if (isNaN(tempInput)) {
            document.getElementById('result').innerText = "Please enter a valid number.";
            return;
        }

        if (unit === 'C') {
            // Convert Celsius to Fahrenheit
            result = (tempInput * 9/5) + 32;
            document.getElementById('result').innerText = `${tempInput} °C is ${result.toFixed(2)} °F`;
        } else {
            // Convert Fahrenheit to Celsius
            result = (tempInput - 32) * 5/9;
            document.getElementById('result').innerText = `${tempInput} °F is ${result.toFixed(2)} °C`;
        }
    });
}