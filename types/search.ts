/**
 * Search and Command Palette Types
 */

export interface SearchItem {
  id: string;
  title: string;
  category: 'World' | 'Project' | 'Article' | 'Experiment' | 'Action';
  keywords: string[];
  url?: string;
  actionId?: string;
}
