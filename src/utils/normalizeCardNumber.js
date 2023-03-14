export const normalizeCardNumber = (value) => {
  return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substring(0, 19) || ""
}