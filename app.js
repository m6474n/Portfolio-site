console.log("Srcipt Running .......")
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle('sidebar-go')
    if (document.querySelector(".sidebar").classList.contains('sidebar-go')) {
        document.querySelector(".cross").style.display = "none";
        setTimeout(() => {
            document.querySelector(".ham").style.display = "inline";

        }, 400);


    } else {
        document.querySelector(".ham").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";

        }, 400);

    }
})