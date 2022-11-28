import type { ServiceBinding } from './ServiceBinding'

export interface ConstructorArgs {
  request: Request
  serviceBinding: ServiceBinding
}
