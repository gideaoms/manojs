export function or(...values: unknown[]) {
  return values.some(Boolean);
}
