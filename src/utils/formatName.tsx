import { transliterate } from "transliteration";

export default function formatName(authorNamer: string) {
    const formatedText = authorNamer.split(" ");
    if (formatedText && formatedText.length > 2) {
        formatedText.splice(1, 1);
    }
    return transliterate(formatedText?.toString().replace(",", " ") || "");
}