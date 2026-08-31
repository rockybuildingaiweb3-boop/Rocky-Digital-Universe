/**
 * RockyOS Core Data Types & Schemas
 * Aligned with docs/06_Technical_Architecture.md
 */

export type Locale = 'en' | 'zh' | 'de' | 'fr' | 'ja';

export type WorldId = 
  | 'identity'
  | 'capability'
  | 'knowledge'
  | 'laboratory'
  | 'connection'
  | 'growth';

export interface WorldNode {
  id: WorldId;
  order: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  route: string;
  accentColor: string;
  coordinates: { x: number; y: number };
}

export interface TelemetryState {
  status: 'ONLINE' | 'STANDBY' | 'SYNCING';
  uptimeSeconds: number;
  utcTime: string;
  activeLocale: Locale;
}
