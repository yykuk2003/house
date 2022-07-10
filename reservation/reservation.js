// let upload = document.getElementById('upload');

// let outputBx = document.getElementById('outputBx');

// upload.addEventListener('change', () => {
//     let fr = new FileReader();
//     console.log(upload.files);
//     fr.readAsText(upload.files[0]);
//     fr.onload = () => {
//         outputBx.innerHTML = fr.result;
//     };
// });

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }