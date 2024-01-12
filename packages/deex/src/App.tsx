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

	const [isOpen, toggleOpen] = React.useState(false);

	return (
		<>
			<div className="fixed bottom-0 right-0">
				<Button onClick={() => toggleOpen(true)}>Open Deex</Button>
			</div>
			<div
				className={clsx(
					"fixed left-0 -bottom-[100%] w-[100%] h-[80%] opacity-0 shadow-lg transition-all duration-300 z-50 overflow-hidden rounded-t",
					{
						light: isLightMode,
						dark: !isLightMode,
						"bottom-0": isOpen,
						"opacity-100": isOpen,
					},
				)}
			>
				<div className="absolute top-0 left-0 w-[100%] h-[100%] bg-slate-100/95 dark:bg-slate-950/95 text-slate-900 dark:text-slate-100 p-4 backdrop-blur overflow-auto">
					<h1 className="font-bold">Deex</h1>

					<Button onClick={() => toggleLightMode(!isLightMode)}>
						Toggle Theme
					</Button>

					<Button onClick={() => toggleOpen(false)}>Close Deex</Button>
				</div>
			</div>
		</>
	);
}

export default App;
