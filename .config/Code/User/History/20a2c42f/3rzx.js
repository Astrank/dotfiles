module.exports = {
    cms_manual_init: true,
    local_backend: true,
    backend: {
        name: "git-gateway",
        branch: "master",
        squash_merges: true,
    },
    locale: 'es',
    media_folder: "public/images/",
    public_folder: "images/",
    collections: [
        {
            label: "Posts",
            name: "posts",
            folder: "/public/data/posts",
            create: true,
            identifier_field: "slug",
            format: "json",
            fields: [
                { label: "Titulo", name: "title", widget: "string" },
                { label: "Slug", name: "slug", widget: "string" },
                {
                    label: "Autor", name: "author", widget: "relation",
                    collection: "authors",
                    search_fields: ["name"],
                    display_fields: ["name"],
                    value_field: "name"
                },
                { label: "Contenido", name: "content", widget: "markdown" },
                { 
                    label: "Publish date", 
                    name: "publish_date", 
                    widget: "datetime", 
                    date_format: true,
                    time_format: true, 
                    format: "LLL",
                    picker_utc: false,
                },
            ]
        },
        {
            label: "Autores",
            name: "authors",
            folder: "/public/data/authors",
            create: true,
            identifier_field: "name",
            format: "json",
            fields: [
                { label: "Nombre", name: "name", widget: "string" }
            ]
        }
    ],
};
