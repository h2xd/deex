import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import React from "react";
import { clsx } from "clsx";

function App() {
	function getColorPreference(): "light" | "dark" {
		if (matchMedia("(prefers-color-scheme: light)").matches) {
			return "light";
		}

		return "dark";
	}

	const [isLightMode, toggleLightMode] = React.useState(
		getColorPreference() === "light",
	);

	return (
		<>
			<div
				className={clsx(
					"fixed bottom-0 right-0 w-[50%] h-[100%] bg-white shadow-lg p-4",
					{ container: true, light: isLightMode, dark: !isLightMode },
				)}
			>
				<h1 className="font-bold">Deex</h1>

				<Button onClick={() => toggleLightMode(!isLightMode)}>Hello</Button>
			</div>
		</>
	);
}

export default App;
