function urlCheckboxValidation(checkbox) {
    let customUrlText = document.getElementById('custom-url')
    if (checkbox.checked == true) {
        customUrlText.disabled = false
        customUrlText.required = true
    } else {
        customUrlText.disabled = true
        customUrlText.required = false
    }
}
function formValidation() {
    url = document.forms["urlCreationForm"]["url"].value;
    url = url.trim()
    console.log(url);
    let urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    let isUrl = urlRegex.test(url);
    if (isUrl) {
        let checkbox = document.forms["urlCreationForm"]["custom-url-checkbox"].checked;
        if (checkbox) {
            let customUrl = document.forms["urlCreationForm"]["custom_url"].value;
            let customUrlRegex = /^[\S]+$/gm
            let isUrl = customUrlRegex.test(customUrl)
            if (isUrl) {
                return true;
            }
        } else {
            return true;
        }
    }
    console.log(`Error in form`);
    return false;

}
