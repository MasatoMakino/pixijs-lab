import { Application } from "pixi.js";

export function initApp(w = 800, h = 600) {
  const app = new Application({ width: w, height: h });
  document.body.appendChild(app.view);
  return app;
}

export function initLink() {
  const link = document.createElement("a");
  link.href = "https://google.com";
  link.innerHTML = "jump to google";

  const div = document.createElement("div");
  div.appendChild(link);
  document.body.appendChild(div);
}
