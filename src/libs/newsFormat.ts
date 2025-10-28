export type RawNewsEntry = {
	publishedAt: string;
	body: string;
};

export type NewsEntry = {
	publishedAt: string;
	bodyHtml: string;
};

const escapeHtml = (value: string): string =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");

const formatLinks = (value: string): string =>
	value.replace(
		/\[([^[\]]+)]\((https?:\/\/[^\s)]+)\)/g,
		(_match, label: string, url: string) =>
			`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`,
	);

const convertToHtml = (value: string): string => {
	const paragraphs = value
		.trim()
		.split(/\n{2,}/)
		.map((paragraph) => paragraph.trim())
		.filter((paragraph) => paragraph.length > 0);

	if (!paragraphs.length) {
		return "";
	}

	return paragraphs
		.map((paragraph) => {
			const escaped = escapeHtml(paragraph);
			const withLinks = formatLinks(escaped);
			const withLineBreaks = withLinks.replace(/\n/g, "<br />");
			return `<p>${withLineBreaks}</p>`;
		})
		.join("");
};

export const normalizeNewsEntries = (entries: RawNewsEntry[]): NewsEntry[] => {
	const normalized = entries.map((item, index) => {
		if (
			typeof item !== "object" ||
			item === null ||
			typeof item.publishedAt !== "string" ||
			typeof item.body !== "string"
		) {
			throw new Error(`Invalid entry at index ${index}`);
		}

		const publishedAt = item.publishedAt.trim();
		const body = item.body.trim();

		if (!publishedAt || !body) {
			throw new Error(`Empty fields are not allowed at index ${index}`);
		}

		return {
			publishedAt,
			bodyHtml: convertToHtml(body),
		};
	});

	return normalized.sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);
};
