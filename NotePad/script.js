window.onload = () => {
    let memo = localStorage['Memo'];
    if (memo == null) {
        memo = '';
    }
    document.getElementById('id_memo').value = memo;
}
document.getElementById('id_save').onclick = () => {
    localStorage['Memo'] = document.getElementById('id_memo').value;
}
document.getElementById('id_savefile').onclick = () => {
    let memo = document.getElementById('id_memo').value;
    let objectURL = window.URL.createObjectURL(new Blob([memo]));
    let a = document.createElement('a');
    a.download = 'download.txt';
    a.href = objectURL;
    a.click();
}
document.getElementById('id_openfile').onchange = function() {
    let file = this.files[0];
    if (file == null) return;
    let reader = new FileReader;
    reader.onload = function() {
        document.getElementById('id_memo').value = reader.result;
    }
    reader.readAsText(file);
}