export function getEnvNumber(
  envVar: string | undefined,
  defaultValue: number,
): number {
  const num = Number(envVar);

  return isNaN(num) ? defaultValue : num;
}
