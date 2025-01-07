const commentData = [
    {
        name: "Rohan Amberkar",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
        replies: [],
    },
    {
        name: "Rex",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
        replies: [
            {
                name: "Rohan Amberkar",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                replies: [
                    {
                        name: "Tezo",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                        replies: [],
                    }
                ],
            }
        ],
    },
    {
        name: "Mizo",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
        replies: [
            {
                name: "REX",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                replies: [
                    {
                        name: "Becker",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                        replies: [
                            {
                                name: "Rohan Amberkar",
                                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                                replies: [],
                            }
                        ],
                    }
                ],
            }
        ],
    }
]

export default commentData;