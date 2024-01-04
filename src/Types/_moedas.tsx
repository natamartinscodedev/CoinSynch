export interface TypeMoedas {
    moedas: {
        id: string,
        name: string,
        symbol: string,
        image: string,
        price_change_24h: number,
        price_change_percentage_24h: number,
        current_price: number,
    }
}