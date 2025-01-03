export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "introuction",
            title: "Introuction",
            type: "text"
        },
        {
            name: "tecnicalSkills",
            title: "Tecnical Skills",
            type: "text",
        },
        {
            name: "personalInterests",
            title: "Personal Interests",
            type: "text",
        },
        {
            name: "profileImage",
            title: "profileImage",
            type: "image",
            Option: {
                hotspot: true
            }
        },

    ]
}