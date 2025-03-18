import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionTitle from "@/components/section-title"
import ServiceCard from "@/components/service-card"

export default function Home() {
  // Commercial Services data
  const commercialServices = [
    {
      id: 1,
      title: "Quick Investments",
      amount: "0.000 USDT",
      buttonText: "Trading Account",
      icon: "circle-info",
    },
    {
      id: 2,
      title: "Inter-Exchange arbitration",
      amount: "0.000 USDT",
      buttonText: "Trading Account",
      icon: "circle-info",
    },
    {
      id: 3,
      title: "Cross-Arbitration",
      amount: "0.000 USDT",
      buttonText: "Trading Account",
      icon: "circle-info",
    },
  ]

  // Business Services data
  const businessServices = [
    {
      id: 1,
      title: "Crypto-Bank",
      amount: "0.000 USDT",
      buttonText: "Login",
      icon: "circle-info",
    },
    {
      id: 2,
      title: "Token Hub",
      amount: "0.000 USDT",
      buttonText: "Login",
      icon: "circle-info",
    },
    {
      id: 3,
      title: "Banking Hub",
      amount: "0.000 USDT",
      buttonText: "Acquire Login",
      icon: "circle-info",
    },
  ]

  // Social Services data
  const socialServices = [
    {
      id: 1,
      title: "P2P Service",
      amount: "0.000 USDT",
      buttonText: "Account",
      icon: "circle-info",
    },
    {
      id: 2,
      title: "V-Club",
      amount: "0.000 USDT",
      buttonText: "Account",
      icon: "circle-info",
    },
    {
      id: 3,
      title: "PartNer PRO",
      amount: "0.000 USDT",
      buttonText: "Partner Account",
      icon: "circle-info",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#011327] to-black text-white">
      <Header />

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Commercial Services Section */}
        <section>
          <SectionTitle title="Commerical Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {commercialServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                amount={service.amount}
                buttonText={service.buttonText}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        {/* Business Services Section */}
        <section>
          <SectionTitle title="Business Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {businessServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                amount={service.amount}
                buttonText={service.buttonText}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        {/* Social Services Section */}
        <section>
          <SectionTitle title="Social Service" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                amount={service.amount}
                buttonText={service.buttonText}
                icon={service.icon}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

