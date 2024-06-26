import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { css } from "../../styled-system/css";

// components
import { Header } from "@/components/Header";

// consts
import { menuItems } from "@/const/headerMenuItem";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Yumilc's Portfolio";
const description = "Yumilc's portfolio";
const url = "https://yumilc.info";

export const metadata: Metadata = {
	title: "Yumilc",
	description: "Yumilc's portfolio",
	openGraph: {
		title: "Yumilc",
		description,
		url,
		siteName,
		type: "website",
		locale: "ja_JP",
		images: "/yumilc_illust.jpg",
	},
	twitter: {
		card: "summary_large_image",
		title: siteName,
		description,
		site: "@yumILC_",
		creator: "@iorin__io",
	},
};

const paperTextureStyle = css({
	backgroundImage: `
	  repeating-linear-gradient(to bottom,
		transparent 25px,
		rgba(0, 0, 0, 0.04) 26px,  rgba(0, 0, 0, 0.04) 26px,
		transparent 27px,  transparent 51px,
		rgba(0, 0, 0, 0.04) 52px,  rgba(0, 0, 0, 0.04) 52px,
		transparent 53px,  transparent 77px,
		rgba(0, 0, 0, 0.04) 78px,  rgba(0, 0, 0, 0.04) 78px,
		transparent 79px,  transparent 103px,
		rgba(0, 0, 0, 0.04) 104px,  rgba(0, 0, 0, 0.04) 104px,
		transparent 105px,  transparent 129px,
		rgba(0, 0, 0, 0.04) 130px,  rgba(0, 0, 0, 0.04) 130px),

	  repeating-linear-gradient(to right,
		transparent 25px,
		rgba(0, 0, 0, 0.04) 26px,  rgba(0, 0, 0, 0.04) 26px,
		transparent 27px,  transparent 51px,
		rgba(0, 0, 0, 0.04) 52px,  rgba(0, 0, 0, 0.04) 52px,
		transparent 53px,  transparent 77px,
		rgba(0, 0, 0, 0.04) 78px,  rgba(0, 0, 0, 0.04) 78px,
		transparent 79px,  transparent 103px,
		rgba(0, 0, 0, 0.04) 104px,  rgba(0, 0, 0, 0.04) 104px,
		transparent 105px,  transparent 129px,
		rgba(0, 0, 0, 0.04) 130px,  rgba(0, 0, 0, 0.04) 130px)
	`,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div
					className={paperTextureStyle}
					style={{ minHeight: "100vh", position: "relative", zIndex: 0 }}
				>
					<Header menuItems={menuItems} />
					{children}
				</div>
			</body>
		</html>
	);
}
