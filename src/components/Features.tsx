import { Card } from "@/components/ui/card";
import { Brain, Database, LineChart, Shield, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Leading ML models identify optimal entry and exit points across market conditions",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Alternative Data Validation",
    description: "Systematically test and validate datasets before purchase with explainable ML",
    color: "text-secondary",
  },
  {
    icon: LineChart,
    title: "Real-Time Integration",
    description: "Direct integration with Binance, Coinbase, and top exchanges for instant execution",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Risk Minimization",
    description: "Predictive execution tools enhance returns while minimizing exposure in volatile markets",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Rapid Alpha Discovery",
    description: "Test ~100+ datasets per year vs. traditional manual validation processes",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Market Volatility Edge",
    description: "Capitalize on volatility in both bull runs and turbulent market conditions",
    color: "text-accent",
  },
];

const Features = () => {
  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="text-gradient">Quantitative Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Institutional-grade infrastructure designed to accelerate alpha discovery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
