document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthValue').innerText = this.value;
});

function copyPassword() {
    var passwordInput = document.getElementById('generatedPassword');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}