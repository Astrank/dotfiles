module.exports = {
    cms_manual_init: true,
    local_backend: true,
    backend: {
        name: "git-gateway",
        branch: "master",
        squash_merges: true,
    },
    media_folder: "public/images/",
    public_folder: "images/",
    collections: [
        {
            label: "Categorías",
            name: "categories",
            folder: "public/data/categories",
            create: true,
            identifier_field: "name",
            format: "json",
            fields: [{ label: "Nombre", name: "name", widget: "string" }],
        },
    ],
};
