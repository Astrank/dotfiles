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
            label: "Product",
            name: "product",
            folder: "public/data/products",
            create: true,
            identifier_field: "link",
            format: "json",
            fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Link", name: "link", widget: "string" },
                { label: "Category", name: "category", widget: "relation" },
            ],
        },
    ],
};
