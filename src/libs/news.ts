import { promises as fs } from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import hljs from "highlight.js";

const CONTENT_DIR = path.join(process.cwd(), "content", "news");

type Frontmatter = {
	slug?: string;
	title: string;
	publishedAt: string;
	summary?: string;
	tags?: string[];
};

export type NewsSummary = {
	slug: string;
	title: string;
	publishedAt: string;
	summary: string;
};

export type NewsDetail = NewsSummary & {
	contentHtml: string;
};

const escapeHtml = (value: string): string =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");

const applyInlineFormatting = (text: string): string => {
	let result = escapeHtml(text);

	// Inline code
	result = result.replace(/`([^`]+)`/g, (_match, code: string) => {
		return `<code>${escapeHtml(code)}</code>`;
	});

	// Links [label](url)
	result = result.replace(
		/\[([^[\]]+)]\(([^)\s]+)\)/g,
		(_match, label: string, url: string) => {
			return `<a href="${escapeHtml(url)}">${label}</a>`;
		},
	);

	// Bold **text** or __text__
	result = result.replace(
		/(\*\*|__)(.*?)\1/g,
		(_match, _wrapper: string, content: string) =>
			`<strong>${content}</strong>`,
	);

	// Emphasis *text* or _text_
	result = result.replace(
		/(\*|_)(.*?)\1/g,
		(_match, _wrapper: string, content: string) => `<em>${content}</em>`,
	);

	return result;
};

const markdownToHtml = (markdown: string): string => {
	const lines = markdown.replace(/\r\n/g, "\n").split("\n");
	const htmlParts: string[] = [];

	let paragraphBuffer = "";
	let listType: "ul" | "ol" | null = null;
	let listBuffer: string[] = [];
	let inCodeBlock = false;
	let codeLanguage = "";
	let codeBuffer: string[] = [];
	let index = 0;

	const flushParagraph = () => {
		if (paragraphBuffer.trim()) {
			htmlParts.push(`<p>${applyInlineFormatting(paragraphBuffer.trim())}</p>`);
		}
		paragraphBuffer = "";
	};

	const flushList = () => {
		if (listType) {
			htmlParts.push(
				`<${listType}>${listBuffer
					.map((item) => `<li>${applyInlineFormatting(item)}</li>`)
					.join("")}</${listType}>`,
			);
		}
		listType = null;
		listBuffer = [];
	};

	while (index < lines.length) {
		const line = lines[index];

		// Code block handling
		const codeBlockMatch = line.match(/^```(\w+)?\s*$/);
		if (codeBlockMatch) {
			if (inCodeBlock) {
				// Closing block
				const highlighted = escapeHtml(codeBuffer.join("\n"));
				htmlParts.push(
					`<pre><code class="language-${codeLanguage}">${highlighted}</code></pre>`,
				);
				inCodeBlock = false;
				codeLanguage = "";
				codeBuffer = [];
			} else {
				flushParagraph();
				flushList();
				inCodeBlock = true;
				codeLanguage = codeBlockMatch[1] ?? "";
				codeBuffer = [];
			}
			index += 1;
			continue;
		}

		if (inCodeBlock) {
			codeBuffer.push(line);
			index += 1;
			continue;
		}

		// Horizontal rule
		if (/^(-{3,}|_{3,}|\*{3,})$/.test(line.trim())) {
			flushParagraph();
			flushList();
			htmlParts.push("<hr />");
			index += 1;
			continue;
		}

		// Blank line
		if (!line.trim()) {
			flushParagraph();
			flushList();
			index += 1;
			continue;
		}

		// Headings
		const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
		if (headingMatch) {
			flushParagraph();
			flushList();
			const level = headingMatch[1].length;
			const content = headingMatch[2].trim();
			htmlParts.push(
				`<h${level}>${applyInlineFormatting(content)}</h${level}>`,
			);
			index += 1;
			continue;
		}

		// Blockquote
		if (/^\s*>/.test(line)) {
			flushParagraph();
			flushList();
			const quoteLines: string[] = [];
			while (index < lines.length && /^\s*>/.test(lines[index])) {
				quoteLines.push(lines[index].replace(/^\s*>\s?/, ""));
				index += 1;
			}
			const quoteHtml = quoteLines
				.map((item) => `<p>${applyInlineFormatting(item)}</p>`)
				.join("");
			htmlParts.push(`<blockquote>${quoteHtml}</blockquote>`);
			continue;
		}

		// Ordered list
		if (/^\s*\d+\.\s+/.test(line)) {
			const content = line.replace(/^\s*\d+\.\s+/, "");
			if (listType !== "ol") {
				flushParagraph();
				flushList();
				listType = "ol";
			}
			listBuffer.push(content);
			index += 1;
			continue;
		}

		// Unordered list
		if (/^\s*[-*+]\s+/.test(line)) {
			const content = line.replace(/^\s*[-*+]\s+/, "");
			if (listType !== "ul") {
				flushParagraph();
				flushList();
				listType = "ul";
			}
			listBuffer.push(content);
			index += 1;
			continue;
		}

		// Table handling (simple)
		if (line.includes("|")) {
			const tableLines: string[] = [];
			while (
				index < lines.length &&
				(lines[index].includes("|") || !lines[index].trim())
			) {
				if (lines[index].trim()) {
					tableLines.push(lines[index]);
				}
				index += 1;
			}

			if (tableLines.length) {
				flushParagraph();
				flushList();
				const [headerRow, separatorRow, ...bodyRows] = tableLines;
				const headers = headerRow
					.split("|")
					.map((cell) => cell.trim())
					.filter(Boolean);
				const separatorValid = separatorRow?.includes("-");
				const rows = separatorValid ? bodyRows : [separatorRow, ...bodyRows];
				const body = rows
					.map((row) => {
						const cells = row
							.split("|")
							.map((cell) => cell.trim())
							.filter(Boolean);
						return `<tr>${cells
							.map((cell) => `<td>${applyInlineFormatting(cell)}</td>`)
							.join("")}</tr>`;
					})
					.join("");
				htmlParts.push(
					`<table><thead><tr>${headers
						.map((cell) => `<th>${applyInlineFormatting(cell)}</th>`)
						.join("")}</tr></thead><tbody>${body}</tbody></table>`,
				);
				continue;
			}
		}

		// Default to paragraph
		paragraphBuffer = paragraphBuffer
			? `${paragraphBuffer} ${line.trim()}`
			: line.trim();
		index += 1;
	}

	// Flush remaining buffers
	if (inCodeBlock) {
		const highlighted = escapeHtml(codeBuffer.join("\n"));
		htmlParts.push(
			`<pre><code class="language-${codeLanguage}">${highlighted}</code></pre>`,
		);
	}
	flushParagraph();
	flushList();

	return htmlParts.join("");
};

const parseFrontmatter = (
	raw: string,
): { data: Frontmatter; content: string } => {
	const trimmed = raw.replace(/^\uFEFF/, ""); // remove BOM
	if (!trimmed.startsWith("---")) {
		throw new Error("Frontmatter must start with ---");
	}

	const lines = trimmed.split("\n");
	const frontmatterLines: string[] = [];
	let index = 1;

	while (index < lines.length && lines[index].trim() !== "---") {
		frontmatterLines.push(lines[index]);
		index += 1;
	}

	if (lines[index]?.trim() !== "---") {
		throw new Error("Frontmatter must end with ---");
	}

	const content = lines.slice(index + 1).join("\n");
	const data: Frontmatter = Object.create(null);

	let currentKey: keyof Frontmatter | null = null;

	const pushValue = (key: keyof Frontmatter, value: string) => {
		const normalized = value.trim().replace(/^["'](.*)["']$/, "$1");
		if (!normalized) return;
		if (key === "tags") {
			data[key] = normalized
				.replace(/^\[|\]$/g, "")
				.split(",")
				.map((tag) => tag.trim())
				.filter(Boolean);
		} else {
			data[key] = normalized;
		}
	};

	frontmatterLines.forEach((line) => {
		const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
		if (keyValueMatch) {
			const key = keyValueMatch[1] as keyof Frontmatter;
			const value = keyValueMatch[2];
			if (value.trim() === "") {
				currentKey = key;
			} else {
				pushValue(key, value);
				currentKey = null;
			}
			return;
		}

		if (currentKey) {
			const existing = data[currentKey];
			const appended = `${existing ?? ""} ${line.trim()}`.trim();
			if (typeof existing === "string" || existing === undefined) {
				data[currentKey] = appended as never;
			}
		}
	});

	return { data, content };
};

const resolveSlug = (frontmatterSlug: string | undefined, filename: string) => {
	if (frontmatterSlug && frontmatterSlug.trim()) return frontmatterSlug.trim();
	return filename.replace(/\.md$/, "");
};

const createExcerpt = (html: string, fallbackLength = 150): string => {
	const $ = load(html);
	const bodyHtml = $("body").length ? ($("body").html() ?? "") : html;
	const text = load(bodyHtml).text().replace(/\s+/g, " ").trim();
	if (text.length <= fallbackLength) return text;
	return `${text.substring(0, fallbackLength)}...`;
};

const highlightCodeBlocks = (html: string): string => {
	const $ = load(html);
	$("pre code").each((_, element) => {
		const node = $(element);
		const className = node.attr("class");
		const language = className?.replace("language-", "") ?? "";
		const code = node.text();

		try {
			const highlighted = language
				? hljs.highlight(code, { language })
				: hljs.highlightAuto(code);
			node.html(highlighted.value);
			node.addClass("hljs");
		} catch (_error) {
			const highlighted = hljs.highlightAuto(code);
			node.html(highlighted.value);
			node.addClass("hljs");
		}
	});
	if ($("body").length) {
		return $("body").html() ?? "";
	}
	return $.root().html() ?? "";
};

const loadMarkdownFiles = async () => {
	const files = await fs.readdir(CONTENT_DIR);
	return files.filter((file) => file.endsWith(".md"));
};

const loadMarkdown = async (filename: string) => {
	const targetPath = path.join(CONTENT_DIR, filename);
	const fileContent = await fs.readFile(targetPath, "utf-8");
	const { data, content } = parseFrontmatter(fileContent);
	const slug = resolveSlug(data.slug, filename);

	if (!data.title || !data.publishedAt) {
		throw new Error(`title and publishedAt are required in ${filename}`);
	}

	const html = markdownToHtml(content);
	const highlightedHtml = highlightCodeBlocks(html);

	return {
		slug,
		title: data.title,
		publishedAt: data.publishedAt,
		summary: data.summary ?? createExcerpt(highlightedHtml),
		contentHtml: highlightedHtml,
	};
};

export const getNewsSummaries = async (): Promise<NewsSummary[]> => {
	const files = await loadMarkdownFiles();
	const entries = await Promise.all(files.map((file) => loadMarkdown(file)));

	return entries
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
		)
		.map<NewsSummary>(({ slug, title, publishedAt, summary }) => ({
			slug,
			title,
			publishedAt,
			summary,
		}));
};

export const getNewsBySlug = async (
	slug: string,
): Promise<NewsDetail | null> => {
	const files = await loadMarkdownFiles();
	for (const file of files) {
		const entry = await loadMarkdown(file);
		if (entry.slug === slug) {
			return entry;
		}
	}
	return null;
};

export const getNewsSlugs = async (): Promise<string[]> => {
	const summaries = await getNewsSummaries();
	return summaries.map((entry) => entry.slug);
};
