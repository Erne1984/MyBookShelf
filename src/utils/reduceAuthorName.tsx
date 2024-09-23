export default function reduceAuthorName(name: string | undefined) {

    if (!name) return "";

    const splicedName = name.split(" ");

    if (splicedName.length < 3) return name

    splicedName.splice(1, 1);

    return splicedName.join(" ").toString()
}