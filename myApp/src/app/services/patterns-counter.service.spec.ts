import { TestBed } from '@angular/core/testing';
import { PatternsCounterService } from './patterns-counter.service';

describe('PatternsCounterService', () => {
  let service: PatternsCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternsCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct pattern frequencies', () => {
    const text = ['abcabc', 'abca', 'bcabc'];
    const patternLength = 3;

    const result = service.getPatternsFrequency(text, patternLength);

    expect(result.length).toBe(3);
    expect(result[0].pattern).toBe('abc');
    expect(result[0].count).toBe(4);
    expect(result[1].pattern).toBe('bca');
    expect(result[1].count).toBe(3);
    expect(result[2].pattern).toBe('cab');
    expect(result[2].count).toBe(2);
  });

  it('should return an empty array when given an empty array of strings', () => {
    const text: string[] = [];
    const result = service.getPatternsFrequency(text, 3);
    expect(result).toEqual([]);
  });

  it('should handle a case with no repeated patterns', () => {
    const text = ['abc', 'def', 'ghi'];
    const result = service.getPatternsFrequency(text, 3);
    expect(result.length).toBe(3);
    expect(result[0].pattern).toBe('abc');
    expect(result[0].count).toBe(1);
    expect(result[1].pattern).toBe('def');
    expect(result[1].count).toBe(1);
    expect(result[2].pattern).toBe('ghi');
    expect(result[2].count).toBe(1);
  });

  it('should handle varying pattern lengths', () => {
    const text = ['abcabc', 'abca', 'bcabc'];
    const patternLength = 2;
    const result = service.getPatternsFrequency(text, patternLength);

    console.log(result);

    expect(result.length).toBe(3);
    expect(result[0].pattern).toBe('bc');
    expect(result[0].count).toBe(5);
    expect(result[1].pattern).toBe('ab');
    expect(result[1].count).toBe(4);
    expect(result[2].pattern).toBe('ca');
    expect(result[2].count).toBe(3);
  });

  it('should return correct pattern frequencies with default length', () => {
    const text = ['abcabc', 'abca', 'bcabc'];
    const result = service.getPatternsFrequency(text);

    expect(result.length).toBe(3);
    expect(result[0].pattern).toBe('abc');
    expect(result[0].count).toBe(4);
    expect(result[1].pattern).toBe('bca');
    expect(result[1].count).toBe(3);
    expect(result[2].pattern).toBe('cab');
    expect(result[2].count).toBe(2);
  });
});
