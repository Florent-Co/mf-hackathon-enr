import { atom } from 'jotai';
import type maplibregl from "maplibre-gl";

export const mlMapAtom = atom<maplibregl.Map | null>(null);

export const climatelayerPickingValueAtom = atom <{ value: number, unit: string | undefined } | null>(null);