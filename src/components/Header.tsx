"use client";

import Link from "next/link";
import { css } from "../../styled-system/css";
import { useState } from "react";

// consts
import { Montserrat400 } from "@/const/font";

const fixed = css({
	position: "fixed",
});

const headerStyle = css({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "20px",
	borderBottom: "3px solid #CACACA",
	width: "100dvw",
	height: "70px",
});

const burgerMenuStyle = css({
	position: "relative",
	width: "37px",
	height: "26px",
	cursor: "pointer",
	display: "inline-block",
	transition: "all .5s",
	boxSizing: "border-box",
	"& span": {
		position: "absolute",
		left: "0",
		width: "100%",
		height: "4px",
		backgroundColor: "#4C4C4C",
		borderRadius: "4px",
		display: "inline-block",
		transition: "all .5s",
		boxSizing: "border-box",
	},
	"& span:nth-of-type(1)": {
		top: "0",
	},
	"& span:nth-of-type(2)": {
		top: "13px",
	},
	"& span:nth-of-type(3)": {
		top: "26px",
	},
	"&.active span:nth-of-type(1)": {
		transform: "translateY(13px) rotate(-45deg)",
	},
	"&.active span:nth-of-type(2)": {
		opacity: 0,
	},
	"&.active span:nth-of-type(3)": {
		transform: "translateY(-13px) rotate(45deg)",
	},
});

const headerTextStyle = css({
	fontSize: "clamp(14px, 7dvw, 24px)",
	color: "#4C4C4C",
});

const menuStyle = css({
	display: "flex",
	flexDirection: "column",
	position: "relative",
	top: "0", // ヘッダーの直下に配置
	right: "0",
	width: {
		base: "300px",
		smToMd: "100dvw",
	},
	height: "100dvh",
	backgroundColor: "#fff",
	boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
	zIndex: "1000",
	transform: "translateX(100dvw)", // 初期状態で右側へ完全に隠れるように設定
	transition: "transform 0.3s ease",
	"&.active": {
		transform: {
			base: "translateX(calc(100dvw - 100%))",
			smToMd: "translateX(0)",
		},
	},
});

const menuItemStyle = css({
	padding: "10px 20px",
	borderBottom: "1px solid #CACACA",
	"&:last-child": {
		borderBottom: "none",
	},
	"& a": {
		textDecoration: "none",
		color: "#4C4C4C",
	},
});

interface MenuItem {
	label: string;
	href: string;
}

interface HeaderProps {
	menuItems: MenuItem[];
}

export const Header = ({ menuItems }: HeaderProps): JSX.Element => {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className={fixed}>
			<div className={headerStyle}>
				<div>
					<Link
						className={`${Montserrat400.className} ${headerTextStyle} `}
						href="/"
					>
						Yumilc's Portfolio
					</Link>
				</div>
				<div
					className={`${burgerMenuStyle} ${isActive ? "active" : ""}`}
					onClick={() => {
						setIsActive(!isActive);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={`${menuStyle} ${isActive ? "active" : ""}`}>
				{menuItems.map((item) => (
					<div
						className={`${menuItemStyle} ${Montserrat400.className}`}
						key={item.href}
					>
						<Link href={item.href}>{item.label}</Link>
					</div>
				))}
			</div>
		</header>
	);
};
