import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, CreditCard, PieChart, Wallet } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Quản lý tài chính",
    description: "Theo dõi thu chi một cách dễ dàng và trực quan",
  },
  {
    icon: BarChart3,
    title: "Báo cáo chi tiết",
    description: "Phân tích chi tiêu với biểu đồ và thống kê",
  },
  {
    icon: PieChart,
    title: "Ngân sách thông minh",
    description: "Đặt mục tiêu và theo dõi tiến độ tiết kiệm",
  },
  {
    icon: CreditCard,
    title: "Giao dịch nhanh",
    description: "Ghi nhận giao dịch chỉ trong vài giây",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold">Chi tiêu</span>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button asChild variant="ghost">
                  Đăng nhập
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Đăng ký</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Quản lý chi tiêu
              <span className="text-green-600"> thông minh</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Theo dõi thu chi, lập ngân sách và đạt được mục tiêu tài chính của bạn với ứng dụng quản lý chi tiêu cá
              nhân hiện đại.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Bắt đầu miễn phí
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                Xem demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Sẵn sàng kiểm soát tài chính?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tham gia cùng hàng nghìn người dùng đã cải thiện tình hình tài chính với ứng dụng của chúng tôi.
            </p>
          </div>
          <Link href="/signup">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Đăng ký ngay
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
