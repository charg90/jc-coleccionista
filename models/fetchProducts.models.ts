export interface fetchProducts {
  id: string;
  site_id: string;
  title: string;
  subtitle?: any;
  seller_id: number;
  category_id: string;
  official_store_id?: any;
  price: number;
  base_price: number;
  original_price?: any;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id?: any;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: Selleraddress;
  seller_contact?: any;
  location: Searchlocation;
  coverage_areas: any[];
  attributes: Attribute[];
  warnings: any[];
  listing_source: string;
  variations: Searchlocation[];
  status: string;
  sub_status: string[];
  tags: string[];
  warranty: string;
  catalog_product_id?: any;
  domain_id: string;
  parent_item_id?: any;
  differential_pricing?: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
  channels: string[];
}

interface Attribute {
  id?: string;
  name?: string;
  value_id?: string;
  value_name?: string;
  value_struct?: any;
  values?: any[];
  attribute_group_id?: string;
  attribute_group_name?: string;
  value_type?: string;
}

interface Selleraddress {
  city: City;
  state: City;
  country: City;
  search_location: Searchlocation;
  id: number;
}

interface Searchlocation {}

interface City {
  id: string;
  name: string;
}

interface Shipping {
  mode: string;
  free_methods: Freemethod[];
  tags: any[];
  dimensions?: any;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

interface Freemethod {
  id: number;
  rule: Rule;
}

interface Rule {
  default: boolean;
  free_mode: string;
  free_shipping_flag: boolean;
  value?: any;
}

interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}
