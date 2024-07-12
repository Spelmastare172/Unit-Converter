function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;

    if (isNaN(value)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    switch (conversionType) {
        case 'meters_to_yards':
            result = (value * 1.09361).toFixed(5);
            break;
        case 'yards_to_meters':
            result = (value * 0.9144).toFixed(5);
            break;
        case 'kilograms_to_pounds':
            result = (value * 2.20462).toFixed(5);
            break;
        case 'pounds_to_kilograms':
            result = (value * 0.453592).toFixed(5);
            break;
        case 'liters_to_gallons':
            result = (value * 0.264172).toFixed(5);
            break;
        case 'gallons_to_liters':
            result = (value * 3.78541).toFixed(5);
            break;
        default:
            result = 'Unknown conversion type.';
    }

    document.getElementById('result').innerText = `Result: ${value} -> ${result}`;
}
