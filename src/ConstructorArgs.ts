import type { ServiceBinding } from './ServiceBinding.js'

export interface ConstructorArgs {
  request: Request
  serviceBinding: ServiceBinding
}
