import { LucideProps } from "lucide-react"

export interface MenuItem {
    id: number,
    name: string
}

export interface MenuItemWithIcon extends MenuItem {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}