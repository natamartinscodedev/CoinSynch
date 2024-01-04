"use client"
import React, { useState } from 'react'
import useFect from '@/Hook/useFetch'
import Image from 'next/image'

const Index = () => {
    const { moedas }: any = useFect()
    const [showAll, setShowAll] = useState(false)
    const visibleItems = showAll ? moedas : moedas.slice(0, 5)

    const handleShowMore = () => {
        setShowAll(true)
    }
    const handleLessMore = () => {
        setShowAll(!true)
    }

    return (
        <div className='container card_moedas'>
            {
                visibleItems && visibleItems.map((coin: any) => (
                    <div className='card_moedas-table-box'>
                        <div className='tr_one'>
                            <Image
                                src={coin.image}
                                alt={coin.name}
                                width={30}
                                height={30}
                            />
                            <div>
                                <h3>{coin.symbol.toUpperCase()}</h3>
                                <p>{coin.name}</p>
                            </div>
                        </div>
                        <div className='tr_two'>
                            <p>${coin.current_price}</p>
                        </div>
                        <div className='tr_three'>
                            <p
                                className={`${coin.price_change_percentage_24h < 0 ? 'red' : 'green'
                                    }`}
                            >
                                {coin.price_change_percentage_24h > 0
                                    ? `${'+' + coin.price_change_percentage_24h}`
                                    : coin.price_change_percentage_24h}
                            </p>
                        </div>
                    </div>
                ))
            }
            {!showAll && moedas.length > 5 ? (
                <button onClick={handleShowMore}>View more +</button>
            ) : (
                <button onClick={handleLessMore}>View less -</button>
            )}
        </div>
    )
}

export default Index