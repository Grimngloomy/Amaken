
import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from "react-router-dom";
import { LogIn, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-full"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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

      <div className="grid gap-6">
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
              <LineChart data={data}>
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
      </div>
    </MainLayout>
  );
};

export default Index;
