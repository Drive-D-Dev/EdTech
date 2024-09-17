import { BACKEND_URL } from '@/constant/global';
import useSWR from 'swr'

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

const fetchStudysetByAmount = (amount: number) =>useSWR(BACKEND_URL+"/set/"+amount, fetcher)

const fetchAllStudyset = (amount: number) =>useSWR(BACKEND_URL+"/set/" , fetcher)

export { fetchStudysetByAmount };
