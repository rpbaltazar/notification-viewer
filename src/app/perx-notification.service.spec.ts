import { TestBed } from '@angular/core/testing';

import { PerxNotificationService } from './perx-notification.service';

describe('PerxNotificationService', () => {
  let service: PerxNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerxNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
