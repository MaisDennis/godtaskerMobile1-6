export function updateContacts(data) {
  return {
    type: '@contact/UPDATE_CONTACTS',
    payload: { data },
  };
}
