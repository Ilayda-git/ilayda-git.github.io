document.addEventListener("DOMContentLoaded", () => {
    console.log("Le site est chargé !");
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            alert(`Vous avez cliqué sur ${link.textContent}`);
        });
    });
});
