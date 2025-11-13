import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-primary/20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-gradient">Accelerate Alpha</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join institutional quant teams leveraging our platform to systematically validate alternative data and optimize trading strategies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background/50 border-primary/20 focus:border-primary"
              />
              <Button variant="hero" size="lg" className="group">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join our waitlist for exclusive early access to the platform
            </p>
          </div>
        </Card>
        
        <div className="mt-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-muted-foreground">
            <span>🔒 Enterprise-grade security</span>
            <span>⚡ Real-time execution</span>
            <span>📊 Institutional-grade data</span>
            <span>🎯 ML-powered insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
