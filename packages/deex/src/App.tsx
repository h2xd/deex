import { Button } from "@/components/ui/button.tsx";
import React, { useEffect } from "react";
import { clsx } from "clsx";

import { SunIcon, MoonIcon, XIcon } from "lucide-react";
import { DeexExtension } from "./DeexExtension";
import { EmptyStateCard } from "./compositions/EmptyStateCard.tsx";

function App(props: { cacheBust: number; extensions: DeexExtension[] }) {
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

	useEffect(() => {
		console.log("cacheBust", props.cacheBust);
		console.log("extensions", props.extensions);
	}, [props.cacheBust, props.extensions]);

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
					<div className="flex flex-col gap-8">
						<div className="flex flex-row items-center justify-between">
							<h1 className="font-bold text-xl">Deex</h1>

							<div className="">
								<Button
									variant="ghost"
									size="icon"
									onClick={() => toggleLightMode(!isLightMode)}
								>
									{isLightMode ? <SunIcon /> : <MoonIcon />}
								</Button>

								<Button
									variant="ghost"
									size="icon"
									onClick={() => toggleOpen(false)}
								>
									<XIcon />
								</Button>
							</div>
						</div>

						{!props.extensions.length && <EmptyStateCard />}

						{props.extensions.length > 0 && (
							<div className="flex flex-col gap-4">
								{props.extensions.map((extension) => (
									<div className="flex flex-col gap-4" key={extension.id}>
										<h2 className="font-bold text-lg">
											{extension.config.title}
										</h2>

										<div className="flex flex-col gap-4">
											{extension.config.panels.map((panel, panelIndex) => (
												<div
													className="flex flex-col gap-4"
													key={`extension-panel-${panelIndex}`}
												>
													<h3 className="font-bold text-md">{panel.title}</h3>

													<div className="flex flex-row gap-4">
														{panel.components.map(
															(component, componentIndex) => (
																<Button
																	onClick={() =>
																		component.onClick.apply(null, [
																			() => toggleOpen(false),
																		])
																	}
																	key={`extension-panel-${panelIndex}-${componentIndex}`}
																>
																	{component.title}
																</Button>
															),
														)}
													</div>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
