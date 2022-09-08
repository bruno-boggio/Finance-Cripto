import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CriptoCoin from './CriptoCoin'

const CriptoApi = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value);
      };

      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
    
    useEffect(() => {
        axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=45&page=1&sparkline=false&price_change_percentage=24h'
          )
          .then(res => {
            setCoins(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
    
  return (
    <div className='coin-app'>
    <div className='coin-search'>
      <h1 className='coin-text'>Pesquise uma cripto</h1>
      <form>
        <input
          className='coin-input'
          type='text'
          onChange={handleChange}
          placeholder='Digite a moeda'
        />
      </form>
    </div>
    {filteredCoins.map(coin => {
      return (
        <CriptoCoin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      );
    })}
  </div>
  )
}

export default CriptoApi