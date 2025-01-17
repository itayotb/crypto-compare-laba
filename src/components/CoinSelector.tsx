import { useState } from "react";
import { Coin } from "@/services/api";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CoinSelectorProps {
  coins: Coin[];
  selectedCoin: Coin | null;
  onSelect: (coin: Coin) => void;
  label: string;
}

export const CoinSelector = ({
  coins,
  selectedCoin,
  onSelect,
  label,
}: CoinSelectorProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium mb-2 text-gray-200">
        {label}
      </label>
      <div
        className="glass-card p-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCoin ? (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={selectedCoin.imageUrl} alt={selectedCoin.name} />
              <AvatarFallback>
                {selectedCoin.symbol.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{selectedCoin.symbol}</span>
              <span className="text-sm text-gray-400">{selectedCoin.name}</span>
            </div>
          </div>
        ) : (
          <span className="text-gray-400">Select a coin</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute w-full mt-2 glass-card p-4 z-50 animate-fade-in">
          <div className="flex items-center gap-2 p-2 glass-card mb-4">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search coins..."
              className="bg-transparent border-none outline-none w-full text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {filteredCoins.map((coin) => (
                <div
                  key={coin.id}
                  className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
                  onClick={() => {
                    onSelect(coin);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={coin.imageUrl} alt={coin.name} />
                      <AvatarFallback>
                        {coin.symbol.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">{coin.symbol}</span>
                      <span className="text-xs text-gray-400">{coin.name}</span>
                    </div>
                  </div>
                  <span
                    className={`text-sm ${
                      parseFloat(coin.changePercent24Hr) >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {parseFloat(coin.changePercent24Hr).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};