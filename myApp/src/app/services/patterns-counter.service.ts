import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatternsCounterService {
  getPatternsFrequency(text: string[], patternLength: number = 3) {
    const patternCounts: Record<string, number> = {};

    for (const str of text) {
      for (let i = 0; i <= str.length - patternLength; i++) {
        const pattern = str.substring(i, i + patternLength);
        patternCounts[pattern] = (patternCounts[pattern] || 0) + 1;
      }
    }

    const sortedPatterns = Object.entries(patternCounts)
      .map(([pattern, count]) => ({ pattern, count }))
      .sort((a, b) => b.count - a.count);

    return sortedPatterns;
  }

  constructor() {}
}
