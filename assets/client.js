import twemoji from "https://cdn.jsdelivr.net/npm/@discordapp/twemoji@15.1.0/+esm";

twemoji.parse(document.body, {
	className: "discord-custom-emoji",
	size: "svg",
	base: "https://cdn.jsdelivr.net/npm/@discordapp/twemoji@15.1.0/dist/",
	ext: ".svg",
});

const spoilers = [...document.querySelectorAll(".discord-spoiler")];
for (const spoiler of spoilers)
	spoiler.addEventListener("click", () => {
		if (spoiler.classList.contains("discord-spoiler")) {
			spoiler.classList.remove("discord-spoiler");
			spoiler.classList.add("discord-spoiler--revealed");
		}
	});
