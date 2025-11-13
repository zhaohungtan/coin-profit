import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const validationPoints = [
  {
    stat: "$135.8B",
    label: "Market Size by 2030",
    description: "63% CAGR in alternative data market",
  },
  {
    stat: "100x",
    label: "Faster Validation",
    description: "Test datasets systematically vs. manual processes",
  },
  {
    stat: "$18M+",
    label: "Funding Validation",
    description: "Similar platforms like Quanted proving market demand",
  },
];

const advantages = [
  "Explainable ML feature importance for transparency",
  "Automated integration scripts for rapid deployment",
  "Hedge fund-grade statistical rigor and validation",
  "Identify datasets that actually improve model performance",
  "Dramatically reduce wasted resources on low-value data",
  "Production-ready infrastructure built by MFE experts",
];

const Validation = () => {
  return (
    <section id="validation" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5">
                  <span className="text-sm font-medium text-secondary">Alternative Data Infrastructure</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Systematic Dataset <span className="text-gradient-secondary">Validation</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  The critical inefficiency in quantitative finance: hedge funds test only ~100 datasets per year due to labor-intensive manual processes. We solve this.
                </p>
              </div>
              
              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Stats Cards */}
            <div className="space-y-6">
              {validationPoints.map((point, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gradient">{point.stat}</div>
                      <div className="text-lg font-semibold">{point.label}</div>
                      <div className="text-sm text-muted-foreground">{point.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <div className="space-y-2">
                  <div className="font-semibold">Revenue Model</div>
                  <p className="text-sm text-muted-foreground">
                    Charge per dataset tested or via SaaS subscription to hedge funds and institutional quant teams
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;
