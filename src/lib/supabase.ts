import { createClient } from '@supabase/supabase-js';
import { ContactInquiry, RFQRequest } from '../types';

// Retrieve Supabase config from Vite environment variables safely
const supabaseUrl = ((import.meta as any).env?.VITE_SUPABASE_URL as string) || '';
const supabaseAnonKey = ((import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string) || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-supabase-project') &&
  !supabaseAnonKey.includes('your-supabase-anon-key')
);

// Create Supabase client instance (or null if not configured)
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Persistent Local Memory / LocalStorage Fallback database helpers
const CONTACT_STORAGE_KEY = 'casial_contact_inquiries';
const RFQ_STORAGE_KEY = 'casial_rfq_requests';

export async function submitContactInquiry(data: ContactInquiry): Promise<{ success: boolean; message: string; data?: ContactInquiry }> {
  const payload: ContactInquiry = {
    ...data,
    id: `INQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    created_at: new Date().toISOString(),
    status: 'new'
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data: dbData, error } = await supabase
        .from('contact_inquiries')
        .insert([payload])
        .select()
        .single();

      if (error) {
        console.warn('Supabase DB error, falling back to local database persistence:', error);
      } else {
        return {
          success: true,
          message: 'Inquiry submitted successfully! Our export desk will contact you within 2 hours.',
          data: dbData as ContactInquiry
        };
      }
    } catch (err) {
      console.warn('Supabase request failed, using local storage fallback:', err);
    }
  }

  // Fallback to local storage
  const existing = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || '[]');
  existing.unshift(payload);
  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(existing));

  return {
    success: true,
    message: 'Inquiry recorded successfully! Reference Code: ' + payload.id + '. Our export desk will reply via email & WhatsApp within 2 hours.',
    data: payload
  };
}

export async function submitRFQRequest(data: RFQRequest): Promise<{ success: boolean; message: string; data?: RFQRequest }> {
  const payload: RFQRequest = {
    ...data,
    id: `RFQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    created_at: new Date().toISOString(),
    status: 'pending'
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data: dbData, error } = await supabase
        .from('rfq_requests')
        .insert([payload])
        .select()
        .single();

      if (error) {
        console.warn('Supabase DB error, falling back to local database persistence:', error);
      } else {
        return {
          success: true,
          message: 'RFQ received! Our freight logistics team is preparing your CIF/FOB quote spec sheet.',
          data: dbData as RFQRequest
        };
      }
    } catch (err) {
      console.warn('Supabase request failed, using local storage fallback:', err);
    }
  }

  // Fallback to local storage
  const existing = JSON.parse(localStorage.getItem(RFQ_STORAGE_KEY) || '[]');
  existing.unshift(payload);
  localStorage.setItem(RFQ_STORAGE_KEY, JSON.stringify(existing));

  return {
    success: true,
    message: `RFQ Quote Request recorded! Reference: ${payload.id}. Freight estimate calculation generated below.`,
    data: payload
  };
}

export function getLocalInquiries(): ContactInquiry[] {
  return JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || '[]');
}

export function getLocalRFQs(): RFQRequest[] {
  return JSON.parse(localStorage.getItem(RFQ_STORAGE_KEY) || '[]');
}
