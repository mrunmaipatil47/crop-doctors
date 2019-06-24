import citrus from '../assets/images/citrus.jpg'
import berry from '../assets/images/berry.jpg'
import cotton from '../assets/images/cotton.jpg'
import citrusCanker from '../assets/images/00.jpg'
import blackspot from '../assets/images/01.jpg'
import greyMould from '../assets/images/10.jpg'
import rhizopusRot from '../assets/images/11.jpg'
import bacterialBlight from '../assets/images/20.jpg'
import greyMildew from '../assets/images/21.jpg'

export const CROPS = [{
    type: 'Citrus-Fruits',
    icon: citrus,
    description: 'Citrus is a genus of flowering trees and shrubs in the rue family, Rutaceae. Plants in the genus produce citrus fruits, including important crops such as oranges, lemons, grapefruits, pomelos, and limes.',
    diseases: [{
        name: 'Citrus Canker',
    },
    {
        name: 'Citrus Black Spot',
    },
    ],
    solution: [{
        name: 'Citrus Canker',
        // eslint-disable-next-line no-multi-str
        description: 'DISEASE: Citrus canker \n \
        PATHOGEN: Xanthomonas axonopodis pv. citri and Xanthomonas axonopodis pv. aurantifolii  \n \
        HOSTS: Numerous species, cultivars, and hybrids of citrus and citrus relatives including orange, grapefruit, pummelo, mandarin, lemon, lime, tangerine, tangelo, sour orange, rough lemon, calamondin, trifoliate orange, and kumquat.',
        cure: 'Copper-based fungicides or bactericides can provide a barrier against infection, but they will not treat an existing infection. Control for citrus canker is better achieved through prevention. Once you spot a lesion on your citrus tree, that lesion can\'t be cured.',
        image: citrusCanker
    }, {
        name: 'Citrus Black Spot',
        // eslint-disable-next-line no-multi-str
        description: 'DISEASE: Citrus Black Spot \n \
        Host: Citrus Fruits \
        Causal agents: Phyllosticta citricarpa \
        Description : Citrus black spot is a fungal disease caused by Guignardia citricarpa. This Ascomycete fungus affects citrus plants throughout subtropical climates, causing a reduction in both fruit quantity and quality. Symptoms include both fruit and leaf lesions, the latter being critical to inter-tree dispersal.',
        cure: 'Biological Control :  Spore monitoring through traps and rainfall and dew measurements can help to determine the timing for fungicide application. A number of copper products can be used against this pathogen. Post-harvest treatments with hot water or waxing of the fruits also decrease the viability of the pathogen and the  manifestation of symptoms. Hot water Treatment and Waxing the fruit',
        image: blackspot
    }],
}, {
    type: 'Strawberries',
    icon: berry,
    // eslint-disable-next-line no-multi-str
    description: 'DISEASE : Grey Mould \
        PATHOGEN : Botrytis cinerea is an unspecialized necrotrophic fungus that produces grayish masses of mycelium, conidiophores, and conidia on the surface of rotted tissues \
    The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.',
    diseases: [{
        name: 'Grey mould',
    },
    {
        name: 'Rhizopus Rot',
    },
    ],
    solution: [{
        name: 'Grey mould',
        // eslint-disable-next-line no-multi-str
        cure: 'Integrated Pest Management Strategies\
        1. Remove infected plant parts. Collecting and removing infected plant parts can slow the spread of the disease. This should be done frequently especially during fruit bearing time.\
        2. Improve air circulation around the plants. Space plants widely and prune leaves so that adequate air flow may speed drying of the vegetation. Work with plants when they are dry.\
        3. Avoid spring applications of nitrogen fertilizer. High nitrogen levels promote excessive leaf growth and available surfaces for infection.\
        4. Harvest regularly. Remove and dispose of rotten or severely damaged fruit throughout the season.\
        5. Move plants to a better location.Select sites for planting that have good air circulation, are not shaded, and not subject to frost injury.\
        6. Use fungicide sprays, if necessary. Apply a fungicide at 5–10% bloom and at full bloom. Fungicides may be reapplied every 7–10 days during wet seasons. Pesticides registered for use include captan, chlorothalonil (Daconil), copper, iprodione (Chipco), mancozeb, sulfur, thiram, and ziram.',
        image: greyMould,
    }, {
        name: 'Rhizopus Rot',
        // eslint-disable-next-line no-multi-str
        cure: 'DISEASE: RHIZOPUS ROT \n \
            Rhizopus is a genus of common saprophytic fungi on plants and specialized parasites on animals. They are found on a wide variety of organic substrates, including "mature fruits and vegetables",[2] jellies, syrups, leather, bread, peanuts, and tobacco. \
        Cultural Control \n \
        Field sanitation is extremely important. Handle fruit with care at all times. Remove all ripe fruit from the field at harvest. Be sure when fruit is being picked that the entire fruit is removed from the stem, not leaving behind the fleshy receptacle of the fruit as it can serve as a site for invasion by fungusRemove overripe fruit in the field.Burn or bury waste fruit from around the packing shed',
        image: rhizopusRot
    }],
}, {
    type: 'Cotton',
    icon: cotton,
    description: 'Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose.',
    diseases: [
        {
            name: 'Bacterial Blight',
        },
        {
            name: 'Grey Mildew',
        },
    ],
    solution: [{
        name: 'Bacterial Blight',
        cure: ' Cotton bacterial blight is caused by Xanthomonas citri subsp. malvacearum, a bacterium that survives in infested crop debris or seeds. It is one of the most devastating diseases of cotton. Significant rainfall events and high humidity, combined with warm temperatures, favor the development of the disease. The bacteria enter leaf tissues through the natural openings in the leaves (stomata) or mechanical wounds. This  explains why the disease is most severe following storms that produce heavy rains or hail. Since the infections may be seedborne, the delinting of seeds through an acid treatment has been instrumental in minimizing the spread of bacterial blight through contaminated seed. Seedlings growing from volunteer plants may also be a source of primary infection by bacterial blight. ',
        image: bacterialBlight
    }, {
        name: 'Grey Mildew',
            cure: 'Biological Control : \n Seed treatment with products containing Pseudomonas fluorescens (10g/kg seeds) can be done. Spraying of a solution containing this bacterium every 10 days reduces the infection significantly. Other bacteria (Bacillus circulans and Serratia marcescens) have been used to control other species of Mycosphaerella and reduce the incidence of related diseases in other crops. Spray of 3 gm wettable sulphur per one litre of water or dusting of 8-10 kg of sulphur powder per hectare are other possibilities. ',
        image: greyMildew
    }],
}];