/* eslint-env browser */

const spoilers = [...document.querySelectorAll(".discord-spoiler")];
for (const spoiler of spoilers)
	spoiler.addEventListener("click", () => {
		if (spoiler.classList.contains("discord-spoiler")) {
			spoiler.classList.remove("discord-spoiler");
			spoiler.classList.add("discord-spoiler--revealed");
		}
	});
