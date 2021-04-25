function urlCheckboxValidation(checkbox) {
    customUrlText = document.getElementById('custom-url')
    if (checkbox.checked == true) {
        customUrlText.disabled = false
        customUrlText.required = true
    } else {
        customUrlText.disabled = true
        customUrlText.required = false
    }
}