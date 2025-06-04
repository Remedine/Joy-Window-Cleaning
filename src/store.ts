import { writable } from 'svelte/store';

export interface Slot {
  date: string;
  time: string;
}

export interface Reservation {
  id: string;
  // Add other fields as per Cal.com API response
}

export const availableSlots = writable<Slot[]>([]);
export const selectedDate = writable<string | null>(null);
export const selectedTime = writable<string | null>(null);
export const reservationDetails = writable<Reservation | null>(null);

// Optional: Reset function for Tab 4
export function resetState() {
  availableSlots.set([]);
  selectedDate.set(null);
  selectedTime.set(null);
  reservationDetails.set(null);
}