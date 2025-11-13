import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-slide-up">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Alternative Data Market: $18.74B → $135.8B by 2030</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Quantitative Trading
            <br />
            <span className="text-gradient">Powered by AI</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            CoinProfit combines machine learning with real-time data validation to identify optimal entry points across top exchanges. Systematically test alternative datasets before purchase.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="group">
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
              View Platform Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">63%</div>
              <div className="text-sm text-muted-foreground">Annual Growth Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-secondary">100+</div>
              <div className="text-sm text-muted-foreground">Datasets Validated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">$18M+</div>
              <div className="text-sm text-muted-foreground">Market Validation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
