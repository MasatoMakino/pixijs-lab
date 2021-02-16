import { Application } from "pixi.js";

export function initApp(w = 800, h = 600) {
  const app = new Application({ width: w, height: h });
  document.body.appendChild(app.view);
  return app;
}

export function initLink() {
  const message = document.createElement("div");
  message.innerHTML = `This is a demo to check the behavior of img.texture.baseTexture.on("loaded") in pixi.js.<br>
Use the link to Google above to navigate the page, and use your browser's back button to redisplay it.<br>
If on("loaded") does not fire, the texture will be displayed in the upper left corner of the screen.`;
  const link = document.createElement("a");
  link.href = "https://google.com";
  link.innerHTML = "jump to google";

  const div = document.createElement("div");
  div.appendChild(link);
  div.appendChild(message);
  document.body.appendChild(div);
}
