"use client";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

interface Crypto {
  id: string;
  name: string;
  current_price: number;
  total_volume: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
}

const CryptoComponent: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string>("bitcoin");
  const [chartInstance, setChartInstance] = useState<any>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
        );
        const data = await response.json();
        setCryptoData(data);
        renderGraph(data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();
  }, []);
  const renderGraph = (data: Crypto[]) => {
    const selectedCryptoData = data.find(
      (crypto) => crypto.id === selectedCrypto,
    );
    if (!selectedCryptoData) return;

    const ctx = document.getElementById("crypto-graph") as HTMLCanvasElement;

    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1h", "24h"],
        datasets: [
          {
            label: `${selectedCryptoData.name} Price (USD)`,
            data: [
              selectedCryptoData.current_price,
              selectedCryptoData.current_price +
                selectedCryptoData.price_change_percentage_24h_in_currency,
            ],
            fill: false, // Ensure no fill color
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value: any, index: any, values: any) {
                return "$" + value.toLocaleString();
              },
            },
          },
        },
      },
    });

    setChartInstance(newChartInstance);
  };
  const handleCryptoClick = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
    if (chartInstance) {
      renderGraph(cryptoData);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center mb-8">
        <canvas id="crypto-graph" className="w-3/4 h-auto"></canvas>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="p-2 text-left bg-gray-100 border border-gray-200">
                Crypto Name
              </th>
              <th className="p-2 text-left bg-gray-100 border border-gray-200">
                Price (USD)
              </th>
              <th className="p-2 text-left bg-gray-100 border border-gray-200">
                Volume
              </th>
              <th className="p-2 text-left bg-gray-100 border border-gray-200">
                Hour Change
              </th>
              <th className="p-2 text-left bg-gray-100 border border-gray-200">
                Day Change
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr
                key={crypto.id}
                className="border border-gray-200"
                onClick={() => handleCryptoClick(crypto.id)}
              >
                <td className="p-2 border border-gray-200 cursor-pointer hover:bg-gray-200">{crypto.name}</td>
                <td className="p-2 border border-gray-200">
                  ${crypto.current_price.toLocaleString()}
                </td>
                <td className="p-2 border border-gray-200">
                  {crypto.total_volume}
                </td>
                <td
                  className={`p-2 border border-gray-200 ${crypto.price_change_percentage_1h_in_currency > 0 ? "text-green-600" : "text-red-600"}`}
                >
                  <span className="relative inline-block">
                    {crypto.price_change_percentage_1h_in_currency}%
                    <span
                      className={`absolute top-0 right-0 ${crypto.price_change_percentage_1h_in_currency > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {crypto.price_change_percentage_1h_in_currency > 0
                        ? "▲"
                        : "▼"}
                    </span>
                  </span>
                </td>
                <td
                  className={`p-2 border border-gray-200 ${crypto.price_change_percentage_24h_in_currency > 0 ? "text-green-600" : "text-red-600"}`}
                >
                  <span className="relative inline-block">
                    {crypto.price_change_percentage_24h_in_currency}%
                    <span
                      className={`absolute top-0 right-0 ${crypto.price_change_percentage_24h_in_currency > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {crypto.price_change_percentage_24h_in_currency > 0
                        ? "▲"
                        : "▼"}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoComponent;
