import { InjectionToken } from "@angular/core";

export const ASSETS_BASE_PATH: InjectionToken<string> = new InjectionToken<string>('Assets Base path', {
    factory: () => { return "" }
});