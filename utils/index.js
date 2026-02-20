export const checkImageURL = (url) => {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  return trimmed.length > 0 && /^https?:\/\//i.test(trimmed);
};

export const getEmployerInitials = (name) => {
  if (!name || typeof name !== "string") return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
