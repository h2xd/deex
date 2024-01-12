import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

import { BlocksIcon } from "lucide-react";

export function EmptyStateCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex flex-row items-center gap-2">
					<BlocksIcon />
					No Extensions yet
				</CardTitle>
				<CardDescription>
					Go over to the documentation an learn more
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
