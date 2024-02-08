export function and(...values: unknown[]) {
  return values.every(Boolean);
}
