
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(supabase.auth.getSession());
  const { toast } = useToast();

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>, mode: 'login' | 'signup') => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = mode === 'signup' ? formData.get('fullName') as string : null;

    try {
      const { error } = mode === 'signup'
        ? await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                full_name: fullName,
              },
            },
          })
        : await supabase.auth.signInWithPassword({
            email,
            password,
          });

      if (error) throw error;

      toast({
        title: mode === 'signup' ? "Account created!" : "Welcome back!",
        description: mode === 'signup' 
          ? "Please check your email for verification." 
          : "You've successfully logged in.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Amaken</CardTitle>
          <CardDescription>Sign in or create an account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={(e) => handleAuth(e, 'login')}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={(e) => handleAuth(e, 'signup')}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="signup-fullName">Full Name</Label>
                    <Input id="signup-fullName" name="fullName" required />
                  </div>
                  <div>
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" name="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Loading..." : "Sign Up"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
