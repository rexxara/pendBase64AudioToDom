console.log("aaa")
var file=document.getElementsByTagName("input")[0];
file.addEventListener("change",readFile,false)

function readFile(e) {
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {console.log(this.result); }
}
