const mapping: Record<string, string> = {
  organizations: 'organization',
  texts: 'text',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
