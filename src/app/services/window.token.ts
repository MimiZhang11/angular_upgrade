import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NgModel } from '@angular/forms';

export const WINDOW = new InjectionToken<Window | {} | null>('window service', {
  providedIn: 'root',
  factory() {
    const platformId = inject(PLATFORM_ID);
    const doc = inject(DOCUMENT); //angular 中注入的document
    return isPlatformBrowser(platformId) ? doc.defaultView : {};
  },
});
