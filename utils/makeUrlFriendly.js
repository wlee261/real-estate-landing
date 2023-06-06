export default function makeUrlFriendly(text, toLower = true) {
  return toLower
    ? text
        .toLowerCase()
        .replace(/ /g, `-`)
        .replace(/[^a-zA-Z0-9-]/g, "")
    : text.replace(/ /g, `-`).replace(/[^a-zA-Z0-9-]/g, "");
}
