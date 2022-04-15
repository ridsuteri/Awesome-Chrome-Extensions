// Called when popup.html is loaded.
window.onload = () => {
        // Load localStorage with Key = 'Memo'.
        // If it does not exist, the value is null.
        let memo = localStorage['Memo'];
        if (memo == null) {
            memo = '';
        }
        document.getElementById('id_memo').value = memo;
    }
    // Click save button
document.getElementById('id_save').onclick = () => {
    // Load localStorage with Key = 'Memo'.
    localStorage['Memo'] = document.getElementById('id_memo').value;
}