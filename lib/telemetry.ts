/**
 * System telemetry helper: uptime and formatted UTC time
 * Aligned with docs/06_Technical_Architecture.md Section 4.8
 */

export function getSystemUptime(genesisDate: string = "2024-01-01T00:00:00Z"): number {
  const genesis = new Date(genesisDate).getTime();
  const now = Date.now();
  return Math.floor((now - genesis) / 1000);
}

export function formatUtcTime(date: Date = new Date()): string {
  return date.toTimeString().split(" ")[0] + " UTC";
}
