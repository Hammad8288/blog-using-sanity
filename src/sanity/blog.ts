import {defineType , defineField} from "sanity" ;

export default defineType( {
    name : "blog",
    title : "Blog",
    type : "document",
    fields : [defineField(
        {
            name : "title",
            title : "Title",
            type : "string",
            validation : Rule => Rule.required()
        } ),
        defineField({
            name : "slug",
            title : "Slug" ,
            type : "slug",
            options : {
                source : 'title',
                maxLength : 96
            },
            validation : Rule => Rule.required()
        }),
        defineField({
            name : "summary",
            title : "Summary",
            type : "text",
            validation : Rule => Rule.required()
        }),
        defineField({
            name : "image",
            title : "Image",
            type : "image",
            options : {
                hotspot : true
            },
        }),
        defineField({
            name : "content",
            title : "Content",
            type : "array",
            of : [
                {
                    type : "block"
                }
            ]
        }),
        defineField({
            name : "author",
            title : "Author",
            type : "reference",
            to : [
                {
                    type : "author"
                }
            ],
        }),
        
    ]
} ) ;