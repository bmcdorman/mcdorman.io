namespace Platform {
  export enum Type {
    FrontendWeb = 'frontend-web',
    BackendWeb = 'backend-web',
    Mobile = 'mobile',
    Desktop = 'desktop',
    Embedded = 'embedded',
  }

  export interface FrontendWeb {
    type: Type.FrontendWeb;
  }

  export interface BackendWeb {
    type: Type.BackendWeb;
  }

  export interface Mobile {
    type: Type.Mobile;
  }

  export interface Desktop {
    type: Type.Desktop;
  }

  export interface Embedded {
    type: Type.Embedded;
  }
}

type Platform = (
  Platform.FrontendWeb |
  Platform.BackendWeb |
  Platform.Mobile |
  Platform.Desktop |
  Platform.Embedded
);

export default Platform;