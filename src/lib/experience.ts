// Professional career start — the anchor for the "years experience" stat.
// Update this only if the first role's start date changes.
export const CAREER_START = new Date(2024, 0, 1); // Jan 2024, L&T Finance

/** Full years elapsed since CAREER_START, floored (2.9 yrs -> 2). */
export function yearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const monthDelta = now.getMonth() - CAREER_START.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < CAREER_START.getDate())) {
    years--;
  }
  return Math.max(0, years);
}

/** Display form for the stat tiles, e.g. "2+". */
export function yearsOfExperienceLabel(now: Date = new Date()): string {
  return `${yearsOfExperience(now)}+`;
}
