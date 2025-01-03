import { defineType , defineField } from "sanity"

export default defineType ( {
    name : "author",
    title : "Author",
    type : "document",
    fields : [
        defineField({
            name : "authorname",
            title : "Author Name",
            type : "string",
        }),
        defineField({
            name : "authorimage",
            title : "Author Image",
            type : "image",
            options : {
                hotspot : true
            },
        }),
    ],
})