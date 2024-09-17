import { BACKEND_URL } from '@/constant/global';
import useSWR from 'swr'

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

const fetchStudysetByAmount = (amount: number) =>useSWR(BACKEND_URL+"/set/"+amount, fetcher, {
	onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
		console.log()
    // Never retry on 404.
    if (error.status === 404) return
 
    // Never retry for a specific key.
    if (key === '/api/user') return
 
    // Only retry up to 10 times.
    if (retryCount >= 10) return
 
    // Retry after 5 seconds.
    setTimeout(() => revalidate({ retryCount }), 5000)
}})

export { fetchStudysetByAmount };
