import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import * as appStyle from "../dist-styles/deex-styles.css?raw";
import { DeexExtension, ExtensionConfig } from "./DeexExtension.tsx";

export function createDeexExtension(config: ExtensionConfig): DeexExtension {
	console.log("createExtension", config);

	return {
		id: Date.now(),
		config,
	};
}

export function createDeex() {
	const host = window.document.createElement("div");
	host.id = "deex-root";

	const shadowRoot = host.attachShadow({ mode: "open" });

	const root = document.createElement("div");
	root.className = "deex-container";

	const appStyleElement = document.createElement("style");
	appStyleElement.innerHTML = appStyle.default;

	shadowRoot.appendChild(appStyleElement);
	shadowRoot.appendChild(root);

	window.document.body.appendChild(host);

	let cacheBust = 0;

	const extensions: DeexExtension[] = [];

	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<App cacheBust={cacheBust} extensions={extensions} />
		</React.StrictMode>,
	);

	return {
		installExtension: (extension: DeexExtension) => {
			console.log("installExtension", extension);
			extensions.push(extension);
			cacheBust++;
		},
	};
}
