async function changeBackground(images) {
    let i = 0
    while (1 === 1) {
        document.getElementById("large-bg-img").style.backgroundImage = images[i]
        if (i === images.length - 1) i = 0
        else i++
        await sleep(3000)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}