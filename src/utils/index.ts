export function sliceTextForPhoneNumber(text: string) {
  const result = text.slice(0, -5);
  return result;
}
