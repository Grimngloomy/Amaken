
import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const data = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 13200 },
  { name: 'Mar', value: 11800 },
  { name: 'Apr', value: 12400 },
  { name: 'May', value: 14500 },
  { name: 'Jun', value: 15231.89 },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex justify-end mb-6">
        <Button 
          onClick={() => navigate('/auth')}
          variant="outline"
          className="text-white border-white/10 hover:bg-white/5"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login / Sign up
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Revenue Card */}
        <Card className="p-6 bg-[#111] border-white/10">
          <div className="space-y-2">
            <h3 className="text-sm text-gray-400">Total Revenue</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold">$15,231.89</span>
              <span className="text-sm text-green-500">+20.1% from last month</span>
            </div>
          </div>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#9b87f5" 
                  strokeWidth={2}
                  dot={{ fill: '#9b87f5' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Index;
