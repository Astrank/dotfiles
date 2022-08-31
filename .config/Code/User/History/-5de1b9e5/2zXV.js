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
            label: "Post",
            name: "post",
            folder: "public/data/posts",
            create: true,
            identifier_field: "title",
            slug: "{{fields.slug}}",
            format: "json",
            fields: [
                { label: "Slug", name: "slug", widget: "string", pattern: ["^[a-zA-Z0-9-_]+$", "Alphanumeric with dashes or underscores"] },
                { label: "Title", name: "title", widget: "string" },
                { label: "Author", name: "author", widget: "string", required: false },
                { label: "Author Link", name: "author_link", widget: "string", required: false },
                { label: "Post content", name: "body", widget: "markdown" },
                { 
                    label: "Post date", 
                    name: "date", 
                    widget: "datetime", 
                    default: "",
                    date_format: "DD.MM.YYYY",
                    time_format: "HH:mm", 
                    format: "LLL",
                    picker_utc: false,
                    required: false,
                },
            ]
        },
    ],
};
