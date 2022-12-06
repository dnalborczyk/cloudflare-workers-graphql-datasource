import { RemoteGraphQLDataSource } from '@apollo/gateway'
import type { FetcherResponse, FetcherRequestInit } from '@apollo/utils.fetcher'
import type { ConstructorArgs } from './ConstructorArgs.js'
import type { ServiceBinding } from './ServiceBinding.js'

export class CloudflareWorkersGraphQLDataSource extends RemoteGraphQLDataSource {
  readonly #request: Request

  readonly #serviceBinding: ServiceBinding

  constructor(args: ConstructorArgs) {
    super(args)

    const { request, serviceBinding } = args

    this.#request = request
    this.#serviceBinding = serviceBinding
  }

  fetcher = async (
    url: string, // not used
    init?: FetcherRequestInit,
  ): Promise<FetcherResponse> => {
    return this.#serviceBinding.fetch(this.#request, {
      body: init?.body ?? null,
    })
  }
}
