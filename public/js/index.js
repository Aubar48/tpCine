let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Home"
                : "Cine"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404 Not Found") {
    setInterval(() => {
        document.title =
            alertShow ? "404 Not Found"
                : "Cine"

        alertShow = !alertShow
    }, 1000)
}