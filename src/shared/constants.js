import citrus from '../assets/images/citrus.jpg'
import berry from '../assets/images/berry.jpg'
import cotton from '../assets/images/cotton.jpg'

export const CROPS = [{
    type: 'Citrus Fruits',
    icon: citrus,
    description: 'Citrus is a genus of flowering trees and shrubs in the rue family, Rutaceae. Plants in the genus produce citrus fruits, including important crops such as oranges, lemons, grapefruits, pomelos, and limes.',
    diseases: [{
        name: 'Citrus Canker',
    },
    {
        name: 'Citrus Black Spot',
    },
    {
        name: 'Alternaria Black Spots(Leaves)',
    },
    ],
    solution: [{
        name: 'Citrus Canker',
        cure: 'Liquid copper fungicide sprays ( organic )',
    }, {
        name: 'Citrus Black Spot',
        cure: 'Hot water Treatment and Waxing the fruit'
    }, {
        name: 'Alternaria Black Spots(Leaves)',
        cure: 'Copper Oxychloride Spray'
    }],
}, {
    type: 'Strawberry',
    icon: berry,
    description: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.',
    diseases: [{
        name: 'Grey mould',
    },
    {
        name: 'Rhizopus Rot',
    },
    {
        name: 'Sunburn',
    },
    ],
    solution: [{
        name: 'Grey mould',
        cure: 'Remove and destroy all affected parts.Avoid fruit contact with soil.',
    }, {
        name: 'Rhizopus Rot',
        cure: 'Remove overripe fruit in the field.Burn or bury waste fruit from around the packing shed',
    }, {
        name: 'Sunburn',
        cure: 'Maintain adequate soil moisture.Provide good leaf canopy',
    }],
}, {
    type: 'Cotton',
    icon: cotton,
    description: 'Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose.',
    diseases: [{
        name: 'Fusarium Wilt',
    },
    {
        name: 'Bacterial Blight',
    },
    {
        name: 'Grey Mildew',
    },
    ],
    solution: [{
        name: 'Fusarium Wilt',
        cure: 'Fertilize on schedule, using a low-nitrogen, high-phosphorus fertilizer',
    }, {
        name: 'Bacterial Blight',
        cure: 'No cure. Should use resistant cultivars',
    }, {
        name: 'Grey Mildew',
        cure: 'Foliar Spray of 3gm wettable sulphur per one litre of water',
    }],
}];