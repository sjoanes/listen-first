// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
	console.log("works")
})


const mainWindow = require('electron').remote.getCurrentWindow()

window.addEventListener('keydown', function () {
	mainWindow.setOpacity(0.1)
})

window.addEventListener('keyup', function () {
	mainWindow.setOpacity(0.9)
})