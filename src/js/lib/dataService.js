const baseUrl = 'http://localhost:9090/CatalogEntryView';
export const loadCatalogEntries = () => {
    return fetch(baseUrl)
        .then(res => res.json());
}