export type CustomerType = 'retail' | 'wholesale';
export type PaymentMethod = 'swish' | 'card' | 'invoice'; // Example options
export type PaymentStatus = 'pending' | 'paid' | 'failed';
export type City = 
  | 'Gothenburg'
  | 'Halmstad'
  | 'Jönköping'
  | 'Borås'
  | 'Helsingborg'
  | 'Trollhättan';

export interface Order {
  id?: number;
  customer_type: CustomerType;
  
  // Conditional for wholesale
  company_name?: string | null;
  org_number?: string | null;
  vat_id?: string | null;
  
  city: City;
  quantity: number;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  
  created_at?: Date;
  updated_at?: Date;
}
