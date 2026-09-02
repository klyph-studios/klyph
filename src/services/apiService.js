/**
 * API Service Layer for Klyph Digital Studio
 * Plug-and-play connection for Python (FastAPI / Flask / Django) or Java (Spring Boot) backends.
 */

import { DEFAULT_DATA } from "../data/defaultData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export async function fetchSiteData() {
  try {
    const res = await fetch(`${API_BASE_URL}/site-data`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.info("Using local fallback data (Python/Java API endpoint offline):", err.message);
    return loadFromLocalStorage() || DEFAULT_DATA;
  }
}

export async function saveSiteData(data) {
  saveToLocalStorage(data);
  try {
    const res = await fetch(`${API_BASE_URL}/site-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (err) {
    console.warn("Could not sync with Python/Java backend endpoint:", err.message);
    return false;
  }
}

function loadFromLocalStorage() {
  try {
    const item = localStorage.getItem("klyph_v1");
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

function saveToLocalStorage(data) {
  try {
    localStorage.setItem("klyph_v1", JSON.stringify(data));
  } catch (err) {
    console.warn("LocalStorage save error:", err);
  }
}
