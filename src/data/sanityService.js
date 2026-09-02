/**
 * Sanity CMS Service Integration Layer for Klyph Digital Studio
 * Configured for easy connection to Sanity Studio CMS project.
 */

const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || "";
const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET || "production";
const SANITY_API_VERSION = "2024-01-01";

export async function fetchSanityProjects() {
  if (!SANITY_PROJECT_ID) return null;

  const query = encodeURIComponent(`*[_type == "project"]{
    _id,
    name,
    cat,
    tags,
    emoji,
    bg,
    desc,
    results,
    "videoUrl": video.asset->url,
    "screenshots": screenshots[].asset->url,
    liveUrl
  }`);

  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    return json.result;
  } catch (err) {
    console.warn("Sanity fetch error:", err);
    return null;
  }
}
