import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import * as appStyle from "../dist-styles/deex-styles.css?raw";

export function createDeex() {
	const host = window.document.createElement("div");
	host.id = "deex-root";

	const shadowRoot = host.attachShadow({ mode: "open" });

	const root = document.createElement("div");
	root.className = "bg-white-100 dark:bg-black-900";

	const appStyleElement = document.createElement("style");
	appStyleElement.innerHTML = appStyle.default;

	shadowRoot.appendChild(appStyleElement);
	shadowRoot.appendChild(root);
	window.document.body.appendChild(host);

	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
