const form = document.getElementById('my-form')
const dropArea = document.querySelector('.drop-area')
dragText = dropArea.querySelector('div')
const main = document.querySelector('.main')
fileInput = main.querySelector('.form-control')
button = main.querySelectorAll('input')[1]
span = main.querySelector('span')


let fileArr; // this is a global variable and we'll it used inside multiple function


// if user drag file over drop-area
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent = "Release to Upload File"
})

// if user leave dragged file from drop-area
dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
    dragText.textContent = "Drag & Drop to Upload File"
})

// if user drop file on drop-area
dropArea.addEventListener('drop', (event) => {
    event.preventDefault()
    let file = event.dataTransfer.files
    let fileType = file[0].type
    let validExtension = ["application/pdf"];

    if (validExtension.includes(fileType)) {
        fileArr = [...file]

        showFile()

    } else {
        alert("This is not a PDF file!")
    }

})

function displayBtn(event) {
    // console.log('display btn')
    // // event.preventDefault()
    // console.log(event)
    let file = event.srcElement.files;
    fileArr = [...file]

    showFile()

}

function showFile() {

    if (fileArr.length === 1) {
        const dataTransfer = new DataTransfer();

        for (const element of fileArr) {
            dataTransfer.items.add(element);
        }
        fileInput.files = dataTransfer.files;
        button.hidden = false

    } else {
        const dataTransfer = new DataTransfer();

        for (let i = 0; i < 2; i++) {
            dataTransfer.items.add(fileArr[i]);
        }
        fileInput.files = dataTransfer.files;
        button.hidden = false
    }
}
