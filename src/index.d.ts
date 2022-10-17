// Type definitions for string-pixel-width-ru 1.0

export = getWidth;

declare function getWidth(
    string: string,
    settings?: Settings,
): number;

interface Settings {
    bold?: boolean | undefined;
    font?: "andale mono" | "arial" |"avenir next"| "avenir" | "comic sans ms" | "courier new" | "georgia" | "impact" | "open sans" | "tahoma" | "times new roman" | "trebuchet ms" | "verdana" | "webdings" | "quantify" | "roboto" | undefined;
    italic?: boolean | undefined;
    size?: number | undefined;
}