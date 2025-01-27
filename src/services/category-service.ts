import { AxiosRequestConfig } from "axios"
import { requestBackend } from "../utils/requests"
import { BASE_URL } from "../utils/system"

export function findAllRequest() {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/categories"
    }

    return requestBackend(config)
}