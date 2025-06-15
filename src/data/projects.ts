import { students } from "./students";

type PortfolioTag = 'AVT' | 'Productie' | 'Realisatie';
type Credit = {
    personID: string;
    function: string;
}

export interface PortfolioProject {
    id: string;
    title: string;
    subtitle?: string;
    workyear: '2223' | '2324' | '2425';
    description: string;
    image: string;
    tags: PortfolioTag[];
    personal: boolean;
    owner?: keyof typeof students;
    credits: Credit[];
}

export const projects: PortfolioProject[] = [
    {
        id: 'testproject',
        title: 'Testproject',
        workyear: '2324',
        description: 'Dit is een testproject om de portfolio functionaliteit te demonstreren.',
        image: '',
        tags: ['AVT', 'Productie'],
        personal: false,
        owner: 'maximcoppieters',
        credits: [
            { personID: 'maximcoppieters', function: 'Projectleider' },
            { personID: 'maximcoppieters', function: 'Camera' }
        ]
    },
    {
        id: 'mxm_detweedegolf',
        title: 'De Tweede Golf',
        subtitle: 'Captatie en montage',
        workyear: '2425',
        description: 'Tijdens stage bij INSCENE kreeg ik de oppertuniteit om de volledige captatie en montage van een theatervoorsetlling "De Tweede Golf" te beheren en uit te voeren.',
        image: '',
        tags: ['Camera', 'Montage'],
        personal: true,
        owner: 'maximcoppieters',
        credits: [
            { personID: 'maximcoppieters', function: 'Camera' },
            { personID: 'maximcoppieters', function: 'Montage' },
            { personID: 'maximcoppieters', function: 'Technisch verantwoordelijke' }
        ]
    }
]
