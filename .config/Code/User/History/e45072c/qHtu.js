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
            identifier_field: "title",
            format: "json",
            fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Link", name: "link", widget: "string" },
                { label: "Image Link", name: "image", widget: "string" },
                { label: "Price", name: "price", widget: "string" },
                {
                    label: "Category",
                    name: "category",
                    widget: "relation",
                    collection: "categories",
                    search_fields: ["name"],
                    display_fields: ["name"],
                    value_field: "name",
                },
                {
                    label: "Style",
                    name: "style",
                    widget: "relation",
                    collection: "styles",
                    search_fields: ["name"],
                    display_fields: ["name"],
                    value_field: "name",
                    required: false,
                },
                {
                    label: "Colors",
                    name: "colors",
                    widget: "relation",
                    collection: "colors",
                    search_fields: ["name"],
                    display_fields: ["name"],
                    value_field: "name",
                    required: false,
                },
                {
                    label: "Publish date",
                    name: "publish_date",
                    widget: "datetime",
                    date_format: true,
                    time_format: true,
                    format: "LLL",
                    picker_utc: false,
                },
            ],
        },
        {
            label: "Categories",
            name: "categories",
            folder: "public/data/categories",
            create: true,
            identifier_field: "name",
            format: "json",
            fields: [{ label: "Name", name: "name", widget: "string" }],
        },
        {
            label: "Styles",
            name: "styles",
            folder: "public/data/styles",
            create: true,
            identifier_field: "name",
            format: "json",
            fields: [{ label: "Name", name: "name", widget: "string" }],
        },
        {
            label: "Colors",
            name: "colors",
            folder: "public/data/colors",
            create: true,
            identifier_field: "name",
            format: "json",
            fields: [{ label: "Name", name: "name", widget: "string" }],
        },
    ],
};
