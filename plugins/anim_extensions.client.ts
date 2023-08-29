export default defineNuxtPlugin(nuxtApp => {
    /*
    ** Only run on client-side and only in production mode
    */
    if (process.client) {

        window.addEventListener('load', function () {
            setTimeout(function () {
                // Add the strikethrough animation
                const textElement = document.getElementById('animText');
                textElement?.classList.add('strikethrough-animation');

                setTimeout(function () {
                    // Fade out the text
                    textElement?.classList.remove('strikethrough-animation');
                    textElement?.classList.add('fade-out-animation');

                    setTimeout(function () {
                        // Replace the text and fade it in
                        textElement!.textContent = "Hillzere";
                        textElement?.classList.remove('fade-out-animation');
                        textElement?.classList.add('fade-in-animation');
                    }, 1500);  // Duration of the fade out animation

                }, 1000);  // Duration of the strikethrough animation

            }, 2000);  // 1 second delay before starting the animation
        })
    }
});