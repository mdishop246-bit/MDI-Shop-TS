export interface Product {
  id: number;
  sku: string;

  nombre: string;
  marca: string;
  categoria: string;

  descripcion: string;

  imagen: string;

  proveedor: string;

  precioProveedor: number;
  porcentajeGanancia: number;
  precioVenta: number;

  existencia: number;

  especificaciones: ProductSpecifications;
}

export interface ProductSpecifications {
  procesador?: string;
  memoriaRAM?: string;
  almacenamiento?: string;
  tarjetaGrafica?: string;
  pantalla?: string;
  resolucion?: string;
  sistemaOperativo?: string;
  puertos?: string[];
  peso?: string;
  color?: string;
}