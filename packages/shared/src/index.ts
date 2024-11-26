export class WrappedError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export enum VcsProvider {
  GitHub = 'GitHub',
  GitLab = 'GitLab',
}