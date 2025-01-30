    <script>
        const images = document.querySelectorAll(".gallery img");
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("modalImg");

        images.forEach(img => {
            img.addEventListener("click", function() {
                modal.classList.add("active");
                modalImg.src = this.src;
            });
        });

        function closeModal() {
            modal.classList.remove("active");
        }
    </script>
