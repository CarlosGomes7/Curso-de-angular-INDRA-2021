export interface Producto {
    id: number;
    name: string;
    description: string;
    reference: string;
    status: string;
    inventory?: Inventory;
    tax: Tax[];
    category: Category;
    price: Price[];
}

export interface Warehouse {
    id: string;
    name: string;
    observations?: string;
    isDefault: boolean;
    address?: string;
    status: string;
    initialQuantity: string;
    availableQuantity: string;
    minQuantity: string;
    maxQuantity?: string;
}

export interface Inventory {
    unit: string;
    availableQuantity: number;
    unitCost: number;
    initialQuantity: number;
    warehouses?: Warehouse[];
}

export interface Tax {
    id: number;
    name: string;
    percentage: number;
    description: string;
    status: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Price {
    idPriceList: number;
    name: string;
    price: number;
}

