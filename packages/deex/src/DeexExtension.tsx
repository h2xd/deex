export type DeexExtension = {
	id: number;
	config: ExtensionConfig;
};

export type ExtensionConfig = {
	title: string;
	description: string;
	panels: ExtensionPanel[];
};

type ExtensionPanel = {
	title: string;
	description?: string;
	components: ExtensionComponent[];
};

type ExtensionButtonComponent = {
	title: string;
	onClick: (close: () => void) => unknown;
};

type ExtensionComponent = ExtensionButtonComponent;
