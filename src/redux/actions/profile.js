export const PROFILE_DETAILS = 'PROFILE_DETAILS';

export function profileDetails(details) {
  return {
    type: PROFILE_DETAILS,
    details,
  };
}
