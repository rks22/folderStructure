

const orgSelector = response => response.organisation

const locations = response =>  orgSelector(response).locations

