/**
 * Content Data Contracts & Interfaces
 * Aligned with docs/06_Technical_Architecture.md Section 7
 */

import type { Locale } from "./index";

/**
 * World 02: Capability System Project Model
 */
export interface Project {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  category: 'web-systems' | 'ai-engineering' | 'enterprise-bridge' | 'product-strategy';
  status: 'active' | 'completed' | 'compounding';
  featured: boolean;
  role: string;
  technologies: string[];
  metrics: {
    label: Record<Locale, string>;
    value: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
  architectureDiagram?: string;
  lessonsLearned: Record<Locale, string[]>;
  publishedAt: string;
}

/**
 * World 03: Knowledge System Article Model
 */
export interface Article {
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  tags: string[];
  category: 'system-thinking' | 'engineering' | 'ai-notes' | 'book-vault';
  readingTimeMinutes: number;
  wordCount: number;
  publishedDate: string;
  updatedDate: string;
  canonicalUrl: string;
}

/**
 * World 06: Growth System Milestone & Changelog
 */
export interface GrowthLogEntry {
  version: string;
  period: string; // e.g. "2026 Q3"
  date: string;
  title: Record<Locale, string>;
  category: 'milestone' | 'architecture' | 'reflection' | 'ecosystem';
  summary: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  telemetryImpact?: string;
}

/**
 * World 04: Laboratory Sandbox Experiment
 */
export interface LabExperiment {
  id: string;
  name: string;
  purpose: Record<Locale, string>;
  status: 'prototype' | 'alpha' | 'live' | 'archived';
  category: 'ai-prompt' | 'agent-workflow' | 'mcp-tool' | 'micro-utility';
  demoComponent?: string;
  codeSnippet?: string;
  githubUrl?: string;
}
