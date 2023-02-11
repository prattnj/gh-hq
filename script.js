async function changeBackground() {
    let images = ["url('images/furniture.jpg')", "url('images/food.jpg')", "url('images/monks.jpg')", "url('images/amogus.jpg')"]
    let i = 0
    while (1 === 1) {
        document.getElementById("large-bg-img").style.backgroundImage = images[i]
        if (i === 3) i = 0
        else i++
        await sleep(2000)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}