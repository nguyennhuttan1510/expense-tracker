"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowDownIcon, ArrowUpIcon, CreditCard, DollarSign, PlusCircle, TrendingDown, TrendingUp } from "lucide-react"

const recentTransactions = [
  { id: 1, description: "Mua sắm tại Vinmart", amount: -250000, category: "Mua sắm", date: "2024-01-15" },
  { id: 2, description: "Lương tháng 1", amount: 15000000, category: "Thu nhập", date: "2024-01-01" },
  { id: 3, description: "Tiền điện", amount: -450000, category: "Hóa đơn", date: "2024-01-10" },
  { id: 4, description: "Ăn uống", amount: -180000, category: "Ăn uống", date: "2024-01-14" },
]

const budgetCategories = [
  { name: "Ăn uống", spent: 1200000, budget: 2000000, color: "bg-red-500" },
  { name: "Mua sắm", spent: 800000, budget: 1500000, color: "bg-yellow-500" },
  { name: "Giải trí", spent: 300000, budget: 800000, color: "bg-green-500" },
  { name: "Hóa đơn", spent: 1800000, budget: 2000000, color: "bg-orange-500" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tổng quan</h1>
          <p className="text-muted-foreground">Xem tổng quan tài chính của bạn trong tháng này</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="mr-2 h-4 w-4" />
          Thêm giao dịch
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng số dư</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.450.000₫</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.5%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thu nhập tháng này</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.000.000₫</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5.2%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chi tiêu tháng này</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.280.000₫</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+12.1%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiết kiệm</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10.720.000₫</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.3%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Transactions */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Giao dịch gần đây</CardTitle>
            <CardDescription>Các giao dịch mới nhất trong tuần này</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                    {transaction.amount > 0 ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                      {transaction.amount > 0 ? "+" : ""}
                      {transaction.amount.toLocaleString()}₫
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Budget Overview */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ngân sách tháng này</CardTitle>
            <CardDescription>Theo dõi chi tiêu theo từng danh mục</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetCategories.map((category) => {
                const percentage = (category.spent / category.budget) * 100
                return (
                  <div key={category.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`h-3 w-3 rounded-full ${category.color}`} />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant={percentage > 90 ? "destructive" : percentage > 70 ? "secondary" : "default"}>
                        {percentage.toFixed(0)}%
                      </Badge>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{category.spent.toLocaleString()}₫</span>
                      <span>{category.budget.toLocaleString()}₫</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
