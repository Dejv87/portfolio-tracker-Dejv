
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { ticker: "SOFI.US", invested: 114.4, profitLoss: -6.16 },
  { ticker: "SOFI.US", invested: 11.61, profitLoss: -1.88 },
  { ticker: "SOFI.US", invested: 9.78, profitLoss: -0.58 },
  { ticker: "SOFI.US", invested: 193.68, profitLoss: -31.32 },
  { ticker: "SOFI.US", invested: 195.65, profitLoss: -19.76 },
];

export default function Home() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Souhrn otevřených pozic</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Ticker</th>
                <th className="text-right">Investováno ($)</th>
                <th className="text-right">Zisk/Ztráta ($)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.ticker}</td>
                  <td className="text-right">{item.invested.toFixed(2)}</td>
                  <td className="text-right">{item.profitLoss.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Graf zisku/ztráty</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="ticker" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="profitLoss" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
