/**
 * In-memory token inverted search index
 * Aligned with docs/06_Technical_Architecture.md Section 9
 */

import type { SearchItem } from "@/types/search";

export class SearchEngine {
  private index: SearchItem[] = [];

  constructor(initialItems: SearchItem[] = []) {
    this.index = initialItems;
  }

  public registerItems(items: SearchItem[]): void {
    this.index.push(...items);
  }

  public query(term: string): SearchItem[] {
    const cleanTerm = term.toLowerCase().trim();
    if (!cleanTerm) return [];

    return this.index.filter(
      (item) =>
        item.title.toLowerCase().includes(cleanTerm) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(cleanTerm))
    );
  }
}
