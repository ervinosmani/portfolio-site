// Modal Logic

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalLink = document.getElementById("modalLink");
    const githubLink = document.getElementById("githubLink");
    const closeBtn = document.querySelector(".close");

    // Sigurohemi që modal-i është i fshehur kur faqja ngarkohet
    modal.style.display = "none";

    // Merr të gjitha kartat e projekteve dhe shton event listener për klikim
    document.querySelectorAll(".project-card").forEach((card, index) => {
        card.addEventListener("click", function () {
            const titles = ["Project 1", "Project 2", "Project 3"];
            const descriptions = [
                "This is a description for Project 1.",
                "This is a description for Project 2.",
                "This is a description for Project 3."
            ];
            const liveLinks = [
                "https://vue-job-finder.netlify.app",
                "https://ervinosmani.github.io/quote-generator",
                "https://your-live-project3-link.com"
            ];
            const githubLinks = [
                "https://github.com/ervinosmani/vue-job-finder",
                "https://github.com/ervinosmani/quote-generator",
                "https://github.com/yourusername/project3"
            ];

            modalTitle.innerText = titles[index];
            modalDescription.innerText = descriptions[index];
            modalLink.href = liveLinks[index]; 
            githubLink.href = githubLinks[index];

            modal.style.display = "flex"; // Siguron që modal-i të shfaqet në qendër
            modal.classList.remove("fade-out"); // Hiq animacionin e mbylljes nëse ishte aktiv
            modal.classList.add("fade-in"); // Shton animacionin e hapjes
        });
    });

    // Sigurohu që butoni 'X' funksionon me animacion të mbylljes
    closeBtn.addEventListener("click", function () {
        modal.classList.remove("fade-in"); // Hiq animacionin e hapjes
        modal.classList.add("fade-out"); // Shton animacionin e mbylljes
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("fade-out"); // Heq klasën për animacionin
        }, 300); // Koha duhet të përputhet me animacionin (0.3s)
    });

    // Mbyll modal-in kur përdoruesi klikon jashtë tij
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("fade-out");
            }, 300);
        }
    });

    // Funksioni për trajtimin e formularit të kontaktit
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mos lejo refresh-in e faqes pas dërgimit

        // Merr të dhënat nga fushat e input-it
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Kontroll nëse fushat janë të mbushura
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Trego mesazhin e konfirmimit
        document.getElementById("confirmationMessage").style.display = "block";

        // Pastro fushat pas dërgimit të suksesshëm
        document.getElementById("contactForm").reset();

        // Fsheh mesazhin pas 4 sekondash
        setTimeout(function() {
            document.getElementById("confirmationMessage").style.display = "none";
        }, 4000);
    });
});

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");

    // Shto ose hiq klasën që lëviz "Hello, I'm Ervin Osmani"
    document.body.classList.toggle("menu-open");
}

