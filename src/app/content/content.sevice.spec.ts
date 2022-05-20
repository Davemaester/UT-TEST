import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContentService],
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return word count from a body text', () => {
    let text =
      'To sell delicious and remarkable food and drinks. That the food and drink we sell meets the highest standards of quality, freshness and seasonality and combines both modern-creative and traditional southern styles of cooking. To consistently provide our customers with impeccable service by demonstrating warmth, graciousness, efficiency, knowledge, professionalism and integrity in our work. To have every customer who comes through our doors leave impressed by Maxie’s and excited to come back again. To create and maintain a restaurant that is comprehensive and exceptional in its attention to every detail of operation. To provide all who work with us a friendly, cooperative and rewarding environment which encourages long- term, satisfying, growth employment. To keep our concept fresh, exciting and on the cutting edge of the hospitality and entertainment industry. To be a giving member of the Ithaca community and to use our restaurant to improve the quality of life in the Finger Lakes region.';
    let result = [
      {
        word: 'and',
        count: 14,
      },
      {
        word: 'To',
        count: 7,
      },
      {
        word: 'the',
        count: 7,
      },
      {
        word: 'of',
        count: 6,
      },
      {
        word: 'our',
        count: 5,
      },
      {
        word: 'in',
        count: 3,
      },
      {
        word: 'sell',
        count: 2,
      },
      {
        word: 'food',
        count: 2,
      },
      {
        word: 'provide',
        count: 2,
      },
      {
        word: 'with',
        count: 2,
      },
    ];

    expect(service.wordcount(text)).toEqual(result);
  });
});
