// useMediaQueries.js
import { useMediaQuery } from "react-responsive";

export const useLgQuery = (): boolean => useMediaQuery({ minWidth: 1024 });

export const LgQuery = (): boolean =>
	useMediaQuery({ minWidth: 768, maxWidth: 1023 });

export const useMdQuery = (): boolean =>
	useMediaQuery({ minWidth: 640, maxWidth: 767 });

export const useSmQuery = (): boolean => useMediaQuery({ maxWidth: 639 });

export const useSmToMdQuery = (): boolean => useMediaQuery({ maxWidth: 767 });
