import { RemoteGraphQLDataSource } from '@apollo/gateway'
import type { FetcherResponse, FetcherRequestInit } from '@apollo/utils.fetcher'
import type { ConstructorArgs } from './ConstructorArgs.js'
import type { ServiceBinding } from './ServiceBinding.js'

export class CloudflareWorkersGraphQLDataSource extends RemoteGraphQLDataSource {
  readonly #request: Request

  readonly #serviceBinding: ServiceBinding

  static readonly #url = 'https://example.com'

  constructor(args: ConstructorArgs) {
    super({
      // dummy url to satisfy Request construction in RemoteGraphQLDataSource,
      // which would otherwise fail: new Request(undefined)
      url: CloudflareWorkersGraphQLDataSource.#url,
      ...args,
    })

    const { request, serviceBinding } = args

    this.#request = request
    this.#serviceBinding = serviceBinding
  }

  fetcher = async (
    url: string, // unused (not needed)
    init?: FetcherRequestInit,
  ): Promise<FetcherResponse> => {
    return this.#serviceBinding.fetch(this.#request, {
      body: init?.body ?? null,
    })
  }
}
