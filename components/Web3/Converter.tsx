"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Crypto {
  id: string;
  name: string;
  image: string;
}

const Converter = () => {
  const [cryptoList, setCryptoList] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cryptoA, setCryptoA] = useState<string>('ethereum'); // Set default value to Ethereum
  const [cryptoB, setCryptoB] = useState<string>('bitcoin'); // Set default value to Bitcoin
  const [amountA, setAmountA] = useState<string>(''); // Set initial state to an empty string
  const [amountB, setAmountB] = useState<string>(''); // Set initial state to an empty string
  const [exchangeRate, setExchangeRate] = useState<number>(0); // Set initial exchange rate to 0
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTopCrypto = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Crypto[]>('https://api.coingecko.com/api/v3/coins/markets', {
          params: { vs_currency: 'usd', per_page: 10, page: 1, order: 'market_cap_desc' }
        });
        setCryptoList(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch top cryptocurrencies.');
      }
    };

    fetchTopCrypto();
  }, []);

  const handleConvert = async () => {
    try {
      const response = await axios.get<{[key: string]: {[key: string]: number}}>('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: cryptoA,
          vs_currencies: cryptoB
        }
      });

      const newExchangeRate = response.data[cryptoA][cryptoB];
      setExchangeRate(newExchangeRate);

      // Convert amountA to number and calculate amountB
      const parsedAmountA = parseFloat(amountA);
      if (!isNaN(parsedAmountA)) {
        setAmountB((parsedAmountA * newExchangeRate).toString());
      } else {
        setAmountB('');
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setError('Failed to fetch exchange rate.');
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md text-center md:w-[50%]">
      <h2 className="text-2xl font-bold mb-4">Crypto Converter</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <select
              value={cryptoA}
              onChange={(e) => setCryptoA(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              {cryptoList.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </option>
              ))}
            </select>
            <img src={cryptoList.find(crypto => crypto.id === cryptoA)?.image} alt={cryptoA} className="w-6 h-6 ml-2" />
          </div>
          <input
            type="number"
            placeholder="Amount"
            value={amountA}
            onChange={(e) => setAmountA(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleConvert}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Convert
        </button>
        <div className="space-y-2">
          <div className="flex items-center">
            <select
              value={cryptoB}
              onChange={(e) => setCryptoB(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              {cryptoList.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </option>
              ))}
            </select>
            <img src={cryptoList.find(crypto => crypto.id === cryptoB)?.image} alt={cryptoB} className="w-6 h-6 ml-2" />
          </div>
          <input
            type="text" // Use text type to display calculated amount
            placeholder="Converted Amount"
            value={amountB}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Converter;
