'use client'
import { REACT_URL } from '@/api'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = () => {
    const [moedas, setMoedas]: any = useState('')

    const fetch = async () => {
        try {
            const { data } = await axios.get(`${REACT_URL}`)
            setMoedas(data)
        } catch (err) {
            console.log("Ops! deu ruim ==>", err)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return { moedas }
}

export default useFetch