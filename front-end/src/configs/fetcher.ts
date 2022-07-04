const baseUrl = 'http://127.0.0.1:8080'

interface FetcherDispatchParams {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: HeadersInit
  body?: Object

}

export default class Fetcher {
  static async get(endpoint:string, headers?: HeadersInit) {
    return await this.dispatch({
      method: 'GET',
      endpoint, 
      headers
    })
  }

  static async post(endpoint:string, body?: Object, headers?: HeadersInit) {
    return await this.dispatch({
      method: 'POST',
      endpoint, 
      headers,
      body
    })
  }

  static async put(endpoint:string, body?: Object, headers?: HeadersInit) {
    return await this.dispatch({
      method: 'PUT',
      endpoint, 
      headers,
      body
    })
  }

  static async delete(endpoint:string, headers?: HeadersInit) {
    return await this.dispatch({
      method: 'DELETE',
      endpoint, 
      headers
    })
  }

  private static async dispatch(params: FetcherDispatchParams) {
    const requestInit = {
      method: params.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...params.headers
      },
      body: params.body ? JSON.stringify(params.body) : undefined
    }

    const request = await fetch(baseUrl + params.endpoint, requestInit)

    const requestBody = await request.json()

    return {
      url: request.url,
      status: request.status,
      message: request.statusText,
      data: requestBody
    }
  }
}