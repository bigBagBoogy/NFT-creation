let dropzone
let tweede
function setup() {
    noCanvas()
    console.log("sketch connected!")

    dropzone = select("#dropzone")
    dropzone.dragOver(highlight)
    dropzone.dragLeave(unhighlight)
    dropzone.drop(gotFile, unhighlight)
    tweede = select("#pinata")
    tweede.mousePressed(dopinata)
}

async function gotFile(file) {
    console.log(file.name)
    console.log(file.type)
    const filesz = file.size / 1000000
    const filesizeInMbs = parseFloat(filesz).toFixed(3)
    console.log(filesizeInMbs + "mb")
    var img = createImg(file.data, "altIsNFT")
    img.size(150, 150)
}

function highlight() {
    dropzone.style("background-color", "#ccc")
}

function unhighlight() {
    dropzone.style("background-color", "#fff")
}

function b() {
    console.log("barbara")
}
b()

function dopinata() {
    console.log("yeeeee de tweede doet het ook")
}
