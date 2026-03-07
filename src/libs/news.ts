import { promises as fs } from "node:fs";
import path from "node:path";
import {
	type RawNewsEntry,
	type NewsEntry,
	normalizeNewsEntries,
} from "./newsFormat";

const CONTENT_FILE = path.join(process.cwd(), "content", "news", "news.json");

const parseRawEntries = (rawJson: string): RawNewsEntry[] => {
	const parsed = JSON.parse(rawJson) as unknown;

	if (!Array.isArray(parsed)) {
		throw new Error("news.json must be an array");
	}

	return parsed as RawNewsEntry[];
};

export const getNewsEntries = async (): Promise<NewsEntry[]> => {
	const raw = await fs.readFile(CONTENT_FILE, "utf-8");
	const entries = parseRawEntries(raw);
	return normalizeNewsEntries(entries);
};

export type { RawNewsEntry, NewsEntry } from "./newsFormat";
