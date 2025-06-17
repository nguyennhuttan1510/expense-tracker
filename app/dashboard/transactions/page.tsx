"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownIcon, ArrowUpIcon, Filter, PlusCircle, Search } from "lucide-react"

const transactions = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Mua sắm tại Vinmart",
    category: "Mua sắm",
    amount: -250000,
    type: "expense",
  },
  { id: 2, date: "2024-01-14", description: "Ăn trưa", category: "Ăn uống", amount: -85000, type: "expense" },
  { id: 3, date: "2024-01-13", description: "Xăng xe", category: "Giao thông", amount: -120000, type: "expense" },
  { id: 4, date: "2024-01-12", description: "Tiền thưởng", category: "Thu nhập", amount: 2000000, type: "income" },
  { id: 5, date: "2024-01-11", description: "Tiền điện", category: "Hóa đơn", amount: -450000, type: "expense" },
  { id: 6, date: "2024-01-10", description: "Mua sách", category: "Giáo dục", amount: -180000, type: "expense" },
  { id: 7, date: "2024-01-09", description: "Bán đồ cũ", category: "Thu nhập", amount: 500000, type: "income" },
  { id: 8, date: "2024-01-08", description: "Cà phê", category: "Ăn uống", amount: -45000, type: "expense" },
  { id: 9, date: "2024-01-07", description: "Tiền nhà", category: "Hóa đơn", amount: -3000000, type: "expense" },
  { id: 10, date: "2024-01-01", description: "Lương tháng 1", category: "Thu nhập", amount: 15000000, type: "income" },
]

const categories = ["Tất cả", "Ăn uống", "Mua sắm", "Giao thông", "Hóa đơn", "Thu nhập", "Giáo dục"]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [selectedType, setSelectedType] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tất cả" || transaction.category === selectedCategory
    const matchesType = selectedType === "all" || transaction.type === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lịch sử giao dịch</h1>
          <p className="text-muted-foreground">Quản lý và theo dõi tất cả giao dịch của bạn</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="mr-2 h-4 w-4" />
          Thêm giao dịch
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Bộ lọc
          </CardTitle>
          <CardDescription>Lọc giao dịch theo tiêu chí</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="search">Tìm kiếm</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Tìm kiếm giao dịch..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Danh mục</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Loại giao dịch</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="income">Thu nhập</SelectItem>
                  <SelectItem value="expense">Chi tiêu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                Đặt lại bộ lọc
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách giao dịch</CardTitle>
          <CardDescription>Hiển thị {filteredTransactions.length} giao dịch</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ngày</TableHead>
                <TableHead>Mô tả</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead className="text-right">Số tiền</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {new Date(transaction.date).toLocaleDateString("vi-VN")}
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {transaction.type === "income" ? (
                        <ArrowUpIcon className="mr-2 h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownIcon className="mr-2 h-4 w-4 text-red-600" />
                      )}
                      <span className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
                        {transaction.type === "income" ? "Thu nhập" : "Chi tiêu"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={transaction.amount > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}
                    >
                      {transaction.amount > 0 ? "+" : ""}
                      {transaction.amount.toLocaleString()}₫
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
