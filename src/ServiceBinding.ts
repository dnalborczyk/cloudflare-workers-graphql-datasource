export interface ServiceBinding {
  fetch(
    request: Request | string,
    requestInitr?: RequestInit | Request,
  ): Promise<Response>
}
