import { convertToHtml } from "./newsFormat";

export type RawEventEntry = {
	publishedAt: string;
	eventDate: string;
	body: string;
};

export type EventEntry = {
	publishedAt: string;
	eventDate: string;
	bodyHtml: string;
};

export const normalizeEventEntries = (
	entries: RawEventEntry[],
): EventEntry[] => {
	const normalized = entries.map((item, index) => {
		if (
			typeof item !== "object" ||
			item === null ||
			typeof item.publishedAt !== "string" ||
			typeof item.eventDate !== "string" ||
			typeof item.body !== "string"
		) {
			throw new Error(`Invalid event entry at index ${index}`);
		}

		const publishedAt = item.publishedAt.trim();
		const eventDate = item.eventDate.trim();
		const body = item.body.trim();

		if (!publishedAt || !eventDate || !body) {
			throw new Error(`Empty fields are not allowed at index ${index}`);
		}

		return {
			publishedAt,
			eventDate,
			bodyHtml: convertToHtml(body),
		};
	});

	return normalized.sort(
		(a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime(),
	);
};
