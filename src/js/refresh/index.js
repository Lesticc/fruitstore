window.onload = () => {
    const a = document.getElementById("a")
    const s = document.getElementById("s")
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }funcao()
    async function funcao() {
        await delay(1000)
        s.innerText = `4s`
        await delay(1000)
        s.innerText = `3s`
        await delay(1000)
        s.innerText = `2s`
        await delay(1000)
        s.innerText = `1s`
        await delay(1000)
        s.innerText = `...`
        a.style.display = `block`
    }
}