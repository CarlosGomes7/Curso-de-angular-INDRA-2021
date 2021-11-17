import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Interfaces/producto';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  product: Producto[] = [
    {
      id: 1,
      name: 'Billetera',
      description: 'Billetera de cuero negro',
      reference: 'REF-005',
      status: 'inactive',
      inventory: {
        unit: 'piece',
        availableQuantity: 150,
        unitCost: 560,
        initialQuantity: 320,
        warehouses: [
          {
            id: '1',
            name: 'Bodega Norte',
            observations: '',
            isDefault: true,
            address: 'Dirección de la bodega Norte',
            status: 'active',
            initialQuantity: '320.0',
            availableQuantity: '150',
            minQuantity: '100',
            maxQuantity: '400',
          },
        ],
      },
      tax: [
        {
          id: 6,
          name: 'IVA',
          percentage: 16,
          description: 'Impuesto de valor agregado',
          status: 'active',
        },
      ],
      category: {
        id: 54,
        name: 'Ventas',
      },
      price: [
        {
          idPriceList: 1,
          name: 'General',
          price: 1200,
        },
        {
          idPriceList: 2,
          name: 'Distribuidor',
          price: 1050,
        },
      ],
    },
    {
      id: 2,
      name: 'Cartera',
      description: 'Cartera de cuero color café',
      reference: 'CAR-195',
      status: 'active',
      inventory: {
        unit: 'piece',
        availableQuantity: 160,
        unitCost: 2560,
        initialQuantity: 120,
        warehouses: [
          {
            id: '1',
            name: 'Bodega Norte',
            observations: '',
            isDefault: true,
            address: 'Dirección de la bodega Norte',
            status: 'active',
            initialQuantity: '20.0',
            availableQuantity: '100',
            minQuantity: '10',
            maxQuantity: '120',
          },
          {
            id: '3',
            name: 'Bodega Sur',
            observations: 'Bodega ubicada en la zona sur',
            isDefault: false,
            address: '',
            status: 'active',
            initialQuantity: '100.0',
            availableQuantity: '600',
            minQuantity: '80',
          },
        ],
      },
      tax: [
        {
          id: 6,
          name: 'IVA',
          percentage: 16,
          description: 'Impuesto de valor agregado',
          status: 'active',
        },
      ],
      category: {
        id: 54,
        name: 'Ventas',
      },
      price: [
        {
          idPriceList: 1,
          name: 'General',
          price: 1200,
        },
        {
          idPriceList: 2,
          name: 'Distribuidor',
          price: 3900,
        },
        {
          name: 'Mayorista',
          idPriceList: 6,
          price: 3700,
        },
      ],
    },
    {
      id: 3,
      name: 'Diseño de monedero ',
      description: 'Diseño de monedero en cuero.',
      reference: '',
      status: 'active',
      tax: [
        {
          id: 6,
          name: 'IVA',
          percentage: 16,
          description: 'Impuesto de valor agregado',
          status: 'active',
        },
      ],
      category: {
        id: 54,
        name: 'Ventas',
      },
      price: [
        {
          idPriceList: 1,
          name: 'General',
          price: 1200,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.product[0].inventory?.warehouses);
  }
}
