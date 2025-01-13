const commentData = [
    {
        name: "Rohan Amberkar",
        time: 2,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
        replies: [],
    },
    {
        name: "Rex",
        time: 3,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
        replies: [
            {
                name: "Rohan Amberkar",
                time: 4,
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
        time: 1,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
        replies: [
            {
                name: "REX",
                time: 4,
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                replies: [
                    {
                        name: "Becker",
                        time: 2,
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quod sit eaque fuga",
                        replies: [
                            {
                                name: "Rohan Amberkar",
                                time: 5,
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