import { Link, NavLink } from "react-router-dom"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BarChartComp } from "./ui/bar-chart"
import AuthHeader from "./AuthHeader";
import AreaGraph from "./ui/AreaGraph";

export default function Dashboard() {
  return (
    (<div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card
            x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Carbon Footprint
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231.89 CO2e</div>
              <p className="text-xs text-muted-foreground text-red-700 font-bold">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Most Carbon Emmission Product
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Flights (20,345.63 CO2e)</div>
              <p className="text-xs text-muted-foreground text-green-700 font-bold">
                -180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            x-chunk="A card showing the total sales and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Least Carbon Footprint (Non-Zero)</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold"> Bus Travel (12,234 CO2e)</div>
              <p className="text-xs text-muted-foreground text-red-700 font-bold">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            x-chunk="A card showing the total active users and the percentage difference from last hour.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Carbon Footprint (this month)</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,734 CO2e</div>
              <p className="text-xs text-muted-foreground text-red-700 font-bold">
                +201 since last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2"
            x-chunk="A card showing a table of recent transactions with a link to view all transactions.">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your wallet.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Carbon Footprint</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Flight</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">$12,000</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">24-12-2024</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">250.00 CO2e</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Flight</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">$12,000</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">24-12-2024</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">250.00 CO2e</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">Flight</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">$12,000</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">24-12-2024</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right">350.00 CO2e</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">Flight</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">$12,000</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">24-12-2024</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right">450.00 CO2e</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">Flight</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">$12,000</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">24-12-2024</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right">550.00 CO2e</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
         <AreaGraph />
        </div>
      </main>
    </div>)
  );
}
