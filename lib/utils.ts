import { type Item } from "@/types/wow-character";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractTier = (items: { [key: string]: Item }) => {
  const tiers: { [key: string]: any } = {};

  for (const category in items) {
    const item = items[category];
    const itemId = item.item_id;
    const tier = item.tier || "Sin tier"; // Usamos 'Sin tier' si no está presente

    if (!tiers[tier]) {
      tiers[tier] = [];
    }
    tiers[tier].push(itemId);
  }
  return tiers;
};
