
import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from "react-router-dom";
import { LogIn, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const revenueData = [
  { name: 'Jan', value: 12000, occupancy: 92, maintenance: 800 },
  { name: 'Feb', value: 13200, occupancy: 95, maintenance: 600 },
  { name: 'Mar', value: 11800, occupancy: 88, maintenance: 1200 },
  { name: 'Apr', value: 12400, occupancy: 90, maintenance: 750 },
  { name: 'May', value: 14500, occupancy: 96, maintenance: 500 },
  { name: 'Jun', value: 15231.89, occupancy: 98, maintenance: 450 },
];

const profitData = revenueData.map(month => ({
  name: month.name,
  profit: month.value - month.maintenance,
  occupancyRevenue: (month.value * month.occupancy) / 100
}));

const Index = () => {
  const navigate = useNavigate();
  const { setTheme, theme, systemTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full border-primary/10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button 
          onClick={() => navigate('/auth')}
          variant="outline"
          className="border-primary/10 hover:bg-primary/5"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login / Sign up
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 bg-card border-primary/10">
          <div className="space-y-2">
            <h3 className="text-sm text-muted-foreground">Total Revenue</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground">$15,231.89</span>
              <span className="text-sm text-green-500">+20.1% from last month</span>
            </div>
          </div>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-10" />
                <XAxis dataKey="name" stroke="currentColor" className="opacity-50" />
                <YAxis stroke="currentColor" className="opacity-50" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-card border-primary/10">
          <div className="space-y-2">
            <h3 className="text-sm text-muted-foreground">Net Profit</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground">$14,781.89</span>
              <span className="text-sm text-green-500">+15.3% from last month</span>
            </div>
          </div>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-10" />
                <XAxis dataKey="name" stroke="currentColor" className="opacity-50" />
                <YAxis stroke="currentColor" className="opacity-50" />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)'
                  }}
                />
                <Bar dataKey="profit" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-card border-primary/10">
          <div className="space-y-2">
            <h3 className="text-sm text-muted-foreground">Occupancy Revenue</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground">95%</span>
              <span className="text-sm text-green-500">+3% from last month</span>
            </div>
          </div>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-10" />
                <XAxis dataKey="name" stroke="currentColor" className="opacity-50" />
                <YAxis stroke="currentColor" className="opacity-50" />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="occupancy" 
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
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
