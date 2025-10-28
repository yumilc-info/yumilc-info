import { promises as fs } from "node:fs";
import path from "node:path";

const CONTENT_FILE = path.join(process.cwd(), "content", "news", "news.json");

type RawNewsEntry = {
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

const parseEntries = (rawJson: string): NewsEntry[] => {
	const parsed = JSON.parse(rawJson) as unknown;

	if (!Array.isArray(parsed)) {
		throw new Error("news.json must be an array");
	}

	const entries: NewsEntry[] = parsed.map((item, index) => {
		if (
			typeof item !== "object" ||
			item === null ||
			typeof (item as RawNewsEntry).publishedAt !== "string" ||
			typeof (item as RawNewsEntry).body !== "string"
		) {
			throw new Error(`Invalid entry at index ${index}`);
		}

		const publishedAt = (item as RawNewsEntry).publishedAt.trim();
		const body = (item as RawNewsEntry).body.trim();

		if (!publishedAt || !body) {
			throw new Error(`Empty fields are not allowed at index ${index}`);
		}

		const bodyHtml = convertToHtml(body);

		return {
			publishedAt,
			bodyHtml,
		};
	});

	return entries.sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);
};

export const getNewsEntries = async (): Promise<NewsEntry[]> => {
	const raw = await fs.readFile(CONTENT_FILE, "utf-8");
	return parseEntries(raw);
};
